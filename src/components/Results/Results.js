import React from 'react'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'; 
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import './Results.css'

const Results = ({score, name, setScore}) => {

  let navigate = useNavigate()
  const returnHome = () =>{
    setScore(0); 
    navigate('/')
  }
  return (
    <div className='results--container'>
      <h1 className='results--goodjob'>Good Job {name}!</h1>
      <h2 className='results--finalScore'>Final Score: {score}</h2>
      <Button
      variant='contained'
      color='primary'
      size='large'
      onClick={returnHome}
      >
      Back to Home</Button>
    </div>
  )
}

export default Results