import React from 'react'
import './PhoneSection.css'

const PhoneSection = ({ phoneNumberChange, phoneNumber }) => {
    return (
        <label className='phoneLabel'>
            Phone Number: 
            <input 
                className='phoneInput'
                type='tel' 
                placeholder='Enter phone number'
                maxLength={14}
                required
                onChange={phoneNumberChange}
                value={phoneNumber}
            />
        </label>
    )
}

export default PhoneSection