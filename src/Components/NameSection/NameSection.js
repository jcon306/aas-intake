import React from 'react'
import './NameSection.css'

const NameSection = ({ motherFirstName, motherLastName, onMotherFirstNameChange, onMotherLastNameChange}) => {


    return (
        <div>
            <label className='nameLabel'>
                Mother's First Name:{/*} <p id='nameAsterisk' className='reqAsterisk'>*</p>*/}
                <input
                    className='nameInput' 
                    type='text' 
                    placeholder='Enter first name' 
                    required
                    onChange={onMotherFirstNameChange}
                    value={motherFirstName}
                />
            </label>
            <br />
            <label className='nameLabel'>
            Mother's Last Name:{/*} <p id='nameAsterisk' className='reqAsterisk'>*</p>*/}
            <input
                className='nameInput' 
                type='text' 
                placeholder='Enter last name' 
                required
                onChange={onMotherLastNameChange}
                value={motherLastName}
            />
        </label>
    </div>
    )
}

export default NameSection