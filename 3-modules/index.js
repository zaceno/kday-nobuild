import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"
import html from './html.js'
import App from "./App.js"

ReactDOM.render(html`<${App} />`, document.getElementById("container"))
