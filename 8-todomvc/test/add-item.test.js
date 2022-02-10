import * as actions from "@/actions.js"
import { app } from "hyperapp"
const assert = chai.assert
import mocha from "https://cdn.skypack.dev/mocha/mocha.js"
mocha.setup("tdd")

suite("Add Items", () => {
  let dispatch
  let state
  setup(() => {
    dispatch = app({
      init: actions.Init,
      dispatch: d => (action, payload) => {
        if (typeof action !== "function" && !Array.isArray(action)) {
          console.log("SETTING STATE", action)
          state = action
        }
        d(action, payload)
      },
    })
  })
  teardown(() => {
    dispatch()
  })
  test("Add empty item", () => {
    dispatch(actions.InputNewItem, "")
    dispatch(actions.AddItem)
    assert.deepEqual(state.items, [], "Empty items should not be added")
  })
  test("Add nonempty item", () => {
    dispatch(actions.InputNewItem, "foo")
    dispatch(actions.AddItem)
    assert.deepEqual(state.items, ["foo"], "Nonempty items should be added")
    assert.deepEqual(state.done, [false], "Added items are not done")
  })
  test("Add multiple items", () => {
    dispatch(actions.InputNewItem, "foo")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "bar")
    dispatch(actions.AddItem)
    dispatch(actions.InputNewItem, "baz")
    dispatch(actions.AddItem)
    assert.deepEqual(
      state.items,
      ["baz", "bar", "foo"],
      "Items should be added in reverse order"
    )
    assert.deepEqual(
      state.done,
      [false, false, false],
      "Added items are not done"
    )
  })
})
