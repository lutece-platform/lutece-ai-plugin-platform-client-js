/**
 * Inline SVG icon factory (SPEC §8 — no innerHTML of untrusted content; these
 * paths are static, author-controlled constants, never server data).
 *
 * Each icon is built node-by-node via the SVG namespace so the module emits real
 * elements rather than HTML strings, keeping a single safe DOM-building idiom.
 */

/** @type {string} The SVG namespace URI. */
const SVG_NS = 'http://www.w3.org/2000/svg';

/** @type {Record<string,string[]>} Path `d` data per icon name (Tabler-like, 24px). */
const PATHS = {
  send: ['M10 14l11 -11', 'M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5'],
  back: ['M5 12l14 0', 'M5 12l6 6', 'M5 12l6 -6'],
  close: ['M18 6l-12 12', 'M6 6l12 12'],
  apps: ['M4 4h6v6h-6z', 'M14 4h6v6h-6z', 'M4 14h6v6h-6z', 'M14 14h6v6h-6z'],
  menu: ['M4 6l16 0', 'M4 12l16 0', 'M4 18l16 0'],
  sun: ['M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0', 'M3 12h1', 'M20 12h1', 'M12 3v1', 'M12 20v1', 'M5.6 5.6l.7 .7', 'M17.7 17.7l.7 .7', 'M18.4 5.6l-.7 .7', 'M6.3 17.7l-.7 .7'],
  moon: ['M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'],
  fullscreen: ['M16 20l4 0l0 -4', 'M14 14l6 6', 'M8 4l-4 0l0 4', 'M4 4l6 6'],
  compress: ['M18 10h-4v-4', 'M14 10l6 -6', 'M6 14h4v4', 'M10 14l-6 6'],
  trash: ['M4 7l16 0', 'M10 11l0 6', 'M14 11l0 6', 'M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12', 'M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'],
  plus: ['M12 5l0 14', 'M5 12l14 0'],
  thumbUp: ['M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3'],
  thumbDown: ['M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3'],
  copy: ['M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z', 'M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'],
  check: ['M5 12l5 5l10 -10'],
  message: ['M8 9h8', 'M8 13h6', 'M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z'],
  chevron: ['M6 9l6 6l6 -6'],
  document: ['M14 3v4a1 1 0 0 0 1 1h4', 'M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z'],
  tool: ['M7 10h3v -3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5'],
  search: ['M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0', 'M21 21l-6 -6'],
  database: ['M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0', 'M4 6v6a8 3 0 0 0 16 0v-6', 'M4 12v6a8 3 0 0 0 16 0v-6'],
  alert: ['M12 9v4', 'M12 16v.01', 'M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75']
};

/**
 * Builds an inline SVG icon element by name. Unknown names yield an empty (but
 * valid) SVG so a missing key never throws in a view.
 *
 * @param {string} name The icon name (key of PATHS).
 * @param {object} [options] Icon options.
 * @param {number} [options.size=20] The pixel size of the square viewport.
 * @returns {SVGElement} The icon element.
 */
export function icon(name, { size = 20 } = {}) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', String(size));
  svg.setAttribute('height', String(size));
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('lc-icon');
  for (const d of PATHS[name] || []) {
    const path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', d);
    svg.appendChild(path);
  }
  return svg;
}
