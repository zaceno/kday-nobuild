import { div, h1, button, text } from "html"

/**
 * @template S -- State type of app using component
 * @param {object} props
 * @param {number} props.value -- value of counter
 * @param {import('hyperapp').Action<S, number>} props.setValue -- action to set value
 */
export default ({ value, setValue }) =>
  div([
    h1(text(value)),
    button({ onclick: [setValue, value - 1] }, text("-")),
    button({ onclick: [setValue, value + 1] }, text("+")),
  ])
