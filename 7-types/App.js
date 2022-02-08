import { main, h2, text } from "@hyperapp/html"
import Counter from "./Counter.js"

/**
 * @param {object} props
 * @param {import('./model.js').State} props.state
 */
export default ({ state }) =>
  main([h2(text("My Counter App")), Counter({ value: state.counter })])
