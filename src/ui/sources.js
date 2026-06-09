/**
 * Source citation modal and document viewer (FEATURES "sources/citations",
 * SPEC §8 bloquant n°25).
 *
 * The source modal shows the cited excerpt and dataset, with a button to open the
 * full document. The document viewer chooses its rendering from the real
 * Content-Type (never the filename extension): markdown is sanitized, PDF goes in
 * a sandboxed iframe WITHOUT allow-scripts, anything else is shown as escaped
 * text. A download fallback is always offered.
 */

import { el } from './dom.js';
import { openModal } from './dom.js';
import { sanitizeMarkdown } from '../render/markdown.js';
import { icon } from './icons.js';

/**
 * Opens the source preview modal for a citation.
 *
 * @param {Element} host The modal mount element.
 * @param {object} params Modal params.
 * @param {object} params.source The source object from BOT_SOURCES_RETRIEVED.
 * @param {(source:object)=>void} params.onOpenDocument Open-document handler.
 * @param {Element} [params.trigger] Element to restore focus to on close.
 * @param {AbortSignal} [params.signal] Closes the modal on host teardown.
 * @returns {{dialog:HTMLElement, close:()=>void}} The modal handles.
 */
export function openSourceModal(host, { source, onOpenDocument, trigger, signal } = {}) {
  const openDoc = el(
    'button',
    {
      type: 'button',
      class: 'lc-source__open-doc',
      onClick: () => onOpenDocument(source)
    },
    [icon('document', { size: 16 }), el('span', {}, 'Voir le document complet')]
  );
  const body = el('div', { class: 'lc-source' }, [
    source.dataset_name ? el('div', { class: 'lc-source__dataset' }, `Dataset : ${source.dataset_name}`) : null,
    el('div', { class: 'lc-source__text' }, source.text || ''),
    openDoc
  ]);
  return openModal(host, { title: source.document_name || 'Source', body, trigger, signal });
}

/**
 * Builds a document viewer node for already-fetched document content, selecting
 * the rendering strategy from the Content-Type.
 *
 * @param {object} params Viewer params.
 * @param {string} params.filename The document filename (escaped on use).
 * @param {string} params.contentType The real response Content-Type.
 * @param {string} [params.text] The decoded text body (for markdown/text/html).
 * @param {string} params.url The document URL (iframe src and download href).
 * @returns {HTMLElement} The viewer element.
 */
export function buildDocumentViewer({ filename, contentType, text, url }) {
  const type = (contentType || '').toLowerCase();
  const root = el('div', { class: 'lc-docview', part: 'docview' });

  if (type.includes('markdown')) {
    const md = el('div', { class: 'lc-docview__md' });
    md.innerHTML = sanitizeMarkdown(text || '');
    root.appendChild(md);
  } else if (type.includes('pdf')) {
    const iframe = el('iframe', {
      class: 'lc-docview__pdf',
      title: filename || 'Document',
      sandbox: 'allow-same-origin'
    });
    iframe.src = url;
    root.appendChild(iframe);
  } else {
    root.appendChild(el('pre', { class: 'lc-docview__text' }, text || ''));
  }

  const download = el(
    'a',
    { class: 'lc-docview__download', href: url, download: '', rel: 'noopener' },
    [icon('document', { size: 16 }), el('span', {}, filename || 'Télécharger')]
  );
  root.appendChild(download);
  return root;
}

/**
 * Opens a document viewer inside a modal.
 *
 * @param {Element} host The modal mount element.
 * @param {object} params Viewer + modal params (see buildDocumentViewer).
 * @param {string} params.filename The document filename.
 * @param {string} params.contentType The real Content-Type.
 * @param {string} [params.text] The decoded text body.
 * @param {string} params.url The document URL.
 * @param {Element} [params.trigger] Focus restoration target.
 * @param {AbortSignal} [params.signal] Closes the modal on host teardown.
 * @returns {{dialog:HTMLElement, close:()=>void}} The modal handles.
 */
export function openDocumentModal(host, { filename, contentType, text, url, trigger, signal } = {}) {
  const viewer = buildDocumentViewer({ filename, contentType, text, url });
  return openModal(host, { title: filename || 'Document', body: viewer, trigger, signal });
}
