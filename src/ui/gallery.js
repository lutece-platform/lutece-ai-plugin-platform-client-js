/**
 * Bots gallery view (SPEC §12, FEATURES "liste de bots").
 *
 * Renders a card grid of bots, an optional greeting and a search box (shown past
 * five items). All server-provided text (names, descriptions) goes through
 * textContent via the el() helper, never innerHTML; logoBase64 is validated
 * before becoming an <img>.
 */

import { el, clear } from './dom.js';
import { icon } from './icons.js';
import { validatedLogoSrc, avatarColor, initial } from './avatar.js';

/**
 * Builds the avatar node for a card: a validated logo image when available,
 * otherwise a coloured monogram derived from the name.
 *
 * @param {string} name The display name.
 * @param {?string} logoBase64 The optional base64 data URL.
 * @returns {HTMLElement} The avatar element.
 */
function avatar(name, logoBase64) {
  const src = validatedLogoSrc(logoBase64);
  if (src) {
    const img = el('img', { class: 'lc-card__avatar', alt: '' });
    img.src = src;
    return img;
  }
  const node = el('div', { class: 'lc-card__avatar lc-card__avatar--mono' }, initial(name));
  node.style.background = avatarColor(name);
  return node;
}

/**
 * Builds one bot card as a native button carrying a search key on a data
 * attribute for client-side filtering.
 *
 * @param {object} params Card params.
 * @param {string} params.name The display name.
 * @param {string} params.description The description text.
 * @param {?string} params.logoBase64 The optional logo data URL.
 * @param {()=>void} params.onClick The activation handler.
 * @returns {HTMLButtonElement} The card button.
 */
function card({ name, description, logoBase64, onClick }) {
  return el(
    'button',
    {
      type: 'button',
      class: 'lc-card',
      part: 'card',
      'data-key': `${name} ${description}`.toLowerCase(),
      onClick
    },
    [
      avatar(name, logoBase64),
      el('div', { class: 'lc-card__text' }, [
        el('div', { class: 'lc-card__name' }, name),
        description ? el('div', { class: 'lc-card__desc' }, description) : null
      ])
    ]
  );
}

/**
 * Renders the gallery into a host, wiring a search box that toggles the
 * `display` of cards in place (no re-render, O(n) per keystroke).
 *
 * @param {Element} host The mount element.
 * @param {object} params Gallery params.
 * @param {object[]} params.bots The BotDTO array.
 * @param {string} [params.firstName] Optional user first name for the greeting.
 * @param {(bot:object)=>void} params.onBot Bot card activation callback.
 * @returns {void}
 */
export function renderGallery(host, { bots = [], firstName, onBot }) {
  clear(host);
  const title = firstName ? `Bonjour, ${firstName}` : 'Explorer les agents';
  const grid = el('div', { class: 'lc-gallery__grid', part: 'gallery-grid' });
  for (const bot of bots) {
    grid.appendChild(
      card({
        name: bot.botName || '',
        description: bot.botDescription || '',
        logoBase64: bot.logoBase64,
        onClick: () => onBot(bot)
      })
    );
  }

  const root = el('div', { class: 'lc-gallery', part: 'gallery' }, [el('h1', { class: 'lc-gallery__title', part: 'gallery-title' }, title)]);

  if (bots.length > 5) {
    root.appendChild(buildSearch(grid));
  }
  root.appendChild(grid);
  host.appendChild(root);
}

/**
 * Builds the search box that filters cards by their `data-key` on input.
 *
 * @param {HTMLElement} grid The grid whose cards are filtered.
 * @returns {HTMLElement} The search container.
 */
function buildSearch(grid) {
  const input = el('input', { type: 'search', placeholder: 'Rechercher un agent...', 'aria-label': 'Rechercher' });
  input.addEventListener('input', () => {
    const term = input.value.trim().toLowerCase();
    for (const c of grid.querySelectorAll('button.lc-card')) {
      const hidden = term && !c.dataset.key.includes(term);
      c.style.display = hidden ? 'none' : '';
    }
  });
  return el('div', { class: 'lc-gallery__search', part: 'gallery-search' }, [icon('search'), input]);
}
