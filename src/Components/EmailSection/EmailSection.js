import React from 'react'
import './EmailSection.css'

const EmailSection = ({ emailChange, email }) => {
    return (
        <label className='emailLabel'>
            Email Address: 
            <input 
                className='emailInput'
                type='email' 
                placeholder='Enter email'
                required
                onChange={emailChange}
                value={email}
            />
        </label>
    )
}

export default EmailSection