import { useState } from "react"
import html from "html"

export default () => {
  const [state, setState] = useState(5)
  return html` <div>
    <h1>${state}</h1>
    <button onClick=${() => setState(state - 1)}>-</button>
    <button onClick=${() => setState(state + 1)}>+</button>
  </div>`
}
