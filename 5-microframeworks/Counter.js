import html from "html"

export default ({ value, setValue }) => html` <div>
  <h1>${value}</h1>
  <button onclick=${() => setValue(value - 1)}>-</button>
  <button onclick=${() => setValue(value + 1)}>+</button>
</div>`
