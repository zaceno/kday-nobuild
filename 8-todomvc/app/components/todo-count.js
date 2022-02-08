import { span, text } from "@hyperapp/html"

/**
 * @param {object} props
 * @param {boolean[]} props.done
 */
export default ({ done }) =>
  span(
    { class: "todo-count" },
    text(done.filter(x => !x).length + " items left")
  )
