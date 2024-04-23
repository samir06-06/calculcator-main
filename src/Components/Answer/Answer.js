import React from "react"
import { useSelector } from "react-redux"
import "../Answer/Answer.css"
function Input() {
  const answerValues = useSelector((state) => state.input.answer)
  const finalAnswer = answerValues[0]
  return (
    <input
      className="answer"
      type="text"
      readOnly
      value={`=   ${finalAnswer !== undefined ? finalAnswer : ""}`}
    />
  )
}

export default Input
