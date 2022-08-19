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

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    

    console.log(data.results)
    setQuestions(data.results);
    }

  return (
    <div className="small">      
        <Routes>
          <Route path="/"  exact element={<HomePage  setName={setName} fetchQuestions={fetchQuestions} Name={name} />}/>
          <Route path="/quiz"  exact element={<QuizPage questions={questions} setQuestions={setQuestions} name={name} score={score} setScore={setScore}/>} />
          <Route path="/result" element={<Results score={score} name={name} setScore={setScore}/>} />
        </Routes>
        <footer>
          
        </footer>
    </div>

  );
}

export default App;
