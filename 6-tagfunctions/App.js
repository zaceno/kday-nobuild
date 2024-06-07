import { main, h2, text } from "html"
import Counter from "@/Counter.js"

const setCounter = (state, counter) => ({...state, counter})

export default (state) =>
  main([
    h2(text("Counter Demo - 6. Tag functions")),
    Counter({
      value: state.counter,
      setValue: setCounter
    })
  ])
