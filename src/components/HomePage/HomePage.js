import { MenuItem ,TextField, Button } from '@mui/material';
import React, { useState } from 'react'
import './HomePage.css'; 
import Categories from '../Data/category-data';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const HomePage = ({Name, setName, fetchQuestions}) => {
    const[categories, setCategories] = useState(''); 
    const[difficulty, setDifficulty] = useState(''); 
    const [error, setError] = useState(false); 

  let navigate = useNavigate();


    function toggleError(){
        if(!categories||!difficulty||!Name){
            setError(true); 
        }else{
            setError(false); 
            navigate('/quiz');
            fetchQuestions(categories, difficulty); 
        }
    }


  return (
    <div className='HomePage--container'>
        <div className='header'>
            <h1 className='AppName'>QuizerStrike</h1>
        </div>
        <div className='img--container'>
            <img src='\undraw_questions_re_1fy7.svg' alt='decorative image of quiz'/>
            <div className='input-field'>
              {error && <ErrorMessage input={'Please Fill Out Every box!'}/>}
              <TextField variant="outlined" 
              placeholder='Enter Name' 
              style={{backgroundColor: 'lightgray', marginBottom: '30px'}}
              label='Enter UserName' 
              value={Name} 
              onChange={(e)=>setName(e.target.value)}/>


              <TextField 
              select variant="outlined" 
              label='Select Category' 
              style={{backgroundColor: 'lightgray', marginBottom: '30px', width: 'auto', height: 'auto'}}
              value={categories}
              onChange={(e)=>setCategories(e.target.value)}>
                 {Categories.map((Element) => (
                    <MenuItem key={Element.category} value={Element.value}>{Element.category}</MenuItem>
                 ))}
              </TextField>

              
              <TextField 
              select 
              variant="outlined" 
              label='Select Difficulty' 
              style={{backgroundColor: 'lightgray', marginBottom: '30px'}}
              value={difficulty}
              onChange={(e)=>setDifficulty(e.target.value)}>

                <MenuItem key='Easy' value='easy'>
                    Easy
                </MenuItem>
                <MenuItem key='Medium' value='medium'>
                    Medium
                </MenuItem>
                <MenuItem key='Hard' value='hard'>
                    hard
                </MenuItem>
              </TextField>
              <Button variant="contained" onClick={toggleError} style={{width: '100%'}}>Submit</Button>

            </div>
        </div>
    </div>
  )
}

export default HomePage