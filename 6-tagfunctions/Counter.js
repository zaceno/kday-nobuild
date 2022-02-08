import { div, h1, button, text } from "@hyperapp/html"
import { CounterPlus, CounterMinus } from "./model.js"

export default ({ value }) =>
  div([
    h1(text(value)),
    button({ onclick: CounterMinus }, text("-")),
    button({ onclick: CounterPlus }, text("+")),
  ])
