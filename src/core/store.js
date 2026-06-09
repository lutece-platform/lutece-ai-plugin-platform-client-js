/**
 * Minimal pub/sub store and UI state constants (SPEC §12).
 *
 * The store holds a flat object, merges patches on set, notifies subscribers
 * with a frozen snapshot only when the state actually changes, and returns an
 * unsubscribe function. No generic over-engineered state machine: a single
 * `state` field plus the explicit transition constants below is enough (KISS).
 */

/** @type {Readonly<Record<string,string>>} Gallery/chat UI states. */
export const UI_STATE = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  READY: 'ready',
  ERROR: 'error'
});

/** @type {Readonly<Record<string,string>>} Per-stream states. */
export const STREAM_STATE = Object.freeze({
  WAITING_FIRST_TOKEN: 'waiting-first-token',
  STREAMING: 'streaming',
  DONE: 'done',
  ERROR: 'error',
  RATE_LIMITED: 'rate-limited'
});

/**
 * Tells whether two flat values are equal for the purpose of change detection
 * (shallow reference equality, which suits primitives and replaced objects).
 *
 * @param {*} a First value.
 * @param {*} b Second value.
 * @returns {boolean} True when considered equal.
 */
function sameValue(a, b) {
  return Object.is(a, b);
}

/**
 * Pub/sub store over a flat state object.
 */
export class Store {
  /**
   * Builds the store with an initial state.
   *
   * @param {object} [initial] The initial flat state.
   */
  constructor(initial = {}) {
    this.state = Object.freeze({ ...initial });
    this.listeners = new Set();
  }

  /**
   * Returns the current frozen state snapshot.
   *
   * @returns {Readonly<object>} The current state.
   */
  get() {
    return this.state;
  }

  /**
   * Merges a patch into the state and notifies subscribers when at least one
   * key actually changed (shallow comparison). No-op patches do not notify.
   *
   * @param {object} patch The partial state to merge.
   * @returns {void}
   */
  set(patch) {
    let changed = false;
    for (const key of Object.keys(patch)) {
      if (!sameValue(this.state[key], patch[key])) {
        changed = true;
        break;
      }
    }
    if (!changed) {
      return;
    }
    this.state = Object.freeze({ ...this.state, ...patch });
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  /**
   * Subscribes a listener to state changes.
   *
   * @param {(state:Readonly<object>)=>void} listener The change callback.
   * @returns {()=>void} An unsubscribe function.
   */
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
}
