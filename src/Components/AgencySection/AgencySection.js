import React from 'react'
import './AgencySection.css'

const AgencySection = ({ agencyChange, numberOfChildren, agency, numChildren }) => {
    return (
        <div>
            <label className='agencyLabel'>Please select the agency who referred you:</label>
            <select
                className='agency-dropdown' 
                value={agency}
                onChange={agencyChange}>
                    <option value=''>--Agencies--</option>
                    <option value='Families For Families'>Families For Families</option>
                    <option value='Hilltop Haven/Paterson Task Force'>Hilltop Haven/Paterson Task Force</option>
                    <option value="Hope Through Care/Grandma's Place">Hope Through Care/Grandma's Place</option>
                    <option value='Heart of Hannah'>Heart of Hannah</option>
                    <option value="Passaic County Women's Center">Passaic County Women's Center</option>
                
            </select>
            <br />
            <label className='numOfChildLabel'>Select how many children you would like to sign up:</label>
            <br />
            <select
                className='numOfChild-dropdown'
                value={numChildren} 
                onChange={numberOfChildren}>
                    <option value=''>--Children--</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                
            </select>
        </div>
    )
}

export default AgencySection