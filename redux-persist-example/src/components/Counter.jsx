import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slice/CounterSlice'
import { decrement } from '../slice/CounterSlice'
import { reset } from '../slice/CounterSlice'

function Counter() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())} >Increment</button>
      <button onClick={() => dispatch(decrement())} >Decrement</button>
      <button onClick={() => dispatch(reset())} >Reset</button>
    </div>
  )
}

export default Counter
