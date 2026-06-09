/**
 * Avatar helpers: strict logo validation and monogram fallback (SPEC §8).
 *
 * logoBase64 comes from the server and must be validated before becoming an
 * <img> src: only raster image data URLs are accepted, svg+xml is refused (it
 * can carry script). When no valid logo exists a coloured monogram is used.
 */

/** @type {RegExp} Strict raster image data-URL matcher (no svg+xml). */
const LOGO_RE = /^data:image\/(png|jpe?g|gif|webp);base64,[A-Za-z0-9+/=]+$/;

/**
 * Returns the logo data URL only if it passes the strict raster-image regex,
 * otherwise null. svg+xml and any non-matching value are rejected.
 *
 * @param {*} value The candidate logoBase64 value.
 * @returns {?string} The validated data URL, or null.
 */
export function validatedLogoSrc(value) {
  if (typeof value !== 'string' || value === '') {
    return null;
  }
  return LOGO_RE.test(value) ? value : null;
}

/**
 * Returns the uppercased first character of a name, or '?' when empty.
 *
 * @param {string} name The display name.
 * @returns {string} The monogram letter.
 */
export function initial(name) {
  const trimmed = (name || '').trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : '?';
}

/** @type {string[]} The palette used for monogram backgrounds. */
const PALETTE = ['#2563eb', '#7c3aed', '#db2777', '#ea580c', '#16a34a', '#0891b2', '#4f46e5', '#b91c1c'];

/**
 * Maps a name to a stable palette colour via a small string hash, so the same
 * name always renders the same monogram background.
 *
 * @param {string} name The display name.
 * @returns {string} A CSS hex colour from the palette.
 */
export function avatarColor(name) {
  let hash = 0;
  const str = name || '';
  for (let i = 0; i < str.length; i += 1) {
    hash = (hash * 31 + str.charCodeAt(i)) | 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}
