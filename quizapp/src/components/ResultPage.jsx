import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function ResultPage() {
    const results = useSelector((state) => state.quiz.results);
    const navigate = useNavigate()

    return (
        <div className="quizApp result">
            <div><button onClick={() => navigate("/", {replace: true})}>Home</button></div>
            <h1 style={{letterSpacing: "20px"}}>RESULTS</h1>
            <div>
                <h3 style={{ color: "hsl(109, 95%, 45%)" }}>Correct Answers: {results.correct}</h3>
                <h3 style={{ color: "red" }}>Wrong Answers: {results.incorrect}</h3>
            </div>
        </div>
    );
}

export default ResultPage;
