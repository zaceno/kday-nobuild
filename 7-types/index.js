import { app } from "hyperapp"
import { Init } from "./model.js"
import AppView from "./app.js"

const node = document.getElementById("container")
if (!node) throw new Error("Missing mountpoint!")

app({
  init: Init,
  view: state => AppView({ state }),
  node,
})
