import React from 'react'
import { useSelector } from 'react-redux'

function Sum() {

    const firstNumber = useSelector((state) => state.demoTask.firstNumber)
    const secondNumber = useSelector((state) => state.demoTask.secondNumber)


    const sum = firstNumber + secondNumber

  return (
    <div>
      <h2>Sum: {sum}</h2>
    </div>
  )
}

export default Sum
