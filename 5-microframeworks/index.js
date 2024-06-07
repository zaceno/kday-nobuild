import { render } from "petit-dom"
import App from "@/App.js"

const node = document.getElementById("container")

const update = state =>
  render(
    App({
      state,
      setState: update,
    }),
    node
  )

update({ counter: 5 })
