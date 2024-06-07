import html from './html.js'
import Counter from "./Counter.js"

export default () => {
  return html`
  <main>
    <h2>Counter Demo - 3. Modules</h2>
    <${Counter} />
  </main>`
}
