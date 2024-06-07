import { main, h2, text } from "html"
import Counter from "@/Counter.js"


export default (value) =>
  main([
    h2(text("Counter Demo - 6. Tag functions")),
    Counter(value)
  ])
