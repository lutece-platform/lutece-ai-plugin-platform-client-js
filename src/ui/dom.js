/**
 * Safe DOM construction and modal helpers for the UI views (SPEC §4, §8).
 *
 * Every node is built with createElement; text is set via textContent and never
 * via innerHTML, so server/LLM strings can never inject markup through this path.
 * Dynamic selector values are always escaped with CSS.escape (qs). openModal
 * implements the shared dialog contract: role=dialog + aria-modal, focus trap,
 * focus restoration to the trigger and Escape-to-close.
 */

/**
 * Creates an element, applying attributes, an optional onClick handler and
 * children. String children are inserted as text (never parsed as HTML); falsy
 * children are skipped so callers can use inline conditionals.
 *
 * @param {string} tag The tag name.
 * @param {object} [attrs] Attribute map; `class`, `onClick` and standard attributes.
 * @param {(string|Node|Array<string|Node|null|false|undefined>)} [children] Children.
 * @returns {HTMLElement} The created element.
 */
export function el(tag, attrs = {}, children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === null || value === undefined || value === false) {
      continue;
    }
    if (key === 'class') {
      node.className = value;
    } else if (key === 'onClick') {
      node.addEventListener('click', value);
    } else if (key === 'onInput') {
      node.addEventListener('input', value);
    } else if (key === 'onKeydown') {
      node.addEventListener('keydown', value);
    } else if (key === 'onChange') {
      node.addEventListener('change', value);
    } else {
      node.setAttribute(key, value === true ? '' : String(value));
    }
  }
  appendChildren(node, children);
  return node;
}

/**
 * Appends a child or list of children to a node, inserting strings as text and
 * skipping null/false/undefined entries.
 *
 * @param {Node} node The parent node.
 * @param {(string|Node|Array<string|Node|null|false|undefined>)} [children] Children.
 * @returns {void}
 */
export function appendChildren(node, children) {
  if (children === null || children === undefined) {
    return;
  }
  const list = Array.isArray(children) ? children : [children];
  for (const child of list) {
    if (child === null || child === undefined || child === false) {
      continue;
    }
    node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
}

/**
 * Removes every child node of an element.
 *
 * @param {Element} node The element to empty.
 * @returns {void}
 */
export function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

/**
 * Runs querySelector with every dynamic segment CSS.escaped. The selector is
 * assembled from alternating static parts and dynamic values: qs(root, '#', id)
 * or qs(root, '[data-op="', op, '"]'). All odd-indexed extra arguments are
 * treated as dynamic and escaped.
 *
 * @param {ParentNode} root The search root.
 * @param {...string} parts Static prefix then alternating dynamic/static parts.
 * @returns {?Element} The first match or null.
 */
export function qs(root, ...parts) {
  let selector = '';
  for (let i = 0; i < parts.length; i += 1) {
    selector += i % 2 === 1 ? CSS.escape(parts[i]) : parts[i];
  }
  return root.querySelector(selector);
}

/** @type {string} The CSS selector matching focusable descendants. */
const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** @type {number} Monotonic counter for unique dialog title ids. */
let dialogSeq = 0;

/**
 * Opens an accessible modal dialog inside a host (typically the shadow root or a
 * dedicated overlay layer). Builds an overlay + role=dialog, labels it by its
 * title, traps Tab focus, moves focus inside, closes on Escape or overlay click
 * and restores focus to the trigger on close.
 *
 * @param {Element} host The element the overlay is appended to.
 * @param {object} params Modal params.
 * @param {string} params.title The dialog title (shown and used as aria label).
 * @param {Node} params.body The dialog body content node.
 * @param {Element} [params.trigger] The element to restore focus to on close.
 * @param {boolean} [params.dismissable=true] Whether overlay click / Escape close it.
 * @param {AbortSignal} [params.signal] When it aborts (host teardown), the modal closes and its document listener is removed.
 * @returns {{dialog:HTMLElement, overlay:HTMLElement, close:()=>void}} The modal handles.
 */
export function openModal(host, { title, body, trigger, dismissable = true, signal } = {}) {
  const previousFocus = trigger || document.activeElement;
  dialogSeq += 1;
  const titleId = `lc-dialog-title-${dialogSeq}`;
  const heading = el('h2', { id: titleId, class: 'lc-modal__title', part: 'modal-title' }, title);
  const closeBtn = el(
    'button',
    { type: 'button', class: 'lc-modal__close', part: 'modal-close', 'aria-label': 'Fermer' },
    '×'
  );
  const dialog = el(
    'div',
    {
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': titleId,
      class: 'lc-modal',
      part: 'modal'
    },
    [el('div', { class: 'lc-modal__head' }, [heading, closeBtn]), el('div', { class: 'lc-modal__body' }, body)]
  );
  const overlay = el('div', { class: 'lc-overlay', part: 'overlay' }, dialog);
  let closed = false;

  /**
   * Tears down the modal, removing listeners and restoring focus to the trigger.
   * Idempotent: a second call (e.g. signal abort after a manual close) is a no-op.
   *
   * @returns {void}
   */
  function close() {
    if (closed) {
      return;
    }
    closed = true;
    document.removeEventListener('keydown', onKeydown, true);
    if (signal) {
      signal.removeEventListener('abort', close);
    }
    overlay.dispatchEvent(new CustomEvent('lc-modal-closed'));
    overlay.remove();
    if (previousFocus && typeof previousFocus.focus === 'function') {
      previousFocus.focus();
    }
  }

  /**
   * Handles Escape (close) and Tab (focus trap) while the modal is open.
   *
   * @param {KeyboardEvent} event The keyboard event.
   * @returns {void}
   */
  function onKeydown(event) {
    if (!overlay.isConnected) {
      return;
    }
    if (event.key === 'Escape' && dismissable) {
      event.preventDefault();
      close();
      return;
    }
    if (event.key !== 'Tab') {
      return;
    }
    const focusables = [...dialog.querySelectorAll(FOCUSABLE)].filter((n) => n.offsetParent !== null || n === document.activeElement);
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = dialog.getRootNode().activeElement || document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay && dismissable) {
      close();
    }
  });
  document.addEventListener('keydown', onKeydown, true);
  if (signal) {
    if (signal.aborted) {
      close();
      return { dialog, overlay, close };
    }
    signal.addEventListener('abort', close);
  }
  host.appendChild(overlay);
  const initial = dialog.querySelector(FOCUSABLE) || dialog;
  initial.focus();
  return { dialog, overlay, close };
}
