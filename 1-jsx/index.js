import { useState } from "react"
import ReactDOM from "react-dom"

const Counter = () => {
  const [state, setState] = useState(5)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => setState(state - 1)}>-</button>
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
}

const App = () => {
  return (
    <main>
      <h2>My Counter App</h2>
      <Counter />
    </main>
  )
}

ReactDOM.render(<App />, document.getElementById("container"))
