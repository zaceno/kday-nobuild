/**
 * Global state type definition
 *
 * @typedef State
 * @prop {number} counter – the value of a counter
 * @prop {string} name – some name or whatever
 */

/** @type {Action<State, any>}*/
export const Init = () => ({ counter: 5, name: "joe" })

/** @type {Action<State, any>}*/
export const CounterPlus = state => ({
  ...state,
  counter: state.counter + 1,
})

/** @type {Action<State, any>}*/
export const CounterMinus = state => ({
  ...state,
  counter: state.counter - 1,
})
