/**
 * Error / empty state screens (FEATURES "modal/embarqué" error screens, SPEC §6).
 *
 * Drop-in widget: retry NEVER reloads the host page (no location.reload). The
 * retry callback re-initialises the widget internally. Each screen carries a
 * data-kind for styling and a single retry action.
 */

import { el, clear } from './dom.js';
import { icon } from './icons.js';

/** @type {Record<string,{title:string, message:string, action:string}>} Per-kind copy. */
const SCREENS = {
  unavailable: {
    title: 'Service indisponible',
    message: 'Le service de chat est momentanément injoignable.',
    action: 'Réessayer'
  },
  unauthorized: {
    title: 'Session expirée',
    message: 'Votre session a expiré. Veuillez vous reconnecter.',
    action: 'Réessayer'
  },
  forbidden: {
    title: 'Accès refusé',
    message: 'Vous n’avez pas accès à ce service.',
    action: 'Réessayer'
  },
  empty: {
    title: 'Aucun agent disponible',
    message: 'Aucun agent n’est disponible pour le moment.',
    action: 'Réessayer'
  },
  'rate-limited': {
    title: 'Limite atteinte',
    message: 'Limite quotidienne atteinte ou trop de conversations simultanées. Réessayez plus tard.',
    action: 'Réessayer'
  }
};

/**
 * Renders an error/empty screen into a host.
 *
 * @param {Element} host The mount element.
 * @param {object} params Screen params.
 * @param {('unavailable'|'unauthorized'|'forbidden'|'empty'|'rate-limited')} params.kind The screen kind.
 * @param {()=>void} params.onRetry The retry handler (internal re-init, never a page reload).
 * @returns {void}
 */
export function renderErrorScreen(host, { kind, onRetry } = {}) {
  clear(host);
  const screen = SCREENS[kind] || SCREENS.unavailable;
  host.appendChild(
    el('div', { class: 'lc-error', part: 'error', 'data-kind': kind || 'unavailable', role: 'alert' }, [
      icon('alert', { size: 64 }),
      el('h2', { class: 'lc-error__title' }, screen.title),
      el('p', { class: 'lc-error__message' }, screen.message),
      el('button', { type: 'button', class: 'lc-error__retry', onClick: () => onRetry && onRetry() }, screen.action)
    ])
  );
}
