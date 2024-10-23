import React from 'react'
import { useSelector } from 'react-redux'

function Sum() {

    const firstNumber = useSelector((state) => state.sumtask.firstNumber)
    const secondNumber = useSelector((state) => state.sumtask.secondNumber)
    const sum = firstNumber + secondNumber  //sum of two inputs


  return (
    <div>
      <h2>Sum: {sum}</h2>
    </div>
  )
}

export default Sum
