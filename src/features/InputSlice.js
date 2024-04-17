import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  input: "",
  answer: [],
}

export const InputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    increment: (state) => {
      if (
        !state.input.endsWith("+") &&
        !state.input.endsWith("-") &&
        !state.input.endsWith("*") &&
        !state.input.endsWith("/")
      ) {
        state.input += "+"
      }
    },
    decrement: (state) => {
      if (
        !state.input.endsWith("+") &&
        !state.input.endsWith("-") &&
        !state.input.endsWith("*") &&
        !state.input.endsWith("/")
      ) {
        state.input += "-"
      }
    },
    multiplication: (state) => {
      if (
        !state.input.endsWith("+") &&
        !state.input.endsWith("-") &&
        !state.input.endsWith("*") &&
        !state.input.endsWith("/")
      ) {
        state.input += "*"
      }
    },
    division: (state) => {
      if (
        !state.input.endsWith("+") &&
        !state.input.endsWith("-") &&
        !state.input.endsWith("*") &&
        !state.input.endsWith("/")
      ) {
        state.input += "/"
      }
    },
    clear: (state) => {
      state.input = ""
      state.answer.unshift("")
    },
    deleteByOne: (state) => {
      state.input = state.input.slice(0, -1)
    },
    addNumber: (state, action) => {
      state.input += action.payload
    },
    calculate: (state) => {
      // eslint-disable-next-line
      state.answer.unshift(eval(state.input))
    },
  },
})

export const {
  increment,
  decrement,
  multiplication,
  division,
  clear,
  addNumber,
  calculate,
  deleteByOne,
} = InputSlice.actions

export default InputSlice.reducer
