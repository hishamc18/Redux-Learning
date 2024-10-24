import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setSecondNumber } from '../slice/slice'
import { useNavigate } from 'react-router-dom'

function Input2() {

    const [number, setNumber] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleNext = () => {
        dispatch(setSecondNumber(Number(number)))
        navigate('/sum')
    }
  return (
    <div>
            <input type="number" placeholder='Enter 2nd Number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={handleNext}>Sum</button>
    </div>
  )
}

export default Input2
