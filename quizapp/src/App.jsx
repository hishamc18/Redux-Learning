import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="results" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;