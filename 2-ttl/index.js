import { useState } from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"
import React from "https://cdn.skypack.dev/react"
import htm from "https://cdn.skypack.dev/htm"
const html = htm.bind(React.createElement)

const Counter = () => {
  const [state, setState] = useState(5)
  return html`<div>
    <h1>${state}</h1>
    <button onClick=${() => setState(state - 1)}>-</button>
    <button onClick=${() => setState(state + 1)}>+</button>
  </div>`
}

const App = () => {
  return html`<main>
    <h2>My Counter App</h2>
    <${Counter} />
  </main>`
}

ReactDOM.render(html`<${App} />`, document.getElementById("container"))
