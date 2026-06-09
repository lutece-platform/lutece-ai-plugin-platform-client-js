/**
 * The <lutece-chat> Custom Element (SPEC §1, §2, §3, §4, §6, §7, §11, §12).
 *
 * Thin orchestrator over the pure core/ (http, api, sse, store) and render/
 * (markdown) layers and the ui/ views. The constructor only attaches the shadow
 * root, ElementInternals and initial state. All real work (style adoption, first
 * fetch, window/document listeners) happens in connectedCallback behind a single
 * init flag and is mirrored exactly in disconnectedCallback (abort, rAF cancel,
 * listener removal, floating-host removal). bot-id is reactive at runtime; object
 * options (endpoints, sidebar, customCSS) are JS properties only.
 */

import sheetCss from './styles/chat.css?inline';
import { HttpClient, codeForStatus } from './core/http.js';
import { AgentApi } from './core/api.js';
import { consumeSse } from './core/sse.js';
import { Store, UI_STATE } from './core/store.js';
import { el, clear } from './ui/dom.js';
import { renderHeader } from './ui/header.js';
import { renderGallery } from './ui/gallery.js';
import { renderSidebar } from './ui/sidebar.js';
import { renderErrorScreen } from './ui/errors.js';
import { renderFeedback } from './ui/feedback.js';
import { renderUserMenu } from './ui/user-menu.js';
import { ChatThread } from './ui/chat.js';
import { openSourceModal, openDocumentModal } from './ui/sources.js';
import { icon } from './ui/icons.js';
import { validatedLogoSrc, avatarColor, initial } from './ui/avatar.js';

/** @type {CSSStyleSheet} Module-scoped constructable stylesheet shared by all instances. */
const BASE_SHEET = new CSSStyleSheet();
BASE_SHEET.replaceSync(sheetCss);

/** @type {number} Monotonic counter for per-instance ids. */
let instanceSeq = 0;

/**
 * Maps an HttpError code to an error-screen kind.
 *
 * @param {string} code The HttpError application code.
 * @returns {string} The error-screen kind.
 */
function screenKind(code) {
  switch (code) {
    case 'UNAUTHORIZED':
      return 'unauthorized';
    case 'FORBIDDEN':
      return 'forbidden';
    case 'RATE_LIMITED':
      return 'rate-limited';
    default:
      return 'unavailable';
  }
}

/**
 * The lutece-chat Custom Element.
 *
 * @element lutece-chat
 *
 * @attr {string} bot-id - Bot id to open on connect; reactive (hot-swap without recreating the instance).
 * @attr {boolean} dark-mode - Enables the dark theme; reactive; persisted under a stable key in localStorage.
 * @attr {boolean} fullscreen - Shows the fullscreen toggle and opens in fullscreen (read once at connect).
 * @attr {boolean} closable - When `false`, removes the close control (read once at connect).
 * @attr {boolean} show-bot-list - When `false`, hides the explore/gallery affordance (read once at connect).
 * @attr {boolean} show-theme-toggle - Whether the light/dark toggle is shown (read once at connect).
 * @attr {string} container - Factory-only: CSS selector or id of an existing element to embed into (not observed).
 *
 * @prop {object} endpoints - Endpoints config ({ origin?, base? }); JS property only.
 * @prop {object} sidebar - Sidebar config ({ open, lightLogo, darkLogo }); JS property only.
 * @prop {string} customCSS - Per-instance CSS injected after the base sheet; JS property only.
 *
 * @fires lutece-chat:message-sent - When the user sends a message. detail: { botId, conversationUuid, text }
 * @fires lutece-chat:response-complete - On the terminal BOT_STREAM_COMPLETED. detail: { botId, conversationUuid }
 * @fires lutece-chat:error - On BOT_STREAM_ERROR, a generic SSE error, or an HTTP error. detail: { code, message }
 *
 * @csspart root - The widget root container.
 * @csspart header - The header bar.
 * @csspart welcome - The bot welcome hero block.
 * @csspart welcome-avatar - The bot welcome hero avatar.
 * @csspart main - The scrollable main region.
 * @csspart sidebar - The conversations sidebar.
 * @csspart sidebar-empty - The empty-state of the sidebar.
 * @csspart conversation - A conversation item in the sidebar.
 * @csspart gallery - The bots gallery container.
 * @csspart gallery-title - The gallery greeting title.
 * @csspart gallery-search - The gallery search field.
 * @csspart gallery-grid - The gallery cards grid.
 * @csspart card - A bot card.
 * @csspart thread - The chat message thread.
 * @csspart message-user - A user message bubble.
 * @csspart message-bot - A bot message bubble.
 * @csspart message-bot-body - The rendered markdown body of a bot message.
 * @csspart message-error - An inline error message.
 * @csspart notifications - The tool/dataset notifications area.
 * @csspart notif-datasets - The datasets-routed notification.
 * @csspart citation - A clickable source citation.
 * @csspart composer - The input composer.
 * @csspart feedback - The thumbs feedback control.
 * @csspart modal - A dialog modal (source, document, feedback comment).
 * @csspart modal-title - A modal title.
 * @csspart modal-close - A modal close button.
 * @csspart overlay - The modal/ sidebar dimming overlay.
 * @csspart docview - The document viewer body.
 * @csspart error - The error-screen container.
 */
export class LuteceChat extends HTMLElement {
  /**
   * @returns {string[]} The reactive primitive attributes.
   */
  static get observedAttributes() {
    return ['bot-id', 'dark-mode'];
  }

  /**
   * Constructor: attaches the shadow root, ElementInternals and initial state
   * ONLY. No attribute reads, no DOM, no network, no global listeners here.
   */
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.internals = this.attachInternals ? this.attachInternals() : null;
    this._instanceId = `i${(instanceSeq += 1)}`;
    this._initialized = false;
    this._abortController = null;
    this._streamController = null;
    this._rafId = 0;
    this._endpoints = null;
    this._sidebar = null;
    this._customCSS = null;
    this._customSheet = null;
    this._panelOpen = false;
    this._fabEl = null;
    this._panelEl = null;
    this._api = null;
    this._store = new Store({ state: UI_STATE.IDLE });
    this._bots = [];
    this._currentBot = null;
    this._conversationUuid = null;
    this._thread = null;
    this._headerContext = null;
    this._openModals = new Set();
    this._sidebarOpen = false;
    this._sidebarOverlayEl = null;
    this._user = null;
    this._rates = [];
    this._userMenu = null;
  }

  /**
   * Connect: one-time init behind a flag (the element may be reconnected if moved).
   * Adopts styles, upgrades lazy properties, attaches global listeners, builds the
   * API facade and triggers the first fetch.
   *
   * @returns {void}
   */
  connectedCallback() {
    if (this._initialized) {
      return;
    }
    this._initialized = true;
    this.shadowRoot.adoptedStyleSheets = [BASE_SHEET];
    if (this._customCSS) {
      this.applyCustomCss(this._customCSS);
    }
    this.upgradeProperty('botId');
    this.upgradeProperty('darkMode');
    this.restoreTheme();
    this._abortController = new AbortController();
    window.addEventListener('resize', this.handleResize);
    document.addEventListener('keydown', this.handleKeydown);
    this.buildApi();
    this.renderShell();
    this.loadUser().finally(() => this.loadGallery());
  }

  /**
   * Disconnect: exact mirror of connectedCallback teardown — aborts in-flight
   * fetch/stream, cancels any pending rAF, removes global listeners and any
   * floating host node.
   *
   * @returns {void}
   */
  disconnectedCallback() {
    this.abortStream();
    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }
    if (this._rafId) {
      cancelAnimationFrame(this._rafId);
      this._rafId = 0;
    }
    if (this._thread) {
      this._thread.destroy();
    }
    if (this._userMenu) {
      this._userMenu.destroy();
      this._userMenu = null;
    }
    this.closeModals();
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('keydown', this.handleKeydown);
    this._initialized = false;
  }

  /**
   * Reacts to primitive attribute changes; bot-id re-routes without recreating
   * the instance. Guards against re-entrant setter loops via value comparison.
   *
   * @param {string} name The attribute name.
   * @param {?string} oldValue The previous value.
   * @param {?string} newValue The new value.
   * @returns {void}
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue || !this._initialized) {
      return;
    }
    if (name === 'bot-id') {
      this.routeToBot(newValue);
    } else if (name === 'dark-mode') {
      this.reflectTheme();
    }
  }

  /**
   * Upgrades a property that may have been set before the element upgraded, so a
   * value assigned pre-connection is re-applied through the setter.
   *
   * @param {string} prop The property name.
   * @returns {void}
   */
  upgradeProperty(prop) {
    if (Object.prototype.hasOwnProperty.call(this, prop)) {
      const value = this[prop];
      delete this[prop];
      this[prop] = value;
    }
  }

  /** @returns {?string} The current bot id attribute. */
  get botId() {
    return this.getAttribute('bot-id');
  }

  /**
   * Sets the bot id, reflecting to the attribute.
   *
   * @param {(number|string|null)} value The bot id.
   */
  set botId(value) {
    if (value === null || value === undefined) {
      this.removeAttribute('bot-id');
    } else {
      this.setAttribute('bot-id', String(value));
    }
  }

  /** @returns {boolean} Whether dark mode is on. */
  get darkMode() {
    return this.hasAttribute('dark-mode');
  }

  /**
   * Toggles dark mode, persisting it under a stable per-widget key and reflecting
   * the attribute.
   *
   * @param {boolean} value Whether dark mode is on.
   */
  set darkMode(value) {
    if (value) {
      this.setAttribute('dark-mode', '');
    } else {
      this.removeAttribute('dark-mode');
    }
    try {
      localStorage.setItem(this.themeStorageKey(), value ? '1' : '0');
    } catch {
      /* storage unavailable */
    }
  }

  /**
   * Builds the stable localStorage key for the theme preference. The key is
   * derived from an explicit storage-key attribute, else the container selector,
   * else the bot-id, so it survives a page reload (unlike the volatile instance
   * counter).
   *
   * @returns {string} The namespaced storage key.
   */
  themeStorageKey() {
    const scope = this.getAttribute('storage-key') || this.getAttribute('container') || this.getAttribute('bot-id') || 'default';
    return `lutece-chat:${scope}:dark-mode`;
  }

  /**
   * Restores the persisted theme preference (if any) on connect, applying the
   * dark-mode attribute without re-writing storage. An attribute already present
   * (declarative usage) wins and is left untouched.
   *
   * @returns {void}
   */
  restoreTheme() {
    if (this.hasAttribute('dark-mode')) {
      return;
    }
    let stored = null;
    try {
      stored = localStorage.getItem(this.themeStorageKey());
    } catch {
      stored = null;
    }
    if (stored === '1') {
      this.setAttribute('dark-mode', '');
    }
  }

  /** @returns {?object} The endpoints configuration object. */
  get endpoints() {
    return this._endpoints;
  }

  /**
   * Sets the endpoints configuration (object property only, never an attribute).
   *
   * @param {object} value The endpoints config ({ origin?, base?, firstName? }).
   */
  set endpoints(value) {
    this._endpoints = value;
    if (this._initialized) {
      this.buildApi();
    }
  }

  /** @returns {?object} The sidebar configuration object. */
  get sidebar() {
    return this._sidebar;
  }

  /**
   * Sets the sidebar configuration (object property only).
   *
   * @param {object} value The sidebar config.
   */
  set sidebar(value) {
    this._sidebar = value;
  }

  /** @returns {?string} The custom CSS string. */
  get customCSS() {
    return this._customCSS;
  }

  /**
   * Sets per-instance custom CSS, applied after the base sheet.
   *
   * @param {string} value The custom CSS source.
   */
  set customCSS(value) {
    this._customCSS = value;
    if (this._initialized) {
      this.applyCustomCss(value);
    }
  }

  /**
   * Applies (or replaces) the per-instance custom stylesheet after the base one.
   *
   * @param {string} css The custom CSS source.
   * @returns {void}
   */
  applyCustomCss(css) {
    if (!this._customSheet) {
      this._customSheet = new CSSStyleSheet();
      this.shadowRoot.adoptedStyleSheets = [BASE_SHEET, this._customSheet];
    }
    this._customSheet.replaceSync(css || '');
  }

  /**
   * Reflects the theme: colours are attribute-driven via [dark-mode] in CSS, but
   * the header toggle icon (sun/moon) must be re-rendered to match the new state.
   *
   * @returns {void}
   */
  reflectTheme() {
    if (this._headerContext) {
      this.renderHeaderFor(this._headerContext);
    }
  }

  /**
   * Builds the AgentApi facade from the endpoints config (session-only):
   * configurable origin + base path.
   *
   * @returns {void}
   */
  buildApi() {
    const cfg = this._endpoints || {};
    const httpClient = new HttpClient({ origin: cfg.origin, base: cfg.base });
    this._api = new AgentApi(httpClient);
  }

  /** @returns {AbortSignal} The instance-lifetime abort signal for non-stream fetches. */
  get signal() {
    return this._abortController ? this._abortController.signal : undefined;
  }

  /**
   * Aborts the current SSE stream (if any) and starts a fresh per-stream
   * AbortController, returning its signal. This guarantees the contract's "abort
   * before any new stream" and prevents a previous stream's events from leaking
   * into a new view.
   *
   * @returns {AbortSignal} The signal of the freshly created stream controller.
   */
  startStream() {
    this.abortStream();
    this._streamController = new AbortController();
    return this._streamController.signal;
  }

  /**
   * Aborts the current SSE stream controller (if any) without touching the
   * instance-lifetime controller.
   *
   * @returns {void}
   */
  abortStream() {
    if (this._streamController) {
      this._streamController.abort();
      this._streamController = null;
    }
  }

  /** @returns {boolean} Whether the widget renders as a self-hosting floating widget. */
  get floating() {
    return this.hasAttribute('floating');
  }

  /**
   * Builds the static shell (header + body regions) once. In floating mode the
   * shell is wrapped in a fixed panel toggled by a shadow FAB; otherwise the
   * shell fills the host container as before.
   *
   * @returns {void}
   */
  renderShell() {
    clear(this.shadowRoot);
    this._headerEl = el('div', { class: 'lc-header-slot' });
    this._sidebarEl = el('div', { class: 'lc-sidebar-slot' });
    this._mainEl = el('div', { class: 'lc-scroll', part: 'main' });
    this._composerEl = el('div', { class: 'lc-composer-slot' });
    this._modalLayer = el('div', { class: 'lc-modal-layer' });
    this._sidebarOverlayEl = el('div', { class: 'lc-sidebar-overlay', part: 'overlay', 'aria-hidden': 'true', onClick: () => this.setSidebarOpen(false) });
    const main = el('div', { class: 'lc-main' }, [this._mainEl, this._composerEl]);
    const content = el('div', { class: 'lc-content' }, [this._headerEl, main]);
    const root = el('div', { class: 'lc-root', part: 'root' }, [this._sidebarEl, this._sidebarOverlayEl, content, this._modalLayer]);
    if (this.floating) {
      this.renderFloatingShell(root);
    } else {
      this.shadowRoot.appendChild(root);
    }
  }

  /**
   * Wraps the chat root in a floating panel and, unless closable="false", a FAB
   * toggling it. With closable="false" the panel is always open and no FAB is
   * rendered.
   *
   * @param {HTMLElement} root The built chat root.
   * @returns {void}
   */
  renderFloatingShell(root) {
    const alwaysOpen = this.getAttribute('closable') === 'false';
    this._panelOpen = alwaysOpen;
    this._panelEl = el('div', { class: 'lc-panel', part: 'panel' }, root);
    this._panelEl.hidden = !this._panelOpen;
    this.shadowRoot.appendChild(this._panelEl);
    if (!alwaysOpen) {
      this._fabEl = el(
        'button',
        {
          type: 'button',
          class: 'lc-fab',
          part: 'fab',
          'aria-label': 'Ouvrir le chat',
          'aria-expanded': 'false',
          onClick: () => this.togglePanel()
        },
        icon('message', { size: 26 })
      );
      this.shadowRoot.appendChild(this._fabEl);
    }
  }

  /**
   * Toggles the floating panel open/closed and syncs the FAB aria-expanded.
   *
   * @returns {void}
   */
  togglePanel() {
    this.setPanelOpen(!this._panelOpen);
  }

  /**
   * Sets the floating panel open state, updating the FAB aria-expanded.
   *
   * @param {boolean} open Whether the panel is open.
   * @returns {void}
   */
  setPanelOpen(open) {
    this._panelOpen = open;
    if (this._panelEl) {
      this._panelEl.hidden = !open;
    }
    if (this._fabEl) {
      this._fabEl.setAttribute('aria-expanded', String(open));
    }
  }

  /**
   * Loads the current user (and per-bot rate counters) once on connect. Both
   * endpoints are optional (admin family / 401 for anonymous): a failure is
   * swallowed so the widget renders without an avatar rather than surfacing an
   * error. The first name is later passed to the gallery greeting.
   *
   * @returns {Promise<void>} Resolves once user/rates are resolved (or skipped).
   */
  async loadUser() {
    try {
      this._user = await this._api.getUser();
    } catch {
      this._user = null;
    }
    try {
      const rates = await this._api.getRateLimits();
      this._rates = Array.isArray(rates) ? rates : [];
    } catch {
      this._rates = [];
    }
  }

  /**
   * Loads the gallery data (bots) lazily; renders an error screen on failure
   * (rate-limited / unauthorized / forbidden / unavailable) without ever
   * reloading the host page. When no explicit bot-id is set, a namespaced URL
   * state (lc-bot / lc-conv) is restored.
   *
   * @returns {Promise<void>} Resolves when the gallery (or error) is rendered.
   */
  async loadGallery() {
    try {
      const bots = await this._api.listBots();
      this._bots = Array.isArray(bots) ? bots : [];
      if (this._bots.length === 0) {
        this.showError('empty');
        return;
      }
      const urlState = this.readUrlState();
      if (this.botId) {
        this.routeToBot(this.botId);
      } else if (urlState.bot) {
        this.routeToBot(urlState.bot, urlState.conv);
      } else {
        this.showGallery();
      }
    } catch (error) {
      this.showError(screenKind(error.code));
    }
  }

  /**
   * Reads the widget's namespaced URL state (lc-bot / lc-conv) from the host
   * page location, never touching Lutèce-owned params (bot_id, page, view, …).
   *
   * @returns {{bot:?string, conv:?string}} The restored state.
   */
  readUrlState() {
    try {
      const params = new URLSearchParams(window.location.search);
      return { bot: params.get('lc-bot'), conv: params.get('lc-conv') };
    } catch {
      return { bot: null, conv: null };
    }
  }

  /**
   * Writes the namespaced URL state non-destructively via history.replaceState,
   * preserving every other query parameter. Passing null for a key removes only
   * that namespaced param. Robust when the History API is unavailable.
   *
   * @param {{bot:?(number|string), conv:?(number|string)}} state The state to write.
   * @returns {void}
   */
  writeUrlState({ bot, conv }) {
    if (typeof window === 'undefined' || !window.history || !window.history.replaceState) {
      return;
    }
    try {
      const url = new URL(window.location.href);
      this.setOrDelete(url.searchParams, 'lc-bot', bot);
      this.setOrDelete(url.searchParams, 'lc-conv', conv);
      window.history.replaceState(window.history.state, '', url.toString());
    } catch {
      /* history unavailable */
    }
  }

  /**
   * Sets a search param to a value, or deletes it when the value is null/empty.
   *
   * @param {URLSearchParams} params The params to mutate.
   * @param {string} key The param key.
   * @param {?(number|string)} value The value (null/empty deletes the key).
   * @returns {void}
   */
  setOrDelete(params, key, value) {
    if (value === null || value === undefined || value === '') {
      params.delete(key);
    } else {
      params.set(key, String(value));
    }
  }

  /**
   * Renders an error screen whose retry re-initialises the widget internally.
   *
   * @param {string} kind The error-screen kind.
   * @returns {void}
   */
  showError(kind) {
    clear(this._headerEl);
    clear(this._sidebarEl);
    clear(this._composerEl);
    renderErrorScreen(this._mainEl, { kind, onRetry: () => this.loadGallery() });
  }

  /**
   * Renders the bots gallery and the header in explore mode.
   *
   * @returns {void}
   */
  showGallery() {
    this.abortStream();
    this._currentBot = null;
    this._conversationUuid = null;
    this._thread = null;
    this._sidebarOpen = false;
    this.reflectSidebar();
    clear(this._sidebarEl);
    clear(this._composerEl);
    this.writeUrlState({ bot: null, conv: null });
    this.renderHeaderFor({ explore: true, title: 'Assistant' });
    renderGallery(this._mainEl, {
      bots: this._bots,
      firstName: (this._user && this._user.firstName) || (this._endpoints && this._endpoints.firstName),
      onBot: (bot) => this.openBot(bot)
    });
  }

  /**
   * Renders the header with the controls appropriate to the current view.
   *
   * @param {object} params Header context.
   * @param {boolean} [params.explore] Whether we are in the gallery.
   * @param {string} params.title The header title.
   * @returns {void}
   */
  renderHeaderFor({ explore, title }) {
    this._headerContext = { explore, title };
    const showBotList = this.getAttribute('show-bot-list') !== 'false';
    renderHeader(this._headerEl, {
      title,
      showBack: !explore && showBotList,
      showExplore: !explore && showBotList,
      showMenu: !explore,
      showThemeToggle: this.getAttribute('show-theme-toggle') !== 'false',
      darkMode: this.darkMode,
      showFullscreen: this.floating,
      fullscreen: this.hasAttribute('fullscreen'),
      sidebarOpen: this._sidebarOpen,
      closable: this.getAttribute('closable') !== 'false' && this.floating,
      onBack: () => this.showGallery(),
      onExplore: () => this.showGallery(),
      onMenu: () => this.toggleSidebar(),
      onTheme: () => {
        this.darkMode = !this.darkMode;
      },
      onFullscreen: () => this.toggleFullscreen(),
      onClose: () => this.close()
    });
    this.renderUserMenuIntoHeader();
  }

  /**
   * Renders (or re-renders) the user menu into the header right zone. The
   * previous menu's document listeners are torn down first so re-rendering the
   * header on theme/sidebar change never leaks listeners. Renders nothing when
   * there is no resolved user.
   *
   * @returns {void}
   */
  renderUserMenuIntoHeader() {
    if (this._userMenu) {
      this._userMenu.destroy();
      this._userMenu = null;
    }
    if (!this._user) {
      return;
    }
    const right = this._headerEl.querySelector('.lc-hd__right');
    if (!right) {
      return;
    }
    this._userMenu = renderUserMenu(right, { user: this._user, bots: this._bots, rates: this._rates });
  }

  /**
   * Routes to a bot id from the attribute (hot swap): resolves the bot from the
   * loaded list and opens it; falls back to the gallery if unknown.
   *
   * @param {?string} botIdValue The bot id string.
   * @param {?string} [conversationUuid] An optional conversation to restore.
   * @returns {void}
   */
  routeToBot(botIdValue, conversationUuid) {
    if (!this._api) {
      return;
    }
    const bot = this._bots.find((b) => String(b.id) === String(botIdValue));
    if (bot) {
      this.openBot(bot);
      if (conversationUuid) {
        this.openConversation({ conversationUuid });
      }
    } else if (this._bots.length > 0) {
      this.showGallery();
    }
  }

  /**
   * Opens a bot: builds the chat view (header, sidebar, thread, composer, rate
   * gauge) and loads the conversation list.
   *
   * @param {object} bot The BotDTO.
   * @returns {void}
   */
  openBot(bot) {
    this.abortStream();
    this._currentBot = bot;
    this._conversationUuid = null;
    this._sidebarOpen = this.sidebarOpensByDefault();
    this.reflectSidebar();
    this.renderHeaderFor({ explore: false, title: bot.botName || 'Assistant' });
    this._thread = new ChatThread(this._mainEl, {
      onCitation: (source) => this.openSource(source),
      onFeedback: (message, isPositive) => this.sendFeedback(message, isPositive)
    });
    this.renderComposer();
    this.loadConversations();
    this.renderWelcome(bot);
    this.writeUrlState({ bot: bot.id, conv: null });
  }

  /**
   * Renders the bot welcome screen: a centred hero (avatar + name + description)
   * at the top of the thread, then the bot welcomeMessage (if any) as the first
   * bot bubble below it. All server strings reach the DOM via textContent.
   *
   * @param {object} bot The current bot.
   * @returns {void}
   */
  renderWelcome(bot) {
    this._thread.list.appendChild(this.buildWelcomeHero(bot));
    if (bot.welcomeMessage) {
      this._thread.list.appendChild(el('div', { class: 'lc-msg lc-msg--bot', part: 'message-bot' }, [el('div', { class: 'lc-msg__body' }, bot.welcomeMessage)]));
    }
  }

  /**
   * Builds the centred welcome hero block for a bot: a validated logo image when
   * available, otherwise a coloured monogram, followed by the bot name and an
   * optional description (hidden when empty).
   *
   * @param {object} bot The current bot.
   * @returns {HTMLElement} The hero element.
   */
  buildWelcomeHero(bot) {
    const name = bot.botName || 'Assistant';
    const description = bot.botDescription || '';
    const src = validatedLogoSrc(bot.logoBase64);
    let avatar;
    if (src) {
      avatar = el('div', { class: 'lc-welcome__avatar', part: 'welcome-avatar' }, el('img', { src, alt: '' }));
    } else {
      avatar = el('div', { class: 'lc-welcome__avatar', part: 'welcome-avatar' }, initial(name));
      avatar.style.background = avatarColor(name);
    }
    return el('div', { class: 'lc-welcome', part: 'welcome' }, [
      avatar,
      el('h2', { class: 'lc-welcome__title' }, name),
      el('p', { class: 'lc-welcome__desc', hidden: !description }, description)
    ]);
  }

  /**
   * Resets the conversation on the SAME bot: aborts any stream, clears the
   * conversation uuid, rebuilds a fresh thread with the welcome message and
   * refreshes the sidebar and URL state. Bound for the "new conversation" button.
   *
   * @returns {void}
   */
  newConversation() {
    if (!this._currentBot) {
      return;
    }
    this.abortStream();
    this._conversationUuid = null;
    this._thread = new ChatThread(this._mainEl, {
      onCitation: (source) => this.openSource(source),
      onFeedback: (message, isPositive) => this.sendFeedback(message, isPositive)
    });
    this.renderComposer();
    this.renderWelcome(this._currentBot);
    this.loadConversations();
    this.writeUrlState({ bot: this._currentBot.id, conv: null });
  }

  /**
   * Renders the composer (auto-sizing textarea + send button) for the open bot.
   *
   * @returns {void}
   */
  renderComposer() {
    clear(this._composerEl);
    const textarea = el('textarea', { rows: '1', placeholder: 'Poser une question...', 'aria-label': 'Votre message' });
    const send = el('button', { type: 'button', class: 'lc-composer__send', 'aria-label': 'Envoyer' }, icon('send', { size: 18 }));
    const submit = () => {
      if (this._sendBtn && this._sendBtn.disabled) {
        return;
      }
      const text = textarea.value.trim();
      if (!text) {
        return;
      }
      textarea.value = '';
      textarea.style.height = 'auto';
      this.sendMessage(text);
    };
    textarea.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        submit();
      }
    });
    textarea.addEventListener('input', () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(300, Math.max(60, textarea.scrollHeight))}px`;
    });
    send.addEventListener('click', submit);
    this._sendBtn = send;
    this._newConvBtn = el(
      'button',
      { type: 'button', class: 'lc-new-conv', 'aria-label': 'Nouvelle conversation', hidden: true, onClick: () => this.newConversation() },
      [icon('plus', { size: 16 }), el('span', {}, 'Nouvelle conversation')]
    );
    const actionsContainer = el('div', { class: 'lc-actions-container' }, [this._newConvBtn]);
    const actions = el('div', { class: 'lc-input-actions' }, actionsContainer);
    const inner = el('div', { class: 'lc-composer__inner' }, [textarea, send]);
    const composer = el('div', { class: 'lc-composer', part: 'composer' }, [inner, actions]);
    this._composerEl.appendChild(el('div', { class: 'lc-input', part: 'input' }, composer));
  }

  /**
   * Shows the "new conversation" button (once a conversation is in progress).
   *
   * @returns {void}
   */
  showNewConvButton() {
    if (this._newConvBtn) {
      this._newConvBtn.hidden = false;
    }
  }

  /**
   * Sends a message: emits message-sent, opens the stream init then consumes the
   * SSE events into the thread; emits response-complete / error on terminals.
   *
   * @param {string} text The user message.
   * @returns {Promise<void>} Resolves when the stream ends.
   */
  async sendMessage(text) {
    const bot = this._currentBot;
    const thread = this._thread;
    const sendBtn = this._sendBtn;
    const signal = this.startStream();
    thread.addUserMessage(text);
    thread.startBotMessage();
    this.showNewConvButton();
    if (sendBtn) {
      sendBtn.disabled = true;
    }
    this.emit('message-sent', { botId: bot.id, conversationUuid: this._conversationUuid, text });
    try {
      const response = await this._api.openStream({
        botId: bot.id,
        query: text,
        conversationUuid: this._conversationUuid || undefined
      }, signal);
      if (!response.ok) {
        throw await this.readStreamError(response);
      }
      await consumeSse({
        response,
        signal,
        onEvent: (name, data) => {
          if (this._thread === thread) {
            thread.onSseEvent(name, data);
          }
        },
        onTerminal: (name, data) => {
          if (this._thread === thread) {
            this.onStreamTerminal(name, data, bot, thread);
          }
        }
      });
    } catch (error) {
      if (this._thread === thread) {
        this.onStreamError(error, thread);
      }
    } finally {
      if (sendBtn && this._sendBtn === sendBtn) {
        sendBtn.disabled = false;
      }
    }
  }

  /**
   * Reads the JSON error body of a non-ok streaming POST (the pre-stream
   * validation/rate-limit/auth errors surface here as a clean HTTP status with a
   * {message, errorCode} envelope) and turns it into an Error carrying the
   * server's human message for inline rendering.
   *
   * @param {Response} response The non-ok streaming response.
   * @returns {Promise<Error>} The error to throw.
   */
  async readStreamError(response) {
    let message = '';
    try {
      const body = await response.json();
      message = body.message || body.errorCode || '';
    } catch {
      /* non-JSON error body */
    }
    const error = new Error(message || `HTTP ${response.status}`);
    error.code = codeForStatus(response.status);
    error.status = response.status;
    return error;
  }

  /**
   * Handles a terminal SSE event: finalises the captured thread and emits the
   * matching public event. The bot/thread are captured at send time so a terminal
   * arriving after a view change targets the right thread.
   *
   * @param {string} name The terminal event name.
   * @param {object} data The terminal event data.
   * @param {object} bot The bot captured at send time.
   * @param {ChatThread} thread The thread captured at send time.
   * @returns {void}
   */
  onStreamTerminal(name, data, bot, thread) {
    if (name === 'BOT_STREAM_COMPLETED') {
      this._conversationUuid = data.conversationUuid || this._conversationUuid;
      thread.finishBotMessage();
      thread.updateDisclaimers();
      const lastBubble = [...this._mainEl.querySelectorAll('.lc-msg--bot')].pop();
      if (lastBubble) {
        thread.attachCopyButton(lastBubble);
      }
      this.writeUrlState({ bot: bot.id, conv: this._conversationUuid });
      this.emit('response-complete', { botId: bot.id, conversationUuid: this._conversationUuid });
      this.loadConversations();
      this.attachFeedbackToLast();
    } else if (name === 'BOT_STREAM_ERROR') {
      this.emit('error', { code: 'BOT_STREAM_ERROR', message: data.errorMessage || 'Erreur de génération.' });
    } else if (name === 'error') {
      this.emit('error', { code: 'STREAM_ERROR', message: data.error || 'Erreur.' });
    }
  }

  /**
   * Handles a transport-level stream error (non-abort), surfacing it inline and
   * via the public error event.
   *
   * @param {*} error The caught error.
   * @param {ChatThread} [thread] The thread captured at send time.
   * @returns {void}
   */
  onStreamError(error, thread) {
    if (error && error.name === 'AbortError') {
      return;
    }
    const message = (error && error.message) || 'Erreur de connexion.';
    const target = thread || this._thread;
    if (target) {
      target.renderError(message, error);
    }
    this.emit('error', { code: (error && error.code) || 'STREAM_ERROR', message });
  }

  /**
   * Attaches a feedback control under the last bot message of the live answer.
   * The terminal BOT_STREAM_COMPLETED event carries NO message id, so the
   * persisted conversation is reloaded to resolve the real id of the last bot
   * message before wiring the control. Without an id, no control is attached
   * (never POST feedback on an undefined message id).
   *
   * @returns {Promise<void>} Resolves once the control is attached (or skipped).
   */
  async attachFeedbackToLast() {
    const bubbles = this._mainEl.querySelectorAll('.lc-msg--bot');
    const last = bubbles[bubbles.length - 1];
    if (!last || last.querySelector('.lc-fb') || !this._conversationUuid) {
      return;
    }
    let messageId;
    try {
      const data = await this._api.getConversation(this._conversationUuid);
      const botMessages = (data.messages || []).filter((m) => m.role !== 'user');
      const lastMessage = botMessages[botMessages.length - 1];
      messageId = lastMessage && lastMessage.id;
    } catch (error) {
      if (!error || error.name !== 'AbortError') {
        console.error('feedback id resolution failed', error);
      }
    }
    if (messageId === undefined || messageId === null) {
      return;
    }
    if (last.querySelector('.lc-fb')) {
      return;
    }
    renderFeedback(this._thread.actionsRow(last), {
      messageId,
      modalHost: this._modalLayer,
      signal: this.signal,
      onSend: (payload) => this._api.sendFeedback(payload).catch((e) => console.error('feedback failed', e))
    });
  }

  /**
   * Loads and renders the conversation sidebar for the current user.
   *
   * @returns {Promise<void>} Resolves once the sidebar is rendered.
   */
  async loadConversations() {
    try {
      const all = await this._api.listConversations();
      const list = Array.isArray(all) ? all : [];
      const filtered = this._currentBot ? list.filter((c) => String(c.botId) === String(this._currentBot.id)) : list;
      renderSidebar(this._sidebarEl, {
        conversations: filtered,
        activeUuid: this._conversationUuid,
        onOpen: (conv) => this.openConversation(conv),
        onDelete: (conv) => this._api.deleteConversation(conv.conversationUuid).then(() => this.loadConversations()),
        onDeleteAll: () => this._api.deleteAllConversations().then(() => this.loadConversations()),
        onExplore: () => this.showGallery(),
        onClose: () => this.setSidebarOpen(false),
        showExplore: this.getAttribute('show-bot-list') !== 'false',
        lightLogo: this._sidebar && this._sidebar.lightLogo,
        darkLogo: this._sidebar && this._sidebar.darkLogo,
        logoHtml: this._sidebar && this._sidebar.logoHtml,
        dark: this.darkMode
      });
    } catch (error) {
      if (this._initialized && (!error || error.name !== 'AbortError')) {
        console.error('conversations load failed', error);
      }
    }
  }

  /**
   * Opens an existing conversation: loads its messages and re-renders the thread
   * with locked feedback from persisted state.
   *
   * @param {object} conv The conversation DTO.
   * @returns {Promise<void>} Resolves once the history is rendered.
   */
  async openConversation(conv) {
    this.abortStream();
    this._conversationUuid = conv.conversationUuid;
    if (!this.isSidebarPushMode()) {
      this.setSidebarOpen(false);
    }
    try {
      const data = await this._api.getConversation(conv.conversationUuid);
      this._thread = new ChatThread(this._mainEl, {
        onCitation: (source) => this.openSource(source)
      });
      this._thread.renderHistory(data.messages || []);
      this.renderHistoryFeedback(data.messages || []);
      this._thread.updateDisclaimers();
      const lastBubble = [...this._mainEl.querySelectorAll('.lc-msg--bot')].pop();
      if (lastBubble) {
        this._thread.attachCopyButton(lastBubble);
      }
      this.renderComposer();
      this.showNewConvButton();
      this.loadConversations();
      this.writeUrlState({ bot: this._currentBot && this._currentBot.id, conv: this._conversationUuid });
    } catch (error) {
      console.error('conversation open failed', error);
    }
  }

  /**
   * Attaches feedback controls to each bot bubble of a reloaded conversation,
   * locked from any persisted feedback.
   *
   * @param {object[]} messages The persisted messages.
   * @returns {void}
   */
  renderHistoryFeedback(messages) {
    const botBubbles = [...this._mainEl.querySelectorAll('.lc-msg--bot')];
    const botMessages = messages.filter((m) => m.role !== 'user');
    botBubbles.forEach((bubble, i) => {
      const message = botMessages[i];
      if (!message) {
        return;
      }
      renderFeedback(this._thread.actionsRow(bubble), {
        messageId: message.id,
        feedback: message.feedback || undefined,
        modalHost: this._modalLayer,
        signal: this.signal,
        onSend: (payload) => this._api.sendFeedback(payload).catch((e) => console.error('feedback failed', e))
      });
    });
  }

  /**
   * Opens the source preview modal for a citation, wiring the document viewer.
   *
   * @param {object} source The source object.
   * @returns {void}
   */
  openSource(source) {
    this.trackModal(
      openSourceModal(this._modalLayer, {
        source,
        onOpenDocument: () => this.openDocument(source),
        signal: this.signal
      })
    );
  }

  /**
   * Registers an opened modal so it is closed at teardown, and self-unregisters
   * when the modal closes on its own.
   *
   * @param {{close:()=>void, overlay:Element}} handle The openModal return value.
   * @returns {void}
   */
  trackModal(handle) {
    if (!handle) {
      return;
    }
    this._openModals.add(handle);
    if (handle.overlay) {
      handle.overlay.addEventListener('lc-modal-closed', () => this._openModals.delete(handle));
    }
  }

  /**
   * Closes every modal still open at teardown, clearing the registry.
   *
   * @returns {void}
   */
  closeModals() {
    for (const handle of this._openModals) {
      handle.close();
    }
    this._openModals.clear();
  }

  /**
   * Fetches a cited document and opens it in a viewer modal, choosing the render
   * mode from the real Content-Type.
   *
   * @param {object} source The source object.
   * @returns {Promise<void>} Resolves once the document modal is open.
   */
  async openDocument(source) {
    const url = this._api.documentUrl({
      botId: this._currentBot.id,
      datasetId: source.dataset_id,
      documentId: source.document_id
    });
    try {
      const res = await fetch(url, { headers: { Accept: '*/*' }, credentials: 'same-origin', signal: this.signal });
      const contentType = res.ok ? res.headers.get('Content-Type') || '' : '';
      const text = !res.ok
        ? 'Document indisponible. Utilisez le lien de téléchargement ci-dessous.'
        : contentType.includes('pdf') ? '' : await res.text();
      this.trackModal(openDocumentModal(this._modalLayer, { filename: source.document_name, contentType, text, url, signal: this.signal }));
    } catch (error) {
      console.error('document open failed', error);
    }
  }

  /**
   * Sends feedback for a message id.
   *
   * @param {object} message The message-like object carrying an id.
   * @param {boolean} isPositive Whether the feedback is positive.
   * @returns {Promise<*>} The send promise.
   */
  sendFeedback(message, isPositive) {
    return this._api.sendFeedback({ messageId: message.id, isPositive });
  }

  /**
   * Toggles the conversations sidebar (header hamburger).
   *
   * @returns {void}
   */
  toggleSidebar() {
    this.setSidebarOpen(!this._sidebarOpen);
  }

  /**
   * Sets the sidebar open state, reflecting it as the `sidebar-open` host
   * attribute (consumed by the CSS overlay) and refreshing the header so the
   * hamburger aria-expanded stays in sync.
   *
   * @param {boolean} open Whether the sidebar is open.
   * @returns {void}
   */
  setSidebarOpen(open) {
    if (this._sidebarOpen === open) {
      return;
    }
    this._sidebarOpen = open;
    this.reflectSidebar();
    if (this._headerContext && !this._headerContext.explore) {
      this.renderHeaderFor(this._headerContext);
    }
  }

  /**
   * Reflects the current sidebar open state to the `sidebar-open` host attribute,
   * which CSS uses to slide the sidebar and reveal the dimmed overlay.
   *
   * @returns {void}
   */
  reflectSidebar() {
    this.toggleAttribute('sidebar-open', this._sidebarOpen);
  }

  /**
   * Decides whether the sidebar should open by default for the current view. The
   * configured `sidebar.open` is honoured only when there is room: a non-floating
   * (embedded) container or a floating panel in fullscreen. In a narrow floating
   * panel the sidebar would cover the whole thread, so it stays closed.
   *
   * @returns {boolean} Whether the sidebar opens by default.
   */
  sidebarOpensByDefault() {
    const wants = !!(this._sidebar && this._sidebar.open);
    return wants && this.isSidebarPushMode();
  }

  /**
   * Tells whether the sidebar is in "push" mode (it shifts the content column and
   * stays open) versus "overlay" mode (it floats over the thread and auto-closes).
   * Mirrors the CSS: push when the panel is roomy — a floating panel in fullscreen,
   * or an embedded container wider than the 640px container-query breakpoint.
   *
   * @returns {boolean} True when the sidebar pushes the content (persistent).
   */
  isSidebarPushMode() {
    if (this.floating) {
      return this.hasAttribute('fullscreen');
    }
    return this.clientWidth > 640;
  }

  /**
   * Toggles the fullscreen attribute (floating panel size via the
   * [floating][fullscreen] host selector) and refreshes the header so the
   * expand/compress icon matches the new state.
   *
   * @returns {void}
   */
  toggleFullscreen() {
    this.toggleAttribute('fullscreen');
    if (this._headerContext) {
      this.renderHeaderFor(this._headerContext);
    }
  }

  /**
   * Document keydown handler bound once: Escape closes the open sidebar (modals
   * own their own Escape handling). Kept as a field so add/remove share the same
   * reference for a clean teardown.
   *
   * @param {KeyboardEvent} event The keyboard event.
   * @returns {void}
   */
  handleKeydown = (event) => {
    if (event.key === 'Escape' && this._sidebarOpen) {
      this.setSidebarOpen(false);
    }
  };

  /**
   * Closes the widget. In floating mode it merely closes the panel (the element
   * stays connected, the FAB reopens it); otherwise the host is hidden.
   *
   * @returns {void}
   */
  close() {
    if (this.floating) {
      this.setPanelOpen(false);
    } else {
      this.hidden = true;
    }
  }

  /**
   * Window resize handler bound once (kept as a field so add/remove use the same
   * reference for a clean teardown).
   *
   * @returns {void}
   */
  handleResize = () => {
    /* responsive layout is CSS-driven; placeholder kept for symmetric teardown */
  };

  /**
   * Dispatches a public composed CustomEvent with a frozen detail clone.
   *
   * @param {string} type The event suffix (e.g. 'message-sent').
   * @param {object} detail The event detail.
   * @returns {void}
   */
  emit(type, detail) {
    this.dispatchEvent(
      new CustomEvent(`lutece-chat:${type}`, {
        bubbles: true,
        composed: true,
        detail: Object.freeze({ ...detail })
      })
    );
  }
}
