import React from "react"
import "../Equal/Equal.css"
import { useDispatch } from "react-redux"
import { calculate } from "../../features/InputSlice"
function Equal() {
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      className="btn equal"
      onClick={() => dispatch(calculate())}
    >
      =
    </button>
  )
}

export default Equal
