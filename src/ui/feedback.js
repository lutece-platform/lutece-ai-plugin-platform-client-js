/**
 * Per-message feedback view (FEATURES "feedback").
 *
 * Thumbs up/down on a bot answer: a positive vote sends immediately, a negative
 * vote opens an accessible comment modal. Once sent (or when reloaded from a
 * persisted feedback) both buttons lock and a confirmation check is shown. A
 * persisted comment is revealable via a toggle and always rendered as text.
 */

import { el } from './dom.js';
import { openModal } from './dom.js';
import { icon } from './icons.js';

/**
 * Renders the feedback control for one message into a host.
 *
 * @param {Element} host The mount element (under a bot bubble).
 * @param {object} params Feedback params.
 * @param {(number|string)} params.messageId The message id (path segment server-side).
 * @param {object} [params.feedback] An existing feedback DTO (locks the control).
 * @param {({messageId:(number|string), isPositive:boolean, comment?:string})=>void} params.onSend Send handler.
 * @param {Element} [params.modalHost] Where to mount the comment modal (defaults to host).
 * @param {AbortSignal} [params.signal] Closes the comment modal on host teardown.
 * @returns {void}
 */
export function renderFeedback(host, { messageId, feedback, onSend, modalHost, signal } = {}) {
  const root = el('div', { class: 'lc-fb', part: 'feedback' });
  const up = el('button', { type: 'button', class: 'lc-fb__up', 'aria-label': 'Utile' }, icon('thumbUp', { size: 16 }));
  const down = el('button', { type: 'button', class: 'lc-fb__down', 'aria-label': 'Pas utile' }, icon('thumbDown', { size: 16 }));
  root.append(up, down);

  /**
   * Locks both buttons and records the sent polarity, optionally exposing a saved
   * comment behind a toggle.
   *
   * @param {boolean} isPositive Whether the recorded vote is positive.
   * @param {string} [comment] An optional saved comment.
   * @returns {void}
   */
  function lock(isPositive, comment) {
    up.disabled = true;
    down.disabled = true;
    root.dataset.sent = isPositive ? 'positive' : 'negative';
    (isPositive ? up : down).classList.add('is-active');
    if (!root.querySelector('.lc-fb__check')) {
      root.appendChild(el('span', { class: 'lc-fb__check', 'aria-label': 'Enregistré' }, icon('check', { size: 16 })));
    }
    if (comment) {
      addCommentToggle(comment);
    }
  }

  /**
   * Adds a toggle that reveals a saved comment as plain text.
   *
   * @param {string} comment The saved comment.
   * @returns {void}
   */
  function addCommentToggle(comment) {
    const text = el('div', { class: 'lc-fb__comment-text', hidden: true }, comment);
    const toggle = el(
      'button',
      {
        type: 'button',
        class: 'lc-fb__comment',
        'aria-label': 'Voir le commentaire',
        onClick: () => {
          text.hidden = !text.hidden;
        }
      },
      icon('message', { size: 16 })
    );
    root.append(toggle, text);
  }

  /**
   * Sends a positive vote immediately and locks the control.
   *
   * @returns {void}
   */
  function sendPositive() {
    onSend({ messageId, isPositive: true });
    lock(true);
  }

  /**
   * Opens the comment modal for a negative vote and sends on submit.
   *
   * @returns {void}
   */
  function openNegative() {
    const textarea = el('textarea', { class: 'lc-fb__textarea', rows: '4', placeholder: 'Commentaire (optionnel)', 'aria-label': 'Commentaire' });
    let modal;
    const submit = el(
      'button',
      {
        type: 'button',
        class: 'lc-fb__submit',
        onClick: () => {
          const comment = textarea.value.trim();
          onSend(comment ? { messageId, isPositive: false, comment } : { messageId, isPositive: false });
          modal.close();
          lock(false, comment || undefined);
        }
      },
      'Envoyer'
    );
    const body = el('div', {}, [
      textarea,
      el('div', { class: 'lc-fb__actions' }, submit)
    ]);
    textarea.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        submit.click();
      }
    });
    modal = openModal(modalHost || host, {
      title: 'Votre retour nous aide',
      body,
      trigger: down,
      signal
    });
  }

  up.addEventListener('click', sendPositive);
  down.addEventListener('click', openNegative);
  host.appendChild(root);

  if (feedback) {
    lock(!!feedback.isPositive, feedback.comment || undefined);
  }
}
