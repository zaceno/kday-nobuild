import { focuser } from "./lib/io.js"

/**
 * Global state type definingion
 * @typedef State
 * @property {null | number} editing - Which item is currently being edited
 * @property {string[]} items - the list of todo item texts
 * @property {boolean[]} done - the done state of corresponding todo items
 * @property {'all' | 'completed' | 'active'} filter - the filter that should be applied to todos showed
 * @property {string} newItem – the current entry into the new todo input
 */

/** @template X @typedef {Action<State, X>} TodoAction */
/** @template [X=any] @typedef {TodoAction<X> | [TodoAction<any>, any]} TodoHandler */

/** @type {TodoAction<void>} */
export const Init = () => [
  /** @type {State}*/ ({
    newItem: "",
    items: [],
    done: [],
    editing: null,
    filter: "all",
  }),
  focuser(".new-todo"),
]

/** @type {TodoAction<string>}*/
export const InputNewItem = (state, newItem) => ({ ...state, newItem })

/** @type {TodoAction<any>}*/
export const AddItem = state =>
  !state.newItem
    ? state
    : {
        ...state,
        newItem: "",
        items: [state.newItem, ...state.items],
        done: [false, ...state.done],
      }

/** @type {TodoAction<State['filter']>}*/
export const SetFilter = (state, filter) => ({ ...state, filter })

/** @type {TodoAction<number>}*/
export const ToggleDone = (state, index) => {
  let done = [...state.done]
  done[index] = !done[index]
  return { ...state, done }
}

/** @type {TodoAction<number>}*/
export const DeleteItem = (state, index) => {
  let items = [...state.items]
  let done = [...state.done]
  items.splice(index, 1)
  done.splice(index, 1)
  return { ...state, items, done }
}

/** @type {TodoAction<number>}*/
export const StartEditing = (state, editing) => ({
  ...state,
  editing,
})

/** @type {TodoAction<any>}*/
export const StopEditing = state => ({
  ...state,
  editing: null,
})

/** @type {TodoAction<string>}*/
export const InputEditing = (state, input) => {
  if (state.editing === null) return state
  let items = [...state.items]
  items[state.editing] = input
  return { ...state, items }
}

/** @type {TodoAction<boolean>}*/
export const SetAllDone = (state, done) => ({
  ...state,
  done: state.done.map(_ => done),
})

/** @type {TodoAction<any>}*/
export const ClearDone = state => {
  let done = state.done.filter(done => !done)
  let items = state.items.filter((_, index) => !state.done[index])
  return { ...state, items, done }
}

/** @type {TodoAction<{items: string[], done: boolean[]}>} */
export const LoadTodos = (state, { items, done }) => ({ ...state, items, done })
