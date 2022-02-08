import { div, h1, button, text } from "@hyperapp/html"
import { CounterPlus, CounterMinus } from "./model.js"

/**
 * @param {object} props
 * @param {number} props.value
 */
export default ({ value }) =>
  div([
    h1(text(value)),
    button({ onclick: CounterMinus }, text("-")),
    button({ onclick: CounterPlus }, text("+")),
  ])
