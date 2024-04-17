import React from "react"
import "../Operations/Operations.css"
import { useDispatch } from "react-redux"
import {
  increment,
  decrement,
  multiplication,
  division,
} from "../../features/InputSlice"
import Equal from "../Equal/Equal"

function Operations() {
  const dispatch = useDispatch()

  return (
    <div className="btn-group-vertical" role="group" aria-label="Basic example">
      <button
        onClick={() => dispatch(increment())}
        type="button"
        className="btn btn-operations plus"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        type="button"
        className="btn btn-operations"
      >
        -
      </button>
      <button
        onClick={() => dispatch(multiplication())}
        type="button"
        className="btn btn-operations"
      >
        *
      </button>
      <button
        onClick={() => dispatch(division())}
        type="button"
        className="btn btn-operations"
      >
        /
      </button>
      <Equal />
    </div>
  )
}

export default Operations
