import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [
      { id: 1, question: "1. Who is the Father of India?", options: ["Minhaj", "Gandhiji", "Shahid"], correct: "Gandhiji" },
      { id: 2, question: "2. What is current Chief Minister of Kerala?", options: ["Pinarayi Vijayan", "Oomen Chandi", "Narendra Modi"], correct: "Pinarayi Vijayan" },
      { id: 3, question: "3. Which capital of Kerala?", options: ["Trivandrum", "Malappuram", "Kasargod"], correct: "Trivandrum" },
    ],
    selectedAnswers: {},
    results: null,
  },

  reducers: {
    selectAnswer: (state, action) => {
      state.selectedAnswers[action.payload.questionId] = action.payload.answer;
    },

    calculateResults: (state) => {
      let correctCount = 0, incorrectCount = 0;
      state.questions.forEach((q) => {
        if (state.selectedAnswers[q.id] == q.correct) {
          correctCount++;
        } else {
          incorrectCount++;
        }
      });
      state.results = { correct: correctCount, incorrect: incorrectCount };
    },
  },
});

export const { selectAnswer, calculateResults } = quizSlice.actions;
export default quizSlice.reducer;