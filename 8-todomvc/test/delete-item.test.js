import * as actions from "@/actions.js"
import { app } from "hyperapp"
const assert = window.chai.assert
import mocha from "mocha"
mocha.setup("tdd")

suite("Delete Items", () => {
  let dispatch
  let state
  setup(() => {
    dispatch = app({
      init: actions.Init,
      dispatch: d => (action, payload) => {
        if (typeof action !== "function" && !Array.isArray(action)) {
          state = action
        }
        d(action, payload)
      },
    })
    dispatch(actions.InputNewItem, "foo")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "bar")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "baz")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "zip")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "pop")
    dispatch(actions.AddItem)
    dispatch(actions.ToggleDone, 0)
    dispatch(actions.ToggleDone, 1)
  })
  teardown(() => {
    dispatch()
  })

  test("Delete first item", () => {
    dispatch(actions.DeleteItem, 0)
    assert.deepEqual(state.items, ["zip", "baz", "bar", "foo"])
    assert.deepEqual(state.done, [true, false, false, false])
  })

  test("Delete last item", () => {
    dispatch(actions.DeleteItem, 4)
    assert.deepEqual(state.items, ["pop", "zip", "baz", "bar"])
    assert.deepEqual(state.done, [true, true, false, false])
  })

  test("Delete middle item", () => {
    dispatch(actions.DeleteItem, 2)
    assert.deepEqual(state.items, ["pop", "zip", "bar", "foo"])
    assert.deepEqual(state.done, [true, true, false, false])
  })

  test("Delete nonexistent item", () => {
    dispatch(actions.DeleteItem, 99)
    assert.deepEqual(state.items, ["pop", "zip", "baz", "bar", "foo"])
    assert.deepEqual(state.done, [true, true, false, false, false])
  })
})
