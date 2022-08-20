import React, { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners';
import Question from '../Question/Question';
import './QuizPage.css'
const QuizPage = ({ name, questions, score, setScore, setQuestions, loading}) => {

  const [options, setOptions] = useState();
  const [index, setIndex] = useState(0); 

  const shuffleQuestions = (options) => {
    return options.sort(() => Math.random() - 0.5)
  }


  useEffect(() => {
    console.log(questions); 
    index < 10 && setOptions(questions && 
      shuffleQuestions([
        questions[index].correct_answer,  ...questions[index].incorrect_answers
      ])) 
   
  }, [questions, index]);


  console.log(options)



  return (
  <>
    {loading ? <div className='pacmanloader'><PacmanLoader  className='pacman' size={40}  color="#cdc501" speedMultiplier={2}/> </div>
    : 
    <div className='Quizpage--container'>
      <main className='header--quiz'>
          <div className='goodLuck'>
            <h2 className='name--h2'>GoodLuck: {name}</h2>
          </div>
          <div>
            <h2 className='qiuzpage--score'>Score: {score}</h2>
          </div>
      </main>
      {questions &&
      <Question
      score={score}
      setScore={setScore}
      questions={questions}
      setQuestions={setQuestions}
      index={index}
      setIndex={setIndex}
      options={options}
      setOptions={setOptions}
      correct={questions[index].correct_answer}
      /> } 
      
    </div>}
  </>
  )
}

export default QuizPage