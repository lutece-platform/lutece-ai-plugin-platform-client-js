/**
 * Conversations sidebar view (FEATURES "sidebar conversations").
 *
 * Lists conversations sorted by updatedAt (most recent first), highlights the
 * active one, exposes per-conversation deletion and a delete-all action (both
 * behind a confirmation), an "Explore agents" entry and an empty state. All
 * server text is inserted via textContent (el helper), never innerHTML.
 */

import { el, clear } from './dom.js';
import { icon } from './icons.js';
import { validatedLogoSrc } from './avatar.js';

/** @type {number} Maximum characters of the last-message preview. */
const PREVIEW_MAX = 30;

/**
 * Builds the sidebar header: a theme-appropriate logo image when a valid
 * light/dark logo is supplied, otherwise the free logoHtml text (defaulting to
 * "Conversations"). Logo sources go through the strict raster validator so a
 * crafted data URL can never inject markup.
 *
 * @param {object} params Header params.
 * @param {?string} [params.lightLogo] The light-theme logo data URL.
 * @param {?string} [params.darkLogo] The dark-theme logo data URL.
 * @param {?string} [params.logoHtml] The free header text (default "Conversations").
 * @param {boolean} [params.dark] Current dark-mode state (selects the logo).
 * @returns {HTMLElement} The header element.
 */
function header({ lightLogo, darkLogo, logoHtml, dark }) {
  const src = validatedLogoSrc(dark ? darkLogo || lightLogo : lightLogo || darkLogo);
  const root = el('div', { class: 'lc-sidebar__header', part: 'sidebar-header' });
  if (src) {
    const img = el('img', { class: 'lc-sidebar__logo', alt: '' });
    img.src = src;
    root.appendChild(img);
  } else {
    root.appendChild(el('div', { class: 'lc-sidebar__logo-html' }, logoHtml || 'Conversations'));
  }
  return root;
}

/**
 * Parses a conversation timestamp that may be epoch millis or the server string
 * form "YYYY-MM-DD HH:mm:ss.S", returning a comparable number.
 *
 * @param {(number|string)} value The updatedAt value.
 * @returns {number} A millisecond timestamp (0 when unparsable).
 */
function toTime(value) {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'string') {
    const ms = Date.parse(value.replace(' ', 'T'));
    return Number.isNaN(ms) ? 0 : ms;
  }
  return 0;
}

/**
 * Truncates a preview string to PREVIEW_MAX characters, appending an ellipsis.
 *
 * @param {string} text The last message text.
 * @returns {string} The truncated preview.
 */
function preview(text) {
  const flat = String(text || '').replace(/\s+/g, ' ').trim();
  return flat.length > PREVIEW_MAX ? `${flat.slice(0, PREVIEW_MAX)}…` : flat;
}

/**
 * Builds one conversation row: a primary open button plus a delete button.
 *
 * @param {object} params Row params.
 * @param {object} params.conv The conversation DTO.
 * @param {boolean} params.active Whether this is the active conversation.
 * @param {(c:object)=>void} params.onOpen Open handler.
 * @param {(c:object)=>void} params.onDelete Confirmed delete handler.
 * @param {()=>boolean} params.confirm Confirmation predicate.
 * @returns {HTMLElement} The row element.
 */
function row({ conv, active, onOpen, onDelete, confirm }) {
  const open = el(
    'button',
    { type: 'button', class: 'lc-conv__open', onClick: () => onOpen(conv) },
    el('span', { class: 'lc-conv__preview' }, preview(conv.lastMessage) || 'Conversation')
  );
  const del = el(
    'button',
    {
      type: 'button',
      class: 'lc-conv__delete',
      'aria-label': 'Supprimer la conversation',
      onClick: () => {
        if (confirm()) {
          onDelete(conv);
        }
      }
    },
    icon('trash', { size: 16 })
  );
  return el(
    'div',
    { class: `lc-conv${active ? ' is-active' : ''}`, part: 'conversation', 'data-uuid': conv.conversationUuid },
    [open, del]
  );
}

/**
 * Renders the conversations sidebar into a host.
 *
 * @param {Element} host The mount element.
 * @param {object} params Sidebar params.
 * @param {object[]} params.conversations The conversation DTO array.
 * @param {string} [params.activeUuid] The currently open conversation uuid.
 * @param {(c:object)=>void} params.onOpen Open handler.
 * @param {(c:object)=>void} params.onDelete Confirmed single-delete handler.
 * @param {()=>void} params.onDeleteAll Confirmed delete-all handler.
 * @param {()=>void} params.onExplore Explore-agents handler.
 * @param {boolean} [params.showExplore] Whether the explore entry is rendered (mirrors show-bot-list).
 * @param {()=>boolean} [params.confirm] Confirmation predicate (defaults to window.confirm).
 * @param {?string} [params.lightLogo] The light-theme sidebar logo data URL.
 * @param {?string} [params.darkLogo] The dark-theme sidebar logo data URL.
 * @param {?string} [params.logoHtml] The sidebar header free text (default "Conversations").
 * @param {boolean} [params.dark] Current dark-mode state (selects the logo variant).
 * @returns {void}
 */
export function renderSidebar(host, { conversations = [], activeUuid, onOpen, onDelete, onDeleteAll, onExplore, onClose, showExplore = true, confirm, lightLogo, darkLogo, logoHtml, dark } = {}) {
  clear(host);
  const ask = confirm || (() => window.confirm('Confirmer ?'));
  const root = el('div', { class: 'lc-sidebar', part: 'sidebar' });

  root.appendChild(header({ lightLogo, darkLogo, logoHtml, dark }));

  if (onClose) {
    root.appendChild(
      el('button', { type: 'button', class: 'lc-sidebar__close', part: 'sidebar-close', 'aria-label': 'Fermer le panneau', onClick: () => onClose() }, [
        icon('close', { size: 18 })
      ])
    );
  }

  if (showExplore) {
    root.appendChild(
      el('button', { type: 'button', class: 'lc-sidebar__explore', onClick: () => onExplore() }, [
        icon('apps', { size: 16 }),
        el('span', {}, 'Explorer les agents')
      ])
    );
  }

  const sorted = [...conversations].sort((a, b) => toTime(b.updatedAt) - toTime(a.updatedAt));
  if (sorted.length === 0) {
    root.appendChild(
      el('div', { class: 'lc-sidebar__empty', part: 'sidebar-empty' }, [
        icon('message', { size: 24 }),
        el('span', {}, 'Pas de conversation récente')
      ])
    );
    host.appendChild(root);
    return;
  }

  const listEl = el('div', { class: 'lc-sidebar__list' });
  for (const conv of sorted) {
    listEl.appendChild(
      row({ conv, active: conv.conversationUuid === activeUuid, onOpen, onDelete, confirm: ask })
    );
  }
  root.appendChild(listEl);
  root.appendChild(
    el('div', { class: 'lc-sidebar__footer' }, [
      el(
        'button',
        {
          type: 'button',
          class: 'lc-sidebar__delete-all',
          onClick: () => {
            if (ask()) {
              onDeleteAll();
            }
          }
        },
        [icon('trash', { size: 16 }), el('span', {}, 'Tout supprimer')]
      )
    ])
  );
  host.appendChild(root);
}
