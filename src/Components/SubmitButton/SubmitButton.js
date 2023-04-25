import React from 'react'
import './SubmitButton.css'

const SubmitButton = ({ onSubmit }) => {
    return (
        <button 
            type='submit'
            className='submitButton'
            onClick={onSubmit}    
        >
            Submit
        </button>
    )
}

export default SubmitButton