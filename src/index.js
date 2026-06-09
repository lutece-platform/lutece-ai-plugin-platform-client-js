/**
 * Entry point — registers <lutece-chat> and exports the programmatic factory
 * (SPEC §1, §10). The customElements.define() call is the declared side-effect of
 * this module (see package.json sideEffects).
 */

import { LuteceChat } from './lutece-chat.js';

/** @type {string} The package version. */
export const VERSION = '2.0.0';

export { LuteceChat };

if (!customElements.get('lutece-chat')) {
  customElements.define('lutece-chat', LuteceChat);
}

/** @type {Set<string>} Option keys mapped to reflected primitive attributes. */
const PRIMITIVE_ATTRS = {
  botId: 'bot-id',
  darkMode: 'dark-mode',
  fullscreen: 'fullscreen',
  closable: 'closable',
  floating: 'floating',
  showBotList: 'show-bot-list',
  showThemeToggle: 'show-theme-toggle',
  storageKey: 'storage-key'
};

/** @type {Set<string>} Attributes whose component default is true: a false option must reflect as attr="false". */
const DEFAULT_TRUE_ATTRS = new Set(['closable', 'show-bot-list', 'show-theme-toggle']);

/** @type {Set<string>} Option keys assigned as JS object properties. */
const OBJECT_PROPS = new Set(['endpoints', 'sidebar', 'customCSS']);

/**
 * Resolves a container option to an Element.
 *
 * @param {(string|Element|undefined)} container A selector, id, or Element.
 * @returns {?Element} The resolved element, or null.
 */
function resolveContainer(container) {
  if (!container) {
    return null;
  }
  if (container instanceof Element) {
    return container;
  }
  if (typeof container === 'string') {
    return document.querySelector(container) || document.getElementById(container);
  }
  return null;
}

/**
 * Programmatic factory: creates a <lutece-chat>, maps primitive options to
 * reflected attributes and object options to JS properties, mounts it into the
 * provided container (or, with no container, as a self-hosting floating widget
 * appended to <body>), and returns the element. Teardown is simply
 * element.remove() — the element is its own host, including in floating mode.
 *
 * @param {object} [options] Widget options.
 * @param {(string|Element)} [options.container] Mount container; floating widget otherwise.
 * @param {(number|string)} [options.botId] Initial bot id.
 * @param {boolean} [options.darkMode] Start in dark mode.
 * @param {boolean} [options.fullscreen] Fullscreen layout.
 * @param {boolean} [options.closable] Whether the floating panel is closable (shows a FAB).
 * @param {boolean} [options.floating] Force floating mode (set implicitly when no container).
 * @param {object} [options.endpoints] Endpoints config ({ origin, base, firstName }).
 * @param {object} [options.sidebar] Sidebar config.
 * @param {string} [options.customCSS] Per-instance custom CSS.
 * @returns {HTMLElement} The created and mounted element.
 */
export function createLuteceChat(options = {}) {
  const element = document.createElement('lutece-chat');
  const container = resolveContainer(options.container);
  const optionsWithMode = container ? options : { ...options, floating: true };
  for (const [key, attr] of Object.entries(PRIMITIVE_ATTRS)) {
    if (optionsWithMode[key] === undefined || optionsWithMode[key] === null) {
      continue;
    }
    if (DEFAULT_TRUE_ATTRS.has(attr)) {
      element.setAttribute(attr, String(optionsWithMode[key] !== false));
    } else if (typeof optionsWithMode[key] === 'boolean') {
      if (optionsWithMode[key]) {
        element.setAttribute(attr, '');
      }
    } else {
      element.setAttribute(attr, String(optionsWithMode[key]));
    }
  }
  for (const prop of OBJECT_PROPS) {
    if (options[prop] !== undefined) {
      element[prop] = options[prop];
    }
  }

  (container || document.body).appendChild(element);
  return element;
}
