import { header, h1, text } from "@hyperapp/html"
import newEntry from "./new-entry.js"

/**
 * @param {object} props
 * @param {string} props.newItem
 */
export default ({ newItem }) =>
  header({ class: "header" }, [h1(text("todos")), newEntry({ value: newItem })])
