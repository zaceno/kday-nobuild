import { app } from "hyperapp"
import { Init } from "./actions.js"
import view from "@/components/main.js"
import subscriptions from "@/subscriptions.js"

const node = document.querySelector(".todoapp")
if (!node) throw new Error("mount node missing")

app({
  init: Init,
  view,
  subscriptions,
  node,
})
