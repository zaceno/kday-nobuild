import { useState } from "https://cdn.skypack.dev/react@17.0.1"
import html from './html.js'

export default () => {
  const [state, setState] = useState(5)
  return html`
  <div>
    <h1>${state}</h1>
    <button onClick=${() => setState(state - 1)}>-</button>
    <button onClick=${() => setState(state + 1)}>+</button>
  </div>`
}
