/**
 * User avatar + dropdown menu view (FEATURES "utilisateur").
 *
 * Renders a round initials button in the header right zone that toggles an
 * absolutely-positioned dropdown containing the user identity (avatar, name,
 * email) and a "daily limits" section listing the remaining quota per bot. The
 * dropdown closes on an outside click or Escape; the document listener is owned
 * here and removed via the returned destroy() so the orchestrator can mirror it
 * at teardown. Every server string reaches the DOM via textContent (el helper).
 */

import { el } from './dom.js';
import { icon } from './icons.js';

/**
 * Builds the two-letter initials from a user, falling back to the email or '?'.
 *
 * @param {object} user The user ({ firstName, lastName, email }).
 * @returns {string} The uppercased initials.
 */
function initials(user) {
  const first = (user.firstName || '').trim();
  const last = (user.lastName || '').trim();
  const letters = `${first.charAt(0)}${last.charAt(0)}`.trim();
  if (letters) {
    return letters.toUpperCase();
  }
  const email = (user.email || '').trim();
  return email ? email.charAt(0).toUpperCase() : '?';
}

/**
 * Builds the daily-limits section: one row per bot declaring a daily cap, with
 * the remaining count out of the cap resolved from the user rate counters.
 *
 * @param {object[]} bots The bots list.
 * @param {object[]} rates The per-bot rate counters ({ botId, messageCount }).
 * @returns {?HTMLElement} The section element, or null when no bot has a cap.
 */
function rateSection(bots, rates) {
  const limited = (bots || []).filter((b) => b.rateLimitByUserByDay > 0);
  if (limited.length === 0) {
    return null;
  }
  const rows = limited.map((bot) => {
    const entry = (rates || []).find((r) => String(r.botId) === String(bot.id));
    const used = entry ? entry.messageCount : 0;
    const remaining = Math.max(0, bot.rateLimitByUserByDay - used);
    return el('div', { class: 'lc-user__rate-item' }, [
      el('span', { class: 'lc-user__rate-name' }, bot.botName || 'Assistant'),
      el('span', { class: 'lc-user__rate-count' }, `${remaining} / ${bot.rateLimitByUserByDay}`)
    ]);
  });
  return el('div', { class: 'lc-user__rates' }, [
    el('div', { class: 'lc-user__rates-head' }, el('h4', {}, 'Limites quotidiennes')),
    ...rows
  ]);
}

/**
 * Renders the user menu (initials button + dropdown) into a host, wiring the
 * toggle, the outside-click/Escape close and returning a handle to tear it down.
 * With no user, nothing is rendered and a no-op handle is returned.
 *
 * @param {Element} host The mount element (the header right zone).
 * @param {object} params User-menu params.
 * @param {?object} params.user The user ({ firstName, lastName, email }).
 * @param {object[]} [params.bots] The bots list (for the daily-limits section).
 * @param {object[]} [params.rates] The per-bot rate counters.
 * @returns {{destroy:()=>void}} The teardown handle.
 */
export function renderUserMenu(host, { user, bots = [], rates = [] } = {}) {
  if (!user) {
    return { destroy() {} };
  }
  const avatar = el('div', { class: 'lc-user__avatar' }, initials(user));
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email || '';
  const info = el('div', { class: 'lc-user__info' }, [
    avatar.cloneNode(true),
    el('div', { class: 'lc-user__details' }, [
      el('div', { class: 'lc-user__name' }, fullName),
      el('div', { class: 'lc-user__email' }, user.email || '')
    ])
  ]);
  const dropdown = el('div', { class: 'lc-user__dropdown', part: 'user-menu', role: 'menu' }, [info, rateSection(bots, rates)]);
  const btn = el(
    'button',
    { type: 'button', class: 'lc-user__btn', 'aria-label': 'Menu utilisateur', 'aria-haspopup': 'true', 'aria-expanded': 'false' },
    [
      el('span', { class: 'lc-user__initials' }, initials(user)),
      el('span', { class: 'lc-user__indicator', 'aria-hidden': 'true' }, icon('chevron', { size: 12 }))
    ]
  );

  /**
   * Sets the dropdown open state, syncing the button aria-expanded.
   *
   * @param {boolean} open Whether the dropdown is open.
   * @returns {void}
   */
  function setOpen(open) {
    dropdown.classList.toggle('is-open', open);
    btn.classList.toggle('is-active', open);
    btn.setAttribute('aria-expanded', String(open));
  }

  /**
   * Closes the dropdown when a click lands outside the menu container.
   *
   * @param {MouseEvent} event The document click event.
   * @returns {void}
   */
  function onDocClick(event) {
    if (!container.contains(event.target) && !event.composedPath().includes(container)) {
      setOpen(false);
    }
  }

  /**
   * Closes the dropdown on Escape.
   *
   * @param {KeyboardEvent} event The keydown event.
   * @returns {void}
   */
  function onKeydown(event) {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    setOpen(!dropdown.classList.contains('is-open'));
  });
  const container = el('div', { class: 'lc-user' }, [btn, dropdown]);
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKeydown);
  host.appendChild(container);

  return {
    /**
     * Removes the document listeners owned by this menu.
     *
     * @returns {void}
     */
    destroy() {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeydown);
    }
  };
}
