import { ul, li } from "@hyperapp/html"
import todoItemView from "./todo-item-view.js"
import todoItemInput from "./todo-item-input.js"
import { ToggleDone, StartEditing, DeleteItem } from "@/actions.js"
import { withFocus } from "@/lib/decorators.js"

/**
 * @param {object} props
 * @param {string[]} props.items
 * @param {boolean[]} props.done
 * @param {'completed' | 'active' | 'all'} props.filter
 * @param {number | null} props.editing
 */
export default ({ items, done, filter, editing }) =>
  ul(
    { class: "todo-list" },
    items.map((itemText, index) =>
      li(
        {
          class: {
            editing: editing === index,
            completed: done[index],
          },
          hidden:
            (filter === "completed" && !done[index]) ||
            (filter === "active" && done[index]),
        },
        [
          todoItemView({
            done: done[index],
            itemText,
            Toggle: [ToggleDone, index],
            Edit: withFocus([StartEditing, index], ".edit"),
            Delete: [DeleteItem, index],
          }),
          editing === index && todoItemInput({ itemText }),
        ]
      )
    )
  )
