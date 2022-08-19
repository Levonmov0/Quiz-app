import React, { useState } from 'react'
import './Question.css'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Question = ({
    score,
    setScore,
    questions,
    correct, 
    setQuestions,
    index,
    setIndex,
    options,
    setOptions}) => {

    const[selected, setSelected] = useState(); 
    const[error, setError] = useState(false); 

    let navigate = useNavigate()

    const handleSelect = (i) =>{
        if(i === selected && selected === correct){
            return 'correct'
        }else if(i === selected && selected !== correct){
            return 'wrong'
        }else if(i === correct){
            return 'correct'
        }
    }

    const handleCheck = (i) => {
        setSelected(i)
        if(i === correct){
            setScore(score => score + 1); 
            setError(false); 
        }
    }

    const handleNext = () =>{
        if(index > 8){
            navigate('/result')
            setError(false)
        }else if(!(index > 8) && selected){
            setError(false)
            setIndex(prevIndex => prevIndex + 1); 
            setSelected('')
        }else if (!selected){
            setError(true)
        }
    }
     

    const handleQuit = () =>{
        setScore(0); 
        setQuestions(); 
        setOptions(); 
        navigate('/'); 
    }


  return (
    <div className='Button--container'>
        <header>
            <h1 className='wich--question'> Question {index + 1}</h1>
        </header>
        <div className='question--q'>
          <h1> {questions[index].question} </h1>
        </div>
        {error && <ErrorMessage input={'please select an option first'}/>}
        <div className='buttons--div'>
           {options && options.map(option => 
           <button 
           onClick={()=>{handleCheck(option)}} 
           disabled={selected} 
           key={option}
           className={`option ${selected && handleSelect(option)}`}>
          {option}</button>
           )}
        </div>
        <div className='next--quit'>
            <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{width: 185, height: 50}}
            href='/'
            onClick={handleQuit}
            >
                Quit
            </Button>
            <Button
             variant='contained'
             color='primary'
             size='large'
             style={{width: 185, height: 50}}
             onClick={handleNext}
             >
                Next Question
            </Button>
        </div>
    </div>
  )
}

export default Question