/**
 * Markdown rendering, sanitization and code highlighting (SPEC §8).
 *
 * Single entry point sanitizeMarkdown = DOMPurify.sanitize(marked.parse(text)).
 * ALL untrusted content (LLM/RAG output, server fields) must go through it; any
 * dynamic value interpolated into a template literal must instead pass through
 * escapeHtml(). Highlight.js runs on a curated language subset (lib/core). Raw
 * code is associated to each rendered block through a WeakMap (renderInto), so a
 * Copy button can read it back without stashing oversized DOM attributes.
 */

import { marked } from 'marked';
import DOMPurify from 'dompurify';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import sql from 'highlight.js/lib/languages/sql';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('python', python);
hljs.registerLanguage('java', java);
hljs.registerLanguage('sql', sql);

/** @type {Record<string,string>} Aliases mapping fence labels to registered languages. */
const LANG_ALIASES = {
  js: 'javascript',
  ts: 'typescript',
  html: 'xml',
  sh: 'bash',
  shell: 'bash',
  py: 'python',
  yml: 'yaml'
};

/** @type {WeakMap<Element,string>} Raw code per rendered <code> block (for copy). */
const codeByBlock = new WeakMap();

const renderer = new marked.Renderer();

/**
 * Custom fenced-code renderer: highlights with the curated language set when the
 * language is known, otherwise auto-detects, and emits hljs markup. The raw code
 * is carried in a data attribute that DOMPurify keeps, so renderInto can move it
 * into the WeakMap after sanitization.
 *
 * @param {object} token The marked code token ({ text, lang }).
 * @returns {string} The HTML for the code block.
 */
renderer.code = ({ text, lang }) => {
  const requested = (lang || '').trim().toLowerCase();
  const resolved = LANG_ALIASES[requested] || requested;
  let highlighted;
  let languageClass;
  if (resolved && hljs.getLanguage(resolved)) {
    highlighted = hljs.highlight(text, { language: resolved }).value;
    languageClass = `language-${resolved}`;
  } else {
    const auto = hljs.highlightAuto(text);
    highlighted = auto.value;
    languageClass = auto.language ? `language-${auto.language}` : 'language-plaintext';
  }
  const encodedRaw = encodeURIComponent(text);
  return `<pre><code class="hljs ${languageClass}" data-raw-code="${encodedRaw}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer, breaks: false, gfm: true });

/** @type {object} DOMPurify config allowing the highlight data attribute. */
const PURIFY_CONFIG = { USE_PROFILES: { html: true }, ADD_ATTR: ['data-raw-code'] };

/**
 * Escapes the five HTML metacharacters of a value before interpolation into a
 * template literal. Non-string input is coerced; null/undefined become ''.
 *
 * @param {*} value The value to escape.
 * @returns {string} The escaped string.
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * The single sanitized markdown rendering entry point: parses markdown then runs
 * DOMPurify. Untrusted content must never reach innerHTML by any other path.
 *
 * @param {string} text The (untrusted) markdown source.
 * @returns {string} The sanitized HTML string.
 */
export function sanitizeMarkdown(text) {
  if (text === null || text === undefined || text === '') {
    return '';
  }
  return DOMPurify.sanitize(marked.parse(String(text)), PURIFY_CONFIG);
}

/**
 * Renders sanitized markdown into a target element and wires every code block's
 * raw text into the WeakMap (then removes the carrier attribute). This is the
 * DOM-side companion to sanitizeMarkdown used by the message view.
 *
 * @param {Element} element The target element to fill.
 * @param {string} text The (untrusted) markdown source.
 * @returns {void}
 */
export function renderInto(element, text) {
  element.innerHTML = sanitizeMarkdown(text);
  const blocks = element.querySelectorAll('code[data-raw-code]');
  for (const block of blocks) {
    const raw = block.getAttribute('data-raw-code');
    codeByBlock.set(block, decodeURIComponent(raw));
    block.removeAttribute('data-raw-code');
    addCopyButton(block);
  }
}

/**
 * Injects a "Copier" button into a code block's <pre>, wired to copy the raw
 * source (read back from the WeakMap) to the clipboard with a transient "Copié!"
 * confirmation. The button label is set via textContent only.
 *
 * @param {Element} block The rendered <code> element produced by renderInto.
 * @returns {void}
 */
function addCopyButton(block) {
  const pre = block.parentElement;
  if (!pre || pre.tagName !== 'PRE' || pre.querySelector('.lc-code-copy')) {
    return;
  }
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'lc-code-copy';
  button.setAttribute('aria-label', 'Copier le code');
  button.textContent = 'Copier';
  button.addEventListener('click', async () => {
    const code = getCodeForBlock(block);
    if (code === null) {
      return;
    }
    try {
      await navigator.clipboard.writeText(code);
      button.textContent = 'Copié!';
    } catch {
      button.textContent = 'Échec';
    }
    setTimeout(() => {
      button.textContent = 'Copier';
    }, 1500);
  });
  pre.appendChild(button);
}

/**
 * Returns the raw source code associated with a rendered code block, or null if
 * the block was not produced by renderInto.
 *
 * @param {Element} block The rendered <code> element.
 * @returns {?string} The raw code, or null.
 */
export function getCodeForBlock(block) {
  return codeByBlock.has(block) ? codeByBlock.get(block) : null;
}
