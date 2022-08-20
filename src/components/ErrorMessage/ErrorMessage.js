import React from 'react'

const ErrorMessage = (props) => {
    const styles ={
        height: '50px', 
        width: '100%', 
        backgroundColor: 'red', 
        marginBottom: '30px', 
        borderRadius: '10px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: '10px', 
        fontFamily: 'Times New Roman',
        color: 'white',
    }
  return (
    <div style={styles}>
        {props.input}
    </div>
  )
}

export default ErrorMessage