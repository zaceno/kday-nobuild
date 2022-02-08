import { div, input, label, button, text } from "@hyperapp/html"

/**
 * @param {object} props
 * @param {string} props.itemText
 * @param {boolean} props.done
 * @param {import('@/actions.js').TodoHandler} props.Toggle
 * @param {import('@/actions.js').TodoHandler} props.Edit
 * @param {import('@/actions.js').TodoHandler} props.Delete
 */
export default ({ itemText, done, Toggle, Edit, Delete }) =>
  div({ class: "view" }, [
    input({
      class: "toggle",
      type: "checkbox",
      checked: done,
      oninput: Toggle,
    }),
    label({ ondblclick: Edit }, text(itemText)),
    button({ class: "destroy", onclick: Delete }),
  ])
