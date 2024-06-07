import { app } from "hyperapp"
import App from "./App.js"

app({
  init: 5,
  view: value => App(value),
  node: document.getElementById("container"),
})
