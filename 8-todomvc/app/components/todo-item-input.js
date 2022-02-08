import { input } from "@hyperapp/html"
import { withTargetValue, withEnterKey } from "@/lib/decorators.js"
import { InputEditing, StopEditing } from "@/actions.js"

/** @param {{itemText:string}} props*/
export default ({ itemText }) =>
  input({
    type: "text",
    class: "edit",
    value: itemText,
    oninput: withTargetValue(InputEditing),
    onblur: StopEditing,
    onkeypress: withEnterKey(StopEditing),
  })
