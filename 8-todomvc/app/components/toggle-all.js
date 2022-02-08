import { div, input, label, text } from "@hyperapp/html"
import { SetAllDone } from "@/actions.js"

/**
 * @param {object} props
 * @param {boolean[]} props.done
 */
export default ({ done }) => {
  const allDone = done.filter(x => !x).length === 0
  const hidden = done.length === 0
  return div([
    input({
      type: "checkbox",
      class: "toggle-all",
      id: "toggle-all",
      style: { visibility: hidden ? "visible" : "hidden" },
      checked: allDone,
      oninput: [SetAllDone, !allDone],
    }),
    label(
      { for: "toggle-all" },
      text(allDone ? "Mark all as incomplete" : "Mark all as complete")
    ),
  ])
}
