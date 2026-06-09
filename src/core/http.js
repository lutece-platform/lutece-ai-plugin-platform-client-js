/**
 * Fetch layer for the platform agent REST API (SPEC §6).
 *
 * The widget is session-only (same-origin cookie auth): no API key, no
 * X-Client-Code header, no userId in bodies. The base path is configurable
 * (the admin family of endpoints today, the agentclient plugin tomorrow) and
 * defaults to the admin base. This layer centralises the base/origin join, the
 * {result, status:"OK"} envelope unwrapping and the typed mapping of HTTP error
 * codes. It never calls response.json() blindly: a non-JSON error body (429/500
 * without a JSON payload) is wrapped, never thrown as a parse crash.
 */

/** @type {string} Default base path (admin/session family of endpoints). */
export const DEFAULT_BASE = 'rest/platform/agent/admin';

/**
 * Maps an HTTP status code to a stable, typed application error code.
 *
 * @param {number} status The HTTP status code of the response.
 * @returns {string} A stable error code consumed by the UI layer.
 */
export function codeForStatus(status) {
  switch (status) {
    case 400:
      return 'BAD_REQUEST';
    case 401:
      return 'UNAUTHORIZED';
    case 403:
      return 'FORBIDDEN';
    case 404:
      return 'NOT_FOUND';
    case 405:
      return 'METHOD_NOT_ALLOWED';
    case 429:
      return 'RATE_LIMITED';
    default:
      return 'SERVER_ERROR';
  }
}

/**
 * Typed error carrying the HTTP status, a stable application code and the
 * server-provided human message (the {message} envelope field, with the stable
 * errorCode as a fallback).
 */
export class HttpError extends Error {
  /**
   * Builds a typed HTTP error.
   *
   * @param {number} status The HTTP status code.
   * @param {string} code The stable application error code.
   * @param {string} message The human-readable message for the user.
   */
  constructor(status, code, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.code = code;
  }
}

/**
 * Thin HTTP client bound to one configurable base path. All endpoint helpers in
 * core/api.js go through this single class so auth (the session cookie) and
 * error handling live in exactly one place.
 */
export class HttpClient {
  /**
   * Creates a session-only client.
   *
   * @param {object} [options] Construction options.
   * @param {string} [options.base] Base path before the endpoint (defaults to the admin base).
   * @param {string} [options.origin] Optional origin/prefix prepended before the base path.
   */
  constructor({ base, origin } = {}) {
    this.base = base || DEFAULT_BASE;
    this.origin = origin || '';
  }

  /**
   * Builds the absolute request URL from the base and a relative path,
   * collapsing any duplicate slash at the join.
   *
   * @param {string} path The endpoint path relative to the base.
   * @returns {string} The resolved request URL.
   */
  resolve(path) {
    const base = String(this.base).replace(/^\/+|\/+$/g, '');
    const cleanPath = String(path).replace(/^\/+/, '');
    const cleanOrigin = this.origin.replace(/\/+$/, '');
    const prefix = cleanOrigin ? `${cleanOrigin}/` : '';
    return `${prefix}${base}/${cleanPath}`;
  }

  /**
   * Builds the request headers, adding Content-Type only when a body is sent.
   *
   * @param {boolean} hasBody Whether a JSON body is sent.
   * @returns {Record<string,string>} The header map.
   */
  headers(hasBody) {
    const headers = { Accept: 'application/json' };
    if (hasBody) {
      headers['Content-Type'] = 'application/json';
    }
    return headers;
  }

  /**
   * Performs a GET request and returns the unwrapped result payload.
   *
   * @param {string} path The endpoint path relative to the base.
   * @returns {Promise<*>} The unwrapped result.
   */
  get(path) {
    return this.request('GET', path);
  }

  /**
   * Performs a POST request with a JSON body and returns the unwrapped result.
   *
   * @param {string} path The endpoint path relative to the base.
   * @param {object} [body] The JSON body.
   * @returns {Promise<*>} The unwrapped result.
   */
  post(path, body) {
    return this.request('POST', path, body);
  }

  /**
   * Performs a DELETE request and returns the unwrapped result payload.
   *
   * @param {string} path The endpoint path relative to the base.
   * @returns {Promise<*>} The unwrapped result.
   */
  delete(path) {
    return this.request('DELETE', path);
  }

  /**
   * Opens a streaming POST: sends a JSON body with an event-stream Accept and
   * returns the raw Response (body left unread) so the caller can consume the
   * SSE stream directly off the response. Auth is the same-origin session
   * cookie. This is the single-call streaming surface (no init/streamId/events
   * split): the response body IS the event stream.
   *
   * @param {string} path The endpoint path relative to the base.
   * @param {object} body The JSON body.
   * @param {object} [extra] Extra fetch options (e.g. { signal }).
   * @returns {Promise<Response>} The raw streaming response.
   */
  postStream(path, body, extra = {}) {
    return fetch(this.resolve(path), {
      method: 'POST',
      headers: { Accept: 'text/event-stream', 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      credentials: 'same-origin',
      ...extra
    });
  }

  /**
   * Core request: builds URL + headers, sends with same-origin credentials, then
   * unwraps the envelope and maps any failure to a typed HttpError. Reads the
   * body as text first and parses defensively so a non-JSON error body never
   * throws a parse crash.
   *
   * @param {string} method The HTTP method.
   * @param {string} path The endpoint path relative to the base.
   * @param {object} [body] Optional JSON body for write methods.
   * @param {object} [extra] Extra fetch options (e.g. { signal }).
   * @returns {Promise<*>} The unwrapped result payload.
   */
  async request(method, path, body, extra = {}) {
    const hasBody = body !== undefined && body !== null;
    const response = await fetch(this.resolve(path), {
      method,
      headers: this.headers(hasBody),
      body: hasBody ? JSON.stringify(body) : undefined,
      credentials: 'same-origin',
      ...extra
    });
    const text = await response.text();
    const parsed = this.parseBody(text);
    if (!response.ok) {
      throw this.toError(response.status, parsed);
    }
    if (parsed && parsed.status === 'ERROR') {
      throw this.toError(response.status || 500, parsed);
    }
    return parsed && Object.prototype.hasOwnProperty.call(parsed, 'result')
      ? parsed.result
      : parsed;
  }

  /**
   * Parses a raw response body as JSON, returning null on empty bodies and a
   * { _raw } wrapper when the body is present but not valid JSON.
   *
   * @param {string} text The raw response body.
   * @returns {*} The parsed JSON, null, or a { _raw } wrapper.
   */
  parseBody(text) {
    if (!text) {
      return null;
    }
    try {
      return JSON.parse(text);
    } catch {
      return { _raw: text };
    }
  }

  /**
   * Builds a typed HttpError from a status and a (possibly non-JSON) body,
   * preferring the server-filled human message, then the stable errorCode.
   *
   * @param {number} status The HTTP status code.
   * @param {*} parsed The parsed body (envelope, { _raw } wrapper, or null).
   * @returns {HttpError} The typed error.
   */
  toError(status, parsed) {
    const code = codeForStatus(status);
    let message = '';
    if (parsed && typeof parsed === 'object') {
      message = parsed.message || parsed.errorCode || parsed._raw || '';
    }
    return new HttpError(status, code, message || `HTTP ${status}`);
  }
}
