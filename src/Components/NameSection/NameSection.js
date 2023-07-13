import React from 'react'
import './NameSection.css'

const NameSection = ({ parentFirstName, parentLastName, onParentFirstNameChange, onParentLastNameChange}) => {


    return (
        <div>
            <label className='nameLabel'>
                Parent's First Name:
                <input
                    className='nameInput' 
                    type='text' 
                    placeholder='Enter first name' 
                    required
                    onChange={onParentFirstNameChange}
                    value={parentFirstName}
                />
            </label>
            <br />
            <label className='nameLabel'>
            Parent's Last Name:
            <input
                className='nameInput' 
                type='text' 
                placeholder='Enter last name' 
                required
                onChange={onParentLastNameChange}
                value={parentLastName}
            />
        </label>
    </div>
    )
}

export default NameSection