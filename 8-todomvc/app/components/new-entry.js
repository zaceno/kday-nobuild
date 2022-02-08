import { input } from "@hyperapp/html"
import { withTargetValue, withEnterKey } from "@/lib/decorators.js"
import { InputNewItem, AddItem } from "@/actions.js"

/**
 * @param {object} props
 * @param {string} props.value
 */
export default ({ value }) =>
  input({
    type: "text",
    class: "new-todo",
    value,
    placeholder: "What needs to be done?",
    oninput: withTargetValue(InputNewItem),
    onblur: AddItem,
    onkeypress: withEnterKey(AddItem),
  })
