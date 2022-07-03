import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  decrement,
  increment,
  incrementByAmount,
  divideByAmount,
  multiplyByAmount,
} from "./redux/counter"

function App() {
  const { value: count } = useSelector((state) => state.counter)
  const [changeByNumber, setChangeByNumber] = useState(0)
  const dispatch = useDispatch()
  const handleChangeBy = (action) => {
    const changeNumber = Number(changeByNumber)
    dispatch(action(changeNumber))
    setChangeByNumber(0)
  }
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <div className="changeInput">
        <label>
          <span>Change by:</span>
          <input
            type="number"
            value={changeByNumber}
            onChange={(e) => setChangeByNumber(e.target.value)}
          />
        </label>
        <br />
        <button onClick={() => handleChangeBy(incrementByAmount)}>
          Increment by
        </button>
        <button onClick={() => handleChangeBy(multiplyByAmount)}>
          Multiply by
        </button>
        <button onClick={() => handleChangeBy(divideByAmount)}>
          Divide by
        </button>
      </div>
    </div>
  )
}

export default App
