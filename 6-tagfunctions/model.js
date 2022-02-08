
export const Init = () => ({counter: 5})

export const CounterPlus = (state) => ({
  ...state,
  counter: state.counter + 1
})

export const CounterMinus = (state) => ({
  ...state,
  counter: state.counter - 1
})