declare module "@hyperapp/html" {
  import { ElementVNode, MaybeVNode, Props, CustomPayloads } from "hyperapp"
  export type Content<S> = MaybeVNode<S>[] | MaybeVNode<S>

  type TagFn = <S, X>(
    props: (CustomPayloads<S, X> & Props<S>) | Content<S>,
    content?: Content<S>
  ) => ElementVNode<S>

  export const a: TagFn
  export const b: TagFn
  export const i: TagFn
  export const p: TagFn
  export const q: TagFn
  export const s: TagFn
  export const br: TagFn
  export const dd: TagFn
  export const dl: TagFn
  export const dt: TagFn
  export const em: TagFn
  export const h1: TagFn
  export const h2: TagFn
  export const h3: TagFn
  export const h4: TagFn
  export const h5: TagFn
  export const h6: TagFn
  export const hr: TagFn
  export const li: TagFn
  export const ol: TagFn
  export const rp: TagFn
  export const rt: TagFn
  export const td: TagFn
  export const th: TagFn
  export const tr: TagFn
  export const ul: TagFn
  export const bdi: TagFn
  export const bdo: TagFn
  export const col: TagFn
  export const del: TagFn
  export const dfn: TagFn
  export const div: TagFn
  export const img: TagFn
  export const ins: TagFn
  export const kbd: TagFn
  export const map: TagFn
  export const nav: TagFn
  export const pre: TagFn
  export const rtc: TagFn
  export const sub: TagFn
  export const sup: TagFn
  export const wbr: TagFn
  export const abbr: TagFn
  export const area: TagFn
  export const cite: TagFn
  export const code: TagFn
  export const data: TagFn
  export const form: TagFn
  export const main: TagFn
  export const mark: TagFn
  export const ruby: TagFn
  export const samp: TagFn
  export const span: TagFn
  export const time: TagFn
  export const aside: TagFn
  export const audio: TagFn
  export const input: TagFn
  export const label: TagFn
  export const meter: TagFn
  export const param: TagFn
  export const small: TagFn
  export const table: TagFn
  export const tbody: TagFn
  export const tfoot: TagFn
  export const thead: TagFn
  export const track: TagFn
  export const video: TagFn
  export const button: TagFn
  export const canvas: TagFn
  export const dialog: TagFn
  export const figure: TagFn
  export const footer: TagFn
  export const header: TagFn
  export const iframe: TagFn
  export const legend: TagFn
  export const object: TagFn
  export const option: TagFn
  export const output: TagFn
  export const select: TagFn
  export const source: TagFn
  export const strong: TagFn
  export const address: TagFn
  export const article: TagFn
  export const caption: TagFn
  export const details: TagFn
  export const section: TagFn
  export const summary: TagFn
  export const picture: TagFn
  export const colgroup: TagFn
  export const datalist: TagFn
  export const fieldset: TagFn
  export const menuitem: TagFn
  export const optgroup: TagFn
  export const progress: TagFn
  export const textarea: TagFn
  export const blockquote: TagFn
  export const figcaption: TagFn
  export { text } from "hyperapp"
}
