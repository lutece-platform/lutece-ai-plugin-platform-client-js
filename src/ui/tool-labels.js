/**
 * French labels and icons for builtin agent tools (FEATURES "message streamé").
 *
 * Maps the contract toolName values to a human label and an icon name. Unknown
 * tools fall back to a generic label so the notification still renders.
 */

import { icon } from './icons.js';

/** @type {Record<string,{label:string, icon:string}>} Tool descriptors. */
const TOOLS = {
  grep: { label: 'Recherche par motif', icon: 'search' },
  searchInDataset: { label: 'Recherche sémantique', icon: 'search' },
  searchInDocument: { label: 'Recherche dans le document', icon: 'search' },
  listFolders: { label: 'Lister les dossiers', icon: 'database' },
  findFolders: { label: 'Rechercher des dossiers', icon: 'database' },
  listDocuments: { label: 'Lister les documents', icon: 'document' },
  findDocuments: { label: 'Rechercher des documents', icon: 'document' },
  readDocument: { label: 'Lire un document', icon: 'document' }
};

/**
 * Returns the display label for a tool name, defaulting to the raw name.
 *
 * @param {string} toolName The contract tool name.
 * @returns {string} The French label.
 */
export function toolLabel(toolName) {
  return (TOOLS[toolName] && TOOLS[toolName].label) || toolName || 'Outil';
}

/**
 * Returns a fresh icon node for a tool name, defaulting to the generic tool icon.
 *
 * @param {string} toolName The contract tool name.
 * @returns {SVGElement} The icon element.
 */
export function toolIcon(toolName) {
  return icon((TOOLS[toolName] && TOOLS[toolName].icon) || 'tool', { size: 16 });
}
