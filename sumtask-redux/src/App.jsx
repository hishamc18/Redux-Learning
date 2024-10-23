import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Input1 from './features/Input1'
import Input2 from './features/Input2'
import Sum from './features/Sum'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Input1 />}/>
          <Route path='input2' element={<Input2 />}/>
          <Route path='sum' element={<Sum />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
