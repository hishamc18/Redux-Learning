import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function HomePage() {

    const count = useSelector((state) => state.counter.count)
    const user = useSelector((state)=> state.user)

    const dispatch = useDispatch()

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{dispatch({type: 'INCREMENT'})}}>Increment</button>
      <button onClick={()=>{dispatch({type: 'DECREMENT'})}}>Decrement</button>
      <button onClick={()=>{dispatch({type: 'RESET'})}}>Reset</button>


      <h2>User: {user.loggedIn ? user.name : "Guest"}</h2>
      {user.loggedIn ? (
        <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
      ) : (
        <button onClick={() => dispatch({ type: 'LOGIN', payload: 'Hisham' })}>Login</button>
      )}
    </div>
  )
}

export default HomePage
