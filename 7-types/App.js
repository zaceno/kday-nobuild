import { main, h2, text } from "html"
import Counter from "@/Counter.js"

/** 
 * @typedef State
 * @prop {number} counter
 */

/** @type {import('hyperapp').Action<State, number>} */
const setCounter = (state, counter) => ({...state, counter})

/**
 * @param {State} state
 */
export default (state) =>
  main([
    h2(text("Counter Demo - 7. Types")),
    Counter({ value: state.counter, setValue: setCounter })
  ])
