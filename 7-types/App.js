import { main, h2, text } from "html"
import Counter from "@/Counter.js"

/**
 * @param {object} props
 * @param {import('./model.js').State} props.state
 */
export default ({ state }) =>
  main([
    h2(text("Counter Demo - 7. Types")),
    Counter({ value: state.counter })
  ])
