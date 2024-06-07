import { div, h1, button, text } from "html"

export default ({value, setValue}) => 
  div([
    h1(text(value)),
    button({ onclick: [setValue, value - 1] }, text("-")),
    button({ onclick: [setValue, value + 1] }, text("+")),
  ])
