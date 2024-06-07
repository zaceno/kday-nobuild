import { div, input, label, button, text } from "html"

/** @typedef {import('@/actions.js').TodoHandler} TodoHandler */

/**
 * @param {object} props
 * @param {string} props.itemText
 * @param {boolean} props.done
 * @param {TodoHandler} props.Toggle
 * @param {TodoHandler} props.Edit
 * @param {TodoHandler} props.Delete
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
