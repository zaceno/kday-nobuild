import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"
import React from "https://cdn.skypack.dev/react@17.0.1"
import htm from "https://cdn.skypack.dev/htm@3.1.0"
const html = htm.bind(React.createElement)

import App from "./App.js"

ReactDOM.render(html`<${App} />`, document.getElementById("container"))
