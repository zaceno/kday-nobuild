import html from 'html'
import Counter from './Counter.js'

export default () => {
  return html`
    <main>
      <h2>My Counter App</h2>
      <${Counter} />
    </main>`
}
