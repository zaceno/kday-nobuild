import { app } from "hyperapp"
import App from "@/App.js"
/** @typedef {import('@/App.js').State} State  */

const node = document.getElementById("container")
if (!node) throw new Error("Missing mountpoint!")

app({
  /** @type {State} */
  init: {counter: 5},
  view: state => App(state),
  node,
})
