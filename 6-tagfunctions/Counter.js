import { div, h1, button, text } from "html"

export default (value) =>
  div([
    h1(text(value)),
    button({ onclick: value - 1 }, text("-")),
    button({ onclick: value + 1 }, text("+")),
  ])
