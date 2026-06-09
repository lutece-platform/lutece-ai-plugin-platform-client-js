/**
 * Generic SSE consumer over fetch + ReadableStream (SPEC §5, §7).
 *
 * The stream is the body of a single POST (the response IS the event stream,
 * like the OpenAI/Anthropic APIs). EventSource is deliberately NOT used: it is
 * GET-only and auto-reconnects, whereas a chat turn is one-shot and is cancelled
 * by aborting the fetch. This
 * consumer validates response.ok and the Content-Type before parsing, decodes
 * with TextDecoder({stream:true}) so multibyte UTF-8 split across chunks is
 * reassembled, splits frames manually on blank lines, invokes a (name, data)
 * callback per event, stops on the first terminal event and treats AbortError
 * as a silent, intentional stop. There is ZERO reconnection.
 */

/** @type {Set<string>} Event names that close the stream. */
const TERMINAL_EVENTS = new Set([
  'BOT_STREAM_COMPLETED',
  'BOT_STREAM_ERROR',
  'error'
]);

/** @type {number} Default inactivity timeout (ms) before a stalled stream is aborted. */
const DEFAULT_STREAM_TIMEOUT = 30000;

/**
 * Tells whether an SSE event name is terminal (closes the stream).
 *
 * @param {string} name The SSE event name.
 * @returns {boolean} True if the event ends the stream.
 */
export function isTerminalEvent(name) {
  return TERMINAL_EVENTS.has(name);
}

/**
 * Parses one raw SSE frame (the text between two blank-line boundaries) into a
 * { name, data } object. Honours multi `data:` lines (joined with newlines),
 * the single-leading-space stripping rule, ":" comment lines and CRLF endings.
 * Returns null for a blank frame or when the JSON data cannot be parsed.
 *
 * @param {string} frame The raw frame text.
 * @returns {?{name:string, data:object}} The parsed event, or null.
 */
export function parseSseFrame(frame) {
  const lines = frame.split('\n');
  let name = '';
  const dataLines = [];
  for (const rawLine of lines) {
    const line = rawLine.replace(/\r$/, '');
    if (line === '' || line.startsWith(':')) {
      continue;
    }
    const colon = line.indexOf(':');
    const field = colon === -1 ? line : line.slice(0, colon);
    let value = colon === -1 ? '' : line.slice(colon + 1);
    if (value.startsWith(' ')) {
      value = value.slice(1);
    }
    if (field === 'event') {
      name = value;
    } else if (field === 'data') {
      dataLines.push(value);
    }
  }
  if (dataLines.length === 0) {
    return null;
  }
  let data;
  try {
    data = JSON.parse(dataLines.join('\n'));
  } catch {
    return null;
  }
  return { name: name || 'message', data };
}

/**
 * Validates that a response is a usable SSE stream: 2xx status and a
 * text/event-stream Content-Type. Throws otherwise (the GET events endpoint can
 * answer 401/429 or an HTML error page before the first frame).
 *
 * @param {Response} response The fetch response.
 * @returns {void}
 */
function assertSseResponse(response) {
  if (!response.ok) {
    throw new Error(`SSE response not ok: ${response.status}`);
  }
  const contentType = response.headers.get('Content-Type') || '';
  if (!contentType.toLowerCase().includes('text/event-stream')) {
    throw new Error(`SSE response is not an event-stream (Content-Type: ${contentType || 'none'})`);
  }
}

/**
 * Consumes an SSE response stream, emitting each parsed event through onEvent
 * and stopping at the first terminal event (also reported via onTerminal). Reads
 * the body via a reader, decodes incrementally, buffers across chunk boundaries
 * and splits frames on blank lines. An AbortError (from the optional signal) is
 * swallowed so a voluntary stop never surfaces as an error.
 *
 * @param {object} params Consumer params.
 * @param {Response} params.response The SSE fetch response.
 * @param {(name:string, data:object)=>void} params.onEvent Per-event callback.
 * @param {(name:string, data:object)=>void} [params.onTerminal] Terminal-event callback.
 * @param {AbortSignal} [params.signal] Signal to stop reading early.
 * @param {number} [params.timeout] Inactivity timeout (ms) before a stalled stream is aborted (default 30000); 0 disables it.
 * @returns {Promise<void>} Resolves when the stream ends, terminates or aborts.
 */
export async function consumeSse({ response, onEvent, onTerminal, signal, timeout = DEFAULT_STREAM_TIMEOUT }) {
  assertSseResponse(response);
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let timedOut = false;
  let timer = 0;

  /**
   * (Re)arms the inactivity timer: when no chunk/event has arrived within the
   * timeout window, the reader is cancelled so the pending read rejects and the
   * stream is surfaced as a synthetic BOT_STREAM_ERROR terminal.
   *
   * @returns {void}
   */
  function arm() {
    if (!timeout || timeout <= 0) {
      return;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timedOut = true;
      cancelReader(reader);
    }, timeout);
  }

  /**
   * Clears the inactivity timer (teardown).
   *
   * @returns {void}
   */
  function disarm() {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
  }

  /**
   * Surfaces an expired stream as a synthetic BOT_STREAM_ERROR, routed through
   * both the per-event and terminal callbacks so the view renders it inline like
   * a server-sent error.
   *
   * @returns {void}
   */
  function emitTimeout() {
    const data = { errorMessage: 'Le flux a expiré (aucune réponse du serveur).' };
    onEvent('BOT_STREAM_ERROR', data);
    if (onTerminal) {
      onTerminal('BOT_STREAM_ERROR', data);
    }
  }

  arm();
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (timedOut) {
        emitTimeout();
        return;
      }
      if (done) {
        buffer += decoder.decode();
        if (dispatchFrames(flushTail(buffer), onEvent, onTerminal)) {
          return;
        }
        break;
      }
      if (signal && signal.aborted) {
        await cancelReader(reader);
        return;
      }
      arm();
      buffer += decoder.decode(value, { stream: true });
      const boundary = lastFrameBoundary(buffer);
      const ready = buffer.slice(0, boundary.consumed);
      buffer = buffer.slice(boundary.consumed);
      if (dispatchFrames(splitFrames(ready), onEvent, onTerminal)) {
        await cancelReader(reader);
        return;
      }
    }
  } catch (error) {
    if (timedOut) {
      emitTimeout();
      return;
    }
    if (isAbort(error) || (signal && signal.aborted)) {
      return;
    }
    throw error;
  } finally {
    disarm();
  }
}

/**
 * Tells whether an error is an abort (intentional stop), to be swallowed.
 *
 * @param {*} error The caught error.
 * @returns {boolean} True for an AbortError.
 */
function isAbort(error) {
  return error && error.name === 'AbortError';
}

/**
 * Cancels a stream reader, ignoring any rejection from the cancel itself.
 *
 * @param {ReadableStreamDefaultReader} reader The active reader.
 * @returns {Promise<void>} Always resolves.
 */
async function cancelReader(reader) {
  try {
    await reader.cancel();
  } catch {
    /* reader already closed */
  }
}

/**
 * Finds how many characters of the buffer end on a complete frame boundary
 * (the position right after the last blank line), leaving any partial frame in
 * the buffer for the next chunk.
 *
 * @param {string} buffer The accumulated decoded text.
 * @returns {{consumed:number}} The number of characters safe to dispatch.
 */
function lastFrameBoundary(buffer) {
  const lastLf = buffer.lastIndexOf('\n\n');
  const lastCrlf = buffer.lastIndexOf('\r\n\r\n');
  const idx = Math.max(lastLf, lastCrlf);
  if (idx === -1) {
    return { consumed: 0 };
  }
  const sepLen = idx === lastCrlf && lastCrlf >= lastLf ? 4 : 2;
  return { consumed: idx + sepLen };
}

/**
 * Splits a complete (boundary-aligned) text into raw frames on blank lines.
 *
 * @param {string} text The boundary-aligned text.
 * @returns {string[]} The raw frames (blank fragments removed).
 */
function splitFrames(text) {
  if (!text) {
    return [];
  }
  return text.split(/\r\n\r\n|\n\n/).filter((f) => f.trim() !== '');
}

/**
 * Returns the remaining buffer as a single frame list at stream end (the tail
 * may be a final frame without a trailing blank line).
 *
 * @param {string} buffer The leftover buffer.
 * @returns {string[]} The tail frames.
 */
function flushTail(buffer) {
  return splitFrames(buffer);
}

/**
 * Dispatches a list of raw frames: parses each, forwards to onEvent and, on the
 * first terminal event, fires onTerminal and signals the caller to stop.
 *
 * @param {string[]} frames The raw frames to dispatch.
 * @param {(name:string, data:object)=>void} onEvent Per-event callback.
 * @param {(name:string, data:object)=>void} [onTerminal] Terminal callback.
 * @returns {boolean} True when a terminal event was dispatched.
 */
function dispatchFrames(frames, onEvent, onTerminal) {
  for (const raw of frames) {
    const event = parseSseFrame(raw);
    if (!event) {
      continue;
    }
    onEvent(event.name, event.data);
    if (isTerminalEvent(event.name)) {
      if (onTerminal) {
        onTerminal(event.name, event.data);
      }
      return true;
    }
  }
  return false;
}
