import { section } from "@hyperapp/html"
import todoList from "@/components/todo-list.js"
import toggleAll from "@/components/toggle-all.js"
import footer from "@/components/footer.js"
import header from "@/components/header.js"

/** @param {import('@/actions.js').State} state*/
export default state =>
  section({ class: "todoapp" }, [
    header({ newItem: state.newItem }),
    section(
      {
        class: "main",
        style: !state.items.length ? { display: "none" } : {},
      },
      [
        toggleAll({ done: state.done }),
        todoList(state),
        footer({
          filter: state.filter,
          done: state.done,
        }),
      ]
    ),
  ])
