import { app } from "hyperapp"
import { Init } from "./model.js"
import AppView from "./app.js"

app({
  init: Init,
  view: state => AppView({ state }),
  node: document.getElementById("container"),
})
