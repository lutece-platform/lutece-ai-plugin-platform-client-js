/**
 * Chat thread view: bubbles, notifications, streaming and citations (SPEC §3,
 * §4, §7, §8, §9; FEATURES "zone de chat" / "message streamé" / "sources").
 *
 * The thread owns a message list and a "current bot message" group. SSE events
 * are routed in through onSseEvent. Tokens are accumulated as raw markdown and
 * painted at most once per animation frame (rAF) via render/markdown.renderInto,
 * then [Source N] markers are turned into citation buttons. Every untrusted
 * string (tokens, history, tool data) reaches the DOM only through sanitizeMarkdown
 * or textContent — never raw innerHTML.
 */

import { el, clear } from './dom.js';
import { renderInto, escapeHtml } from '../render/markdown.js';
import { icon } from './icons.js';
import { toolLabel, toolIcon } from './tool-labels.js';

/** @type {RegExp} Matches a persisted RAG context block injected into user messages. */
const RAG_CONTEXT_RE = /<rag_context>[\s\S]*?<\/rag_context>/gi;
/** @type {RegExp} Matches a [Source N] citation marker. */
const CITATION_RE = /\[Source\s+(\d+)\]/g;

/**
 * Strips the server-injected <rag_context> block (and trims) from a persisted
 * user message so the prompt scaffolding never shows in the UI.
 *
 * @param {string} text The raw persisted message.
 * @returns {string} The cleaned message text.
 */
function stripRagContext(text) {
  return String(text || '').replace(RAG_CONTEXT_RE, '').trim();
}

/**
 * The chat thread. One instance per open conversation; the element creates it,
 * feeds it SSE events and history, and tears it down by clearing the host.
 */
export class ChatThread {
  /**
   * Builds the thread inside a host element.
   *
   * @param {Element} host The mount element (a region of the shadow tree).
   * @param {object} [callbacks] View callbacks.
   * @param {(source:object)=>void} [callbacks.onCitation] Invoked when a citation is clicked.
   * @param {(message:object, isPositive:boolean)=>void} [callbacks.onFeedback] Feedback handler.
   */
  constructor(host, { onCitation, onFeedback } = {}) {
    this.host = host;
    this.onCitation = onCitation || (() => {});
    this.onFeedback = onFeedback || null;
    this.list = el('div', { class: 'lc-thread', part: 'thread' });
    clear(host);
    host.appendChild(this.list);
    this.current = null;
    this.buffer = '';
    this.rafId = 0;
    this.sources = [];
  }

  /**
   * Appends a user bubble, rendering the (untrusted) text as plain text.
   *
   * @param {string} text The user message.
   * @returns {void}
   */
  addUserMessage(text) {
    const bubble = el('div', { class: 'lc-msg lc-msg--user', part: 'message-user' }, [
      el('div', { class: 'lc-msg__body' }, text)
    ]);
    this.list.appendChild(bubble);
    this.scroll();
  }

  /**
   * Starts a new bot message group with a typing indicator and the aria-live
   * region used while tokens stream in.
   *
   * @returns {void}
   */
  startBotMessage() {
    const notifs = el('div', { class: 'lc-msg__notifs', part: 'notifications' });
    const body = el('div', {
      class: 'lc-msg__body',
      part: 'message-bot-body',
      'aria-live': 'polite'
    });
    const typing = el('div', { class: 'lc-typing', 'aria-hidden': 'true' }, [
      el('span', {}, ''),
      el('span', {}, ''),
      el('span', {}, '')
    ]);
    const bubble = el(
      'div',
      { class: 'lc-msg lc-msg--bot', part: 'message-bot', 'aria-busy': 'true' },
      [notifs, body, typing]
    );
    this.list.appendChild(bubble);
    this.current = { bubble, notifs, body, typing, tools: new Map() };
    this.buffer = '';
    this.sources = [];
    this.scroll();
  }

  /**
   * Routes one SSE event to the matching renderer. Unknown events are ignored.
   *
   * @param {string} name The SSE event name.
   * @param {object} data The SSE data record (fields at the top level).
   * @returns {void}
   */
  onSseEvent(name, data) {
    switch (name) {
      case 'DATASETS_ROUTED':
        this.renderDatasets(data.datasets || []);
        break;
      case 'BOT_TOKEN_STREAMED':
        this.appendToken(data.token || '');
        break;
      case 'BOT_BUILTIN_TOOL_STARTED':
        this.upsertTool('tool', data, 'running');
        break;
      case 'BOT_BUILTIN_TOOL_COMPLETED':
        this.upsertTool('tool', data, 'done');
        break;
      case 'BOT_BUILTIN_TOOL_FAILED':
        this.upsertTool('tool', data, 'failed');
        break;
      case 'BOT_TOOL_PIPELINE_STARTED':
        this.upsertTool('pipeline-tool', data, 'running');
        break;
      case 'BOT_TOOL_PIPELINE_COMPLETED':
        this.upsertTool('pipeline-tool', data, 'done');
        break;
      case 'BOT_TOOL_PIPELINE_FAILED':
        this.upsertTool('pipeline-tool', data, 'failed');
        break;
      case 'BOT_SOURCES_RETRIEVED':
        this.sources = data.sources || [];
        this.scheduleFlush();
        break;
      case 'BOT_STREAM_ERROR':
        this.renderError(data.errorMessage || 'Erreur de génération.', data.errorDetails);
        break;
      case 'error':
        this.renderError(data.error || 'Erreur.', null);
        break;
      default:
        break;
    }
  }

  /**
   * Renders a simple datasets-routing notification listing the dataset names.
   * Empty routing produces no notification (KISS).
   *
   * @param {Array<{id:(number|string), name:string}>} datasets The routed datasets.
   * @returns {void}
   */
  renderDatasets(datasets) {
    if (!this.current || datasets.length === 0) {
      return;
    }
    const names = datasets.map((d) => d.name).filter(Boolean);
    const details = el(
      'div',
      { class: 'lc-notif__details', hidden: true },
      el('ul', { class: 'lc-notif__dataset-list' }, names.map((name) => el('li', {}, name)))
    );
    const toggle = el(
      'button',
      { type: 'button', class: 'lc-notif__toggle', 'aria-expanded': 'false' },
      [icon('database', { size: 16 }), el('span', {}, `Recherche dans : ${names.join(', ')}`), icon('chevron', { size: 14 })]
    );
    toggle.addEventListener('click', () => {
      const open = details.hidden;
      details.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    const notif = el(
      'div',
      { class: 'lc-notif lc-notif--datasets', part: 'notif-datasets', role: 'status' },
      [toggle, details]
    );
    this.current.notifs.appendChild(notif);
    this.scroll();
  }

  /**
   * Creates or updates a tool / pipeline-tool notification by toolName, moving it
   * through running -> done/failed and filling its expandable details.
   *
   * @param {('tool'|'pipeline-tool')} kind The notification kind.
   * @param {object} data The tool event data.
   * @param {('running'|'done'|'failed')} status The new status.
   * @returns {void}
   */
  upsertTool(kind, data, status) {
    if (!this.current) {
      return;
    }
    const key = `${kind}:${data.toolName}`;
    let entry = this.current.tools.get(key);
    if (!entry) {
      entry = this.buildToolNotif(kind, data);
      this.current.tools.set(key, entry);
      this.current.notifs.appendChild(entry.notif);
    }
    entry.notif.dataset.status = status;
    entry.statusLabel.textContent = status === 'running' ? '…' : status === 'failed' ? 'échec' : 'terminé';
    const detail =
      status === 'failed'
        ? data.errorMessage
        : status === 'done'
          ? data.resultPreview
          : data.toolArgs;
    this.fillDetails(entry.details, detail);
    this.scroll();
  }

  /**
   * Builds a collapsed tool notification with a toggle button and a hidden
   * details panel.
   *
   * @param {('tool'|'pipeline-tool')} kind The notification kind.
   * @param {object} data The tool event data.
   * @returns {{notif:HTMLElement, statusLabel:HTMLElement, details:HTMLElement}} The entry handles.
   */
  buildToolNotif(kind, data) {
    const label = toolLabel(data.toolName);
    const statusLabel = el('span', { class: 'lc-notif__status' }, '…');
    const spinner = el('span', { class: 'lc-notif__spinner', 'aria-hidden': 'true' });
    const details = el('div', { class: 'lc-notif__details', hidden: true });
    const toggle = el(
      'button',
      { type: 'button', class: 'lc-notif__toggle', 'aria-expanded': 'false' },
      [kind === 'pipeline-tool' ? icon('tool', { size: 16 }) : toolIcon(data.toolName), el('span', {}, label), spinner, statusLabel, icon('chevron', { size: 14 })]
    );
    toggle.addEventListener('click', () => {
      const open = details.hidden;
      details.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    const notif = el(
      'div',
      {
        class: `lc-notif lc-notif--${kind}`,
        part: `notif-${kind}`,
        role: 'status',
        'data-status': 'running'
      },
      [toggle, details]
    );
    return { notif, statusLabel, details };
  }

  /**
   * Fills a tool details panel with a value rendered as text (never HTML). A null
   * detail leaves an empty panel.
   *
   * @param {HTMLElement} panel The details panel.
   * @param {*} value The detail value (string or null).
   * @returns {void}
   */
  fillDetails(panel, value) {
    clear(panel);
    if (value === null || value === undefined || value === '') {
      return;
    }
    panel.appendChild(el('pre', { class: 'lc-notif__pre' }, String(value)));
  }

  /**
   * Appends a streamed token to the markdown buffer and schedules a single
   * per-frame flush (avoids O(n^2) re-parse-on-every-token).
   *
   * @param {string} token The streamed text chunk.
   * @returns {void}
   */
  appendToken(token) {
    if (!this.current) {
      this.startBotMessage();
    }
    if (this.current.typing) {
      this.current.typing.remove();
      this.current.typing = null;
    }
    this.buffer += token;
    this.scheduleFlush();
  }

  /**
   * Schedules a markdown flush for the next animation frame, coalescing multiple
   * tokens received in the same frame into a single re-render.
   *
   * @returns {void}
   */
  scheduleFlush() {
    if (this.rafId || !this.current) {
      return;
    }
    this.rafId = requestAnimationFrame(() => {
      this.rafId = 0;
      this.flush();
    });
  }

  /**
   * Renders the accumulated markdown into the current bot body (sanitized) and
   * upgrades [Source N] markers into citation buttons.
   *
   * @returns {void}
   */
  flush() {
    if (!this.current) {
      return;
    }
    renderInto(this.current.body, this.buffer);
    this.current.body.classList.add('lc-msg__body--streaming');
    this.upgradeCitations(this.current.body);
    this.current.body.appendChild(el('span', { class: 'lc-caret', 'aria-hidden': 'true' }, '●'));
    this.scroll();
  }

  /**
   * Walks the rendered body, replacing [Source N] text occurrences with citation
   * buttons that, when clicked, invoke onCitation with the matching source. The
   * source is resolved by its source_number; unknown numbers stay plain text.
   *
   * @param {HTMLElement} body The rendered bot body.
   * @returns {void}
   */
  upgradeCitations(body) {
    const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
    const targets = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (node.parentElement && node.parentElement.closest('button.lc-citation')) {
        continue;
      }
      if (CITATION_RE.test(node.nodeValue)) {
        targets.push(node);
      }
      CITATION_RE.lastIndex = 0;
    }
    for (const node of targets) {
      this.replaceCitations(node);
    }
  }

  /**
   * Replaces every [Source N] inside one text node with a citation button.
   *
   * @param {Text} node The text node to transform.
   * @returns {void}
   */
  replaceCitations(node) {
    const text = node.nodeValue;
    const frag = document.createDocumentFragment();
    let last = 0;
    let match;
    CITATION_RE.lastIndex = 0;
    while ((match = CITATION_RE.exec(text)) !== null) {
      if (match.index > last) {
        frag.appendChild(document.createTextNode(text.slice(last, match.index)));
      }
      frag.appendChild(this.citationButton(match[1]));
      last = match.index + match[0].length;
    }
    if (last < text.length) {
      frag.appendChild(document.createTextNode(text.slice(last)));
    }
    node.parentNode.replaceChild(frag, node);
  }

  /**
   * Builds one citation button for a source number, wired to onCitation with the
   * resolved source object (or a minimal stub when unknown).
   *
   * @param {string} number The source number captured from the marker.
   * @returns {HTMLButtonElement} The citation button.
   */
  citationButton(number) {
    const source = this.sources.find((s) => String(s.source_number) === String(number)) || { source_number: number };
    return el(
      'button',
      {
        type: 'button',
        class: 'lc-citation',
        part: 'citation',
        'aria-label': `Voir la source ${number}`,
        onClick: () => this.onCitation(source)
      },
      `Source ${number}`
    );
  }

  /**
   * Finalises the current bot message: cancels any pending flush, paints the
   * final markdown, clears the streaming/busy state and removes the typing dots.
   *
   * @returns {void}
   */
  finishBotMessage() {
    if (!this.current) {
      return;
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    this.flush();
    this.current.body.classList.remove('lc-msg__body--streaming');
    const caret = this.current.body.querySelector('.lc-caret');
    if (caret) {
      caret.remove();
    }
    this.current.bubble.setAttribute('aria-busy', 'false');
    if (this.current.typing) {
      this.current.typing.remove();
      this.current.typing = null;
    }
    this.current = null;
    this.buffer = '';
  }

  /**
   * Renders an inline error inside the current bot bubble (or a standalone error
   * bubble) and ends the streaming state. Details are logged, not shown.
   *
   * @param {string} message The user-facing error message.
   * @param {*} [details] Optional technical details (console only).
   * @returns {void}
   */
  renderError(message, details) {
    if (details) {
      console.error('lutece-chat stream error:', details);
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
    const errNode = el('div', { class: 'lc-msg lc-msg--error', part: 'message-error', role: 'alert' }, message);
    if (this.current) {
      if (this.current.typing) {
        this.current.typing.remove();
        this.current.typing = null;
      }
      this.current.bubble.setAttribute('aria-busy', 'false');
      this.current.bubble.appendChild(errNode);
      this.current = null;
    } else {
      this.list.appendChild(errNode);
    }
    this.buffer = '';
    this.scroll();
  }

  /**
   * Re-renders a persisted conversation: user bubbles (rag-context stripped) and
   * bot bubbles (markdown sanitized). Feedback rendering is delegated upward.
   *
   * @param {Array<{message:string, role:string, feedback?:object, id?:(number|string)}>} messages The persisted messages.
   * @returns {void}
   */
  renderHistory(messages) {
    clear(this.list);
    for (const msg of messages || []) {
      if (msg.role === 'user') {
        this.addUserMessage(stripRagContext(msg.message));
      } else {
        const body = el('div', { class: 'lc-msg__body' });
        renderInto(body, msg.message || '');
        this.sources = [];
        this.upgradeCitations(body);
        const bubble = el('div', { class: 'lc-msg lc-msg--bot', part: 'message-bot', 'data-message-id': msg.id != null ? String(msg.id) : '' }, body);
        this.list.appendChild(bubble);
      }
    }
    this.scroll();
  }

  /**
   * Attaches a "copy message" button to a bot bubble. The copied text is the
   * rendered body stripped of code blocks (<pre>) and the streaming caret, so it
   * differs from the per-code-block copy. A transient "is-copied" class shows the
   * confirmation. Idempotent: a bubble already carrying the button is left alone.
   *
   * @param {HTMLElement} bubble The bot bubble.
   * @returns {void}
   */
  attachCopyButton(bubble) {
    if (!bubble || bubble.querySelector('.lc-msg__copy')) {
      return;
    }
    const body = bubble.querySelector('.lc-msg__body');
    if (!body) {
      return;
    }
    const btn = el('button', { type: 'button', class: 'lc-msg__copy', 'aria-label': 'Copier le message' }, [icon('copy', { size: 16 })]);
    btn.addEventListener('click', () => {
      const clone = body.cloneNode(true);
      clone.querySelectorAll('pre, .lc-caret').forEach((n) => n.remove());
      const text = clone.textContent.trim();
      Promise.resolve(navigator.clipboard && navigator.clipboard.writeText(text)).then(() => {
        btn.classList.add('is-copied');
        setTimeout(() => btn.classList.remove('is-copied'), 1500);
      });
    });
    this.actionsRow(bubble).appendChild(btn);
  }

  /**
   * Returns the bubble's single right-aligned actions row (thumbs + copy),
   * creating it just before the disclaimer so the disclaimer always stays last.
   * Flex `order` keeps thumbs left of copy regardless of insertion timing.
   *
   * @param {HTMLElement} bubble The bot bubble.
   * @returns {HTMLElement} The actions row element.
   */
  actionsRow(bubble) {
    let row = bubble.querySelector('.lc-msg__actions');
    if (!row) {
      row = el('div', { class: 'lc-msg__actions' });
      bubble.insertBefore(row, bubble.querySelector('.lc-msg__disclaimer'));
    }
    return row;
  }

  /**
   * Ensures the "assistants may make mistakes" disclaimer is rendered only under
   * the last bot bubble of the thread, removing any stale one elsewhere. Called
   * after each new bot message is finalised.
   *
   * @returns {void}
   */
  updateDisclaimers() {
    const bubbles = [...this.list.querySelectorAll('.lc-msg--bot')];
    bubbles.forEach((bubble, i) => {
      const existing = bubble.querySelector('.lc-msg__disclaimer');
      const isLast = i === bubbles.length - 1;
      if (isLast && !existing) {
        bubble.appendChild(el('div', { class: 'lc-msg__disclaimer' }, 'Les assistants peuvent faire des erreurs.'));
      } else if (!isLast && existing) {
        existing.remove();
      }
    });
  }

  /**
   * Resolves the nearest scrollable ancestor of the thread (the element that
   * actually carries the overflow), starting from the host and walking up. The
   * `.lc-thread` itself has no overflow — its parent `.lc-scroll` host does — so
   * scrolling the list directly is a no-op. Falls back to the host.
   *
   * @returns {Element} The scrollable container.
   */
  scrollParent() {
    let node = this.host;
    while (node && node.nodeType === 1) {
      const style = node.ownerDocument && node.ownerDocument.defaultView ? node.ownerDocument.defaultView.getComputedStyle(node) : null;
      const overflowY = style ? style.overflowY : '';
      if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
        return node;
      }
      node = node.parentElement;
    }
    return this.host;
  }

  /**
   * Scrolls the thread's overflow container to the latest content on the next
   * animation frame, so the scroll runs after the layout caused by the freshly
   * appended/painted content.
   *
   * @returns {void}
   */
  scroll() {
    requestAnimationFrame(() => {
      const target = this.scrollParent();
      target.scrollTop = target.scrollHeight;
    });
  }

  /**
   * Cancels any pending animation frame (teardown mirror).
   *
   * @returns {void}
   */
  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = 0;
    }
  }
}

/**
 * Escapes a value for safe interpolation into a template literal (re-exported so
 * sibling views share one escaping helper).
 *
 * @param {*} value The value to escape.
 * @returns {string} The escaped string.
 */
export { escapeHtml };
