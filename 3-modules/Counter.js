import {useState} from 'https://cdn.skypack.dev/react@17.0.1'
import React from 'https://cdn.skypack.dev/react@17.0.1'
import htm from 'https://cdn.skypack.dev/htm@3.1.0'
const html = htm.bind(React.createElement)


export default () => {
  const [state, setState] = useState(5)
  return html`
    <div>
      <h1>${state}</h1>
      <button onClick=${() => setState(state - 1)}>-</button>
      <button onClick=${() => setState(state + 1)}>+</button>
    </div>`
}