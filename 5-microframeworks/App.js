import html from "html"
import Counter from "./Counter.js"

export default ({ state, setState }) => html` <main>
  <h2>My Counter App</h2>
  <${Counter}
    value=${state.counter}
    setValue=${counter =>
      setState({
        ...state,
        counter,
      })}
  />
</main>`
