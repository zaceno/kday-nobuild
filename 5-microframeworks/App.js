import html from "html"
import Counter from "@/Counter.js"

export default ({ state, setState }) => html` <main>
  <h2>Counter Demo - 5. Microframeworks</h2>
  <${Counter}
    value=${state.counter}
    setValue=${counter =>
      setState({
        ...state,
        counter,
      })}
  />
</main>`
