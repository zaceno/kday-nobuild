import { persister, onhashchange } from "@/lib/io.js"
import { LoadTodos, SetFilter } from "@/actions.js"

/** @typedef {import('@/actions.js').State} State*/

/** @param {State} state*/
const persistItems = ({ items, done }) =>
  persister({
    key: "list-items",
    Load: LoadTodos,
    data: { items, done },
  })

/**@type {Action<State, string>}*/
const OnHashChange = (_, hash) => [
  SetFilter,
  hash === "#completed" ? "completed" : hash === "#active" ? "active" : "all",
]

/**
 * @param {State} state
 * @returns {Subscription<State, any>[]}
 */
export default state => [persistItems(state), onhashchange(OnHashChange)]
