import React from "https://cdn.skypack.dev/react@17.0.1"
import htm from "https://cdn.skypack.dev/htm@3.1.0"
const html = htm.bind(React.createElement)

import Counter from "./Counter.js"

export default () => {
  return html` <main>
    <h2>Counter Demo - 3. Modules</h2>
    <${Counter} />
  </main>`
}
