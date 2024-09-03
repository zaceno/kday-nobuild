import { div, h1, button, text } from "html"

/**
 * @param {object} props
 * @param {number} props.value -- value of counter
 * @param {import('hyperapp').Action<any, number>} props.setValue -- action to set value
 */
export default ({ value, setValue }) =>
  div([
    h1(text(value)),
    button({ onclick: [setValue, value - 1] }, text("-")),
    button({ onclick: [setValue, value + 1] }, text("+")),
  ])
