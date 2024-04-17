import React from "react"
import "./Numbers.css"
import { useDispatch } from "react-redux"
import { addNumber, clear, deleteByOne } from "../../features/InputSlice"

function Numbers() {
  const dispatch = useDispatch()
  return (
    <div id="numberss">
      <div className="n-row">
        <button
          type="button"
          className="btn btn n-column"
          onClick={() => dispatch(clear())}
        >
          AC
        </button>
        <button
          type="button"
          className="btn btn n-column"
          onClick={() => dispatch(deleteByOne())}
        >
          &lt;
        </button>
      </div>
      <div className="n-row">
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(1))}
        >
          1
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(2))}
        >
          2
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(3))}
        >
          3
        </button>
      </div>
      <div className="n-row">
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(4))}
        >
          4
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(5))}
        >
          5
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(6))}
        >
          6
        </button>
      </div>
      <div className="n-row">
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(7))}
        >
          7
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(8))}
        >
          8
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(9))}
        >
          9
        </button>
      </div>
      <div className="n-row">
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber("."))}
        >
          .
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber(0))}
        >
          0
        </button>
        <button
          type="button"
          className="btn n-column"
          onClick={(e) => dispatch(addNumber("00"))}
        >
          00
        </button>
      </div>
    </div>
  )
}

export default Numbers
