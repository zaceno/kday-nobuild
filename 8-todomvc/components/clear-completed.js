import { button, text } from "html"
import { ClearDone } from "@/actions.js"

/**
 * @param {object} props
 * @param {boolean[]} props.done
 */
export default ({ done }) =>
  button(
    {
      class: "clear-completed",
      style: {
        display: done.filter(x => x).length === 0 ? "none" : "block",
      },
      onclick: ClearDone,
    },
    text("Clear completed")
  )
