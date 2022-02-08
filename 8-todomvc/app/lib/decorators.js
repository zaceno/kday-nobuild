import { focuser, dispatcher } from "./io.js"

/**
 * @template S,X
 * @param {Dispatchable<S, X>} action
 * @param {Effect<S, any>[]} effects
 * @returns {Action<S, any>}
 */
export const withEffects =
  (action, ...effects) =>
  (state, payload) =>
    [state, dispatcher(action, payload), ...effects]

/**
 * @template S,X
 * @param {Dispatchable<S, X>} action
 * @param {string} selector
 */
export const withFocus = (action, selector) =>
  withEffects(action, focuser(selector))

/**
 * @template S
 * @param {Action<S, KeyboardEvent>} action
 * @returns {Action<S, KeyboardEvent>}
 */
export const withEnterKey = action => (state, payload) => {
  if (payload.key && payload.key === "Enter") return [action, payload]
  return state
}

/**
 * @template S
 * @param {Action<S, string>} action
 * @returns {Action<S, Event>}
 */
export const withTargetValue = action => (state, payload) => {
  let target = /** @type {HTMLInputElement}*/ (payload.target)
  return target ? [action, target.value] : state
}
