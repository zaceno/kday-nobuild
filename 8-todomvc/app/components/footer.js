import { footer } from "@hyperapp/html"
import todoCount from "./todo-count.js"
import filterMenu from "./filter-menu.js"
import clearCompleted from "./clear-completed.js"

/**
 * @param {object} props
 * @param {boolean[]} props.done
 * @param {import('./filter-menu.js').Filter} props.filter
 */
export default ({ done, filter }) =>
  footer({ class: "footer" }, [
    todoCount({ done }),
    filterMenu({ current: filter }),
    clearCompleted({ done: done }),
  ])
