import React from "react"
import { useSelector } from "react-redux"
import "../Input/Input.css"
function Input() {
  const inputValue = useSelector((state) => state.input.input)
  return <input type="text" defaultValue={inputValue} />
}

export default Input
