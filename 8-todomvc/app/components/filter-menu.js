import { ul, li, a, text } from "@hyperapp/html"

/** @typedef {'all' | 'completed' | 'active'} Filter */

/**
 * @param {object} props
 * @param {Filter} props.current
 * @param {Filter} props.filter
 * @param {string} props.href
 * @param {string} props.name
 */
const link = ({ current, filter, href, name }) =>
  a({ href, class: { selected: current === filter } }, text(name))

/**
 * @param {object} props
 * @param {Filter} props.current
 */
export default ({ current }) =>
  ul({ class: "filters" }, [
    li(link({ current, href: "#", filter: "all", name: "All" })),
    li(
      link({
        current,
        href: "#completed",
        filter: "completed",
        name: "Completed",
      })
    ),
    li(link({ current, href: "#active", filter: "active", name: "Active" })),
  ])
