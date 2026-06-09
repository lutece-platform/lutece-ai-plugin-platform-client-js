/**
 * Widget header view (FEATURES "modal/embarqué" header controls).
 *
 * Renders the contextual controls (back, explore, theme toggle, fullscreen,
 * close, user menu) gated by the element options. The legacy header carries no
 * visible title — the bot name lives in the welcome hero — so it is a pure icon
 * bar labelled for assistive tech. Every control is a native button with an
 * aria-label.
 */

import { el, clear } from './dom.js';
import { icon } from './icons.js';

/**
 * Renders the header into a host.
 *
 * @param {Element} host The mount element.
 * @param {object} params Header params.
 * @param {string} [params.title] The bot name (used only as the header aria-label, never rendered).
 * @param {boolean} [params.showBack] Whether to show the back button.
 * @param {boolean} [params.showExplore] Whether to show the explore button.
 * @param {boolean} [params.showThemeToggle] Whether to show the theme toggle.
 * @param {boolean} [params.darkMode] Current dark-mode state (drives the toggle icon).
 * @param {boolean} [params.showFullscreen] Whether to show the fullscreen toggle.
 * @param {boolean} [params.fullscreen] Current fullscreen state (drives the expand/compress icon).
 * @param {boolean} [params.closable] Whether to show the close button.
 * @param {boolean} [params.showMenu] Whether to show the sidebar hamburger.
 * @param {boolean} [params.sidebarOpen] Current sidebar open state (drives the hamburger aria-expanded).
 * @param {()=>void} [params.onBack] Back handler.
 * @param {()=>void} [params.onExplore] Explore handler.
 * @param {()=>void} [params.onTheme] Theme toggle handler.
 * @param {()=>void} [params.onFullscreen] Fullscreen handler.
 * @param {()=>void} [params.onClose] Close handler.
 * @param {()=>void} [params.onMenu] Menu handler.
 * @returns {void}
 */
export function renderHeader(host, params = {}) {
  clear(host);
  const left = el('div', { class: 'lc-hd__left' });
  if (params.showMenu) {
    const menu = button('lc-hd__menu', 'menu', 'Conversations', params.onMenu);
    menu.setAttribute('aria-expanded', params.sidebarOpen ? 'true' : 'false');
    left.appendChild(menu);
  }
  if (params.showBack) {
    left.appendChild(button('lc-hd__back', 'back', 'Retour', params.onBack));
  }
  const spacer = el('div', { class: 'lc-hd__spacer', 'aria-hidden': 'true' });

  const right = el('div', { class: 'lc-hd__right' });
  if (params.showExplore) {
    right.appendChild(button('lc-hd__explore', 'apps', 'Explorer les agents', params.onExplore));
  }
  if (params.showThemeToggle) {
    right.appendChild(button('lc-hd__theme', params.darkMode ? 'sun' : 'moon', 'Changer de thème', params.onTheme));
  }
  if (params.showFullscreen) {
    const fsIcon = params.fullscreen ? 'compress' : 'fullscreen';
    const fsLabel = params.fullscreen ? 'Réduire la fenêtre' : 'Plein écran';
    right.appendChild(button('lc-hd__fullscreen', fsIcon, fsLabel, params.onFullscreen));
  }
  if (params.closable) {
    right.appendChild(button('lc-hd__close', 'close', 'Fermer', params.onClose));
  }

  host.appendChild(el('header', { class: 'lc-hd', part: 'header', 'aria-label': params.title || 'Barre du chat' }, [left, spacer, right]));
}

/**
 * Builds one header icon button.
 *
 * @param {string} cls The button class.
 * @param {string} iconName The icon name.
 * @param {string} label The aria-label.
 * @param {Function} [handler] The click handler.
 * @returns {HTMLButtonElement} The button.
 */
function button(cls, iconName, label, handler) {
  return el(
    'button',
    { type: 'button', class: cls, 'aria-label': label, onClick: handler || (() => {}) },
    icon(iconName, { size: 18 })
  );
}
