import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectAnswer, calculateResults } from '../slices/quizSlice';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function QuizPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const questions = useSelector((state) => state.quiz.questions);
    const selectedAnswers = useSelector((state) => state.quiz.selectedAnswers);
  
    const handleSelect = (questionId, answer) => {
      dispatch(selectAnswer({ questionId, answer }));
    };
  
    const handleSubmit = () => {
        const allAnswered = questions.every((q) => selectedAnswers[q.id]);
        if (allAnswered) {
            dispatch(calculateResults());
            navigate("/results", {replace: true});
        } else {
            toast.error("Please answer all questions.");
        }
    };
    
    return (
      <div className='quizApp'>
        {questions.map((q) => (
          <div key={q.id}>
            <h2>{q.question}</h2>
            {q.options.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={selectedAnswers[q.id] === option}
                  onChange={() => handleSelect(q.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <div className="btn"><button onClick={handleSubmit}>Submit</button></div>
        <ToastContainer />
      </div>
    );
}

export default QuizPage
