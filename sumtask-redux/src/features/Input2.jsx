import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSecondNumber } from './SumSLice'

function Input2() {
    const dispatch = useDispatch()
    const [number, setNumber] = useState("")
    const navigate = useNavigate()


    const handleNext = () => {
        dispatch(setSecondNumber(Number(number)))
        navigate('/sum')
    }

   return (
    <div>
      <input type="number" placeholder='Enter Second Number' value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={handleNext} >Next</button>
    </div>
  )
}

export default Input2
