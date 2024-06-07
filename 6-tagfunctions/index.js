import { app } from "hyperapp"
import App from "./App.js"

app({
  init: {counter: 5},
  view: state => App(state),
  node: document.getElementById("container"),
})
