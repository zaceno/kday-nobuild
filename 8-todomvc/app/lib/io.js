/** @typedef {{selector: string}} FocuserProps */

/**
 * @param {any} _
 * @param {FocuserProps} options
 */
const _focuser = (_, options) => {
  requestAnimationFrame(_ => {
    /** @type {HTMLInputElement | null} */
    let elem = document.querySelector(options.selector)
    if (elem) elem.focus()
  })
}

/**
 * @param {string} selector
 */
export const focuser = selector =>
  /** @type {const}*/ ([_focuser, { selector }])

/**
 * @template S, X
 * @typedef DispatcherProps
 * @prop {Dispatchable<S,X>} action
 * @prop {X} payload
 */

/**
 * @template S, X
 * @param {Dispatch<S>} dispatch
 * @param {DispatcherProps<S, X>} options
 */
const _dispatcher = (dispatch, options) => {
  dispatch(options.action, options.payload)
}

/**
 * @template S, X
 * @param {DispatcherProps<S,X>['action']} action,
 * @param {DispatcherProps<S,X>['payload']} payload,
 */
export const dispatcher = (action, payload) =>
  /** @type {const}*/ ([_dispatcher, { action, payload }])

/** @template S @typedef {{action:Action<S, string>}} OnHashChangeProps */

/**
 * @template S
 * @param {Dispatch<S>} dispatch
 * @param {OnHashChangeProps<S>} options
 */
const _onhashchange = (dispatch, options) => {
  const handler = () => dispatch(options.action, location.hash)
  addEventListener("hashchange", handler)
  requestAnimationFrame(handler)
  return () => removeEventListener("hashchange", handler)
}

/**
 * @template S
 * @param {OnHashChangeProps<S>['action']} action
 */
export const onhashchange = action =>
  /** @type {const}*/ ([_onhashchange, { action }])

/**
 * @template S,X
 * @typedef PersisterProps
 * @prop {string} key
 * @prop {X} data
 * @prop {Action<S,X>} Load
 */

/**
 * Singleton registry of persisters
 * to keep track of which ones have already
 * loaded their data from local storage
 * and which ones have yet to do so
 *
 * @type {Record<string, boolean>}
 */
const persisterDidRun = {}

/**
 * @template S,X
 * @param {Dispatch<S>} dispatch
 * @param {PersisterProps<S,X>} options
 */
export const _persister = (dispatch, options) => {
  if (!persisterDidRun[options.key]) {
    persisterDidRun[options.key] = true
    const json = localStorage.getItem(options.key)
    if (!!json) {
      let data = /** @type {X}*/ (JSON.parse(json))
      requestAnimationFrame(() => {
        dispatch(options.Load, data)
      })
    }
  } else {
    localStorage.setItem(options.key, JSON.stringify(options.data))
  }
  return () => {}
}

/**
 * @template S, X
 * @param {PersisterProps<S,X>} options
 */
export const persister = options => /** @type {const}*/ ([_persister, options])
