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
      let mainLine = state.input
      let multypLine = ""
      let divisionLine = ""

      while (mainLine.includes("/")) {
        let leftNum = ""
        let rightNum = ""
        let divisionResult = ""

        let divisionIndex = mainLine.indexOf("/")

        for (let z = divisionIndex - 1; z > -1; z--) {
          if (
            mainLine[z] === "*" ||
            mainLine[z] === "/" ||
            mainLine[z] === "+" ||
            mainLine[z] === "-"
          ) {
            break
          }
          leftNum = mainLine[z] + leftNum
        }

        for (let j = divisionIndex + 1; j < mainLine.length; j++) {
          if (
            mainLine[j] === "*" ||
            mainLine[j] === "/" ||
            mainLine[j] === "+" ||
            mainLine[j] === "-"
          ) {
            break
          }
          rightNum += mainLine[j]
        }

        divisionResult = JSON.stringify(parseInt(leftNum) / parseInt(rightNum))

        divisionLine = leftNum + "/" + rightNum

        mainLine = mainLine.replace(divisionLine, divisionResult)
      }

      while (mainLine.includes("*")) {
        let leftNum = ""
        let rightNum = ""
        let multypResult = ""

        let multypIndex = mainLine.indexOf("*")

        for (let z = multypIndex - 1; z > -1; z--) {
          if (
            mainLine[z] === "*" ||
            mainLine[z] === "/" ||
            mainLine[z] === "+" ||
            mainLine[z] === "-"
          ) {
            break
          }
          leftNum = mainLine[z] + leftNum
        }

        for (let j = multypIndex + 1; j < mainLine.length; j++) {
          if (
            mainLine[j] === "*" ||
            mainLine[j] === "/" ||
            mainLine[j] === "+" ||
            mainLine[j] === "-"
          ) {
            break
          }
          rightNum += mainLine[j]
        }

        multypResult = JSON.stringify(parseInt(leftNum) * parseInt(rightNum))

        multypLine = leftNum + "*" + rightNum

        mainLine = mainLine.replace(multypLine, multypResult)
      }
      // let finalAnswer = parseFloat(mainLine)
      // console.log(finalAnswer)

      function calculateExpression(expression) {
        let terms = expression.split(/[+-]/)
        let operators = expression.match(/[+-]/g)
        let result = parseInt(terms[0])

        for (let i = 0; i < operators.length; i++) {
          let term = parseFloat(terms[i + 1])
          if (operators[i] === "+") {
            result += term
          } else if (operators[i] === "-") {
            result -= term
          }
        }

        return result
      }

      let result = calculateExpression(mainLine)
      console.log(result)

      state.answer.unshift(eval(state.input))
      localStorage.setItem("answers", JSON.stringify(state.answer))
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
