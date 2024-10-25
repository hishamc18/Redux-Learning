import React from 'react'
import { replace, useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <h1 style={{letterSpacing: "3px"}}>Let's Start the Quiz</h1>
      <button onClick={() => navigate("/quiz", {replace: true})}>Start Quiz</button>
    </div> 
  )
}

export default Home
