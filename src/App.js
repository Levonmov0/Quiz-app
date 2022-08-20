import React, { useState } from "react";
import QuizPage from "./components/QuizPage/QuizPage";
import HomePage from "./components/HomePage/HomePage";
import {Routes, Route } from "react-router-dom";
import Results from "./components/Results/Results";
import './App.css'
import axios from "axios";


function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)
  const [loading, setLoading] = useState(false)

  const fetchQuestions = async (category = "", difficulty = "") => {
    setLoading(true);
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    setLoading(false)
    }

  return (
    <div className="small">      
        <Routes>
          <Route path="/"  exact element={<HomePage  setName={setName} fetchQuestions={fetchQuestions} Name={name} />}/>
          <Route path="/quiz"  exact element={<QuizPage questions={questions} setQuestions={setQuestions} name={name} score={score} setScore={setScore} loading={loading} setLoading={setLoading} />} />
          <Route path="/result" element={<Results score={score} name={name} setScore={setScore}/>} />
        </Routes>
        <footer>
          
        </footer>
    </div>

  );
}

export default App;
