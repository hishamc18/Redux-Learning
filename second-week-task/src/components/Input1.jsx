import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFirstNumber } from '../slice/slice'
import { useNavigate } from 'react-router-dom'

function Input1() {
    const [number, setNumber] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNext = () => {
        dispatch(setFirstNumber(Number(number)))
        navigate('/input2')
    }

  return (
    <div>
      <input type="number" placeholder='Enter 1st Number' value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Input1
