import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload
    },
    divideByAmount: (state, action) => {
      state.value /= action.payload
    },
  },
})

// The reducer and the actions must be exported separately

export const {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
  divideByAmount,
} = counterSlice.actions

export default counterSlice.reducer
