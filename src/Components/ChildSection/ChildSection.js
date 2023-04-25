import React, { Component} from 'react'
import './ChildSection.css'


class ChildSection extends Component {
    handleNameChange = (e) => {
        const childName = e.target.value
        const index = this.props.index
        this.props.childNameChange(childName, index)
    }

    handleGenderChange = (e) => {
        const gender = e.target.value
        const index = this.props.index
        this.props.childGenderChange(gender, index)
    }

    handleAgeChange = (e) => {
        const age = e.target.value
        const index = this.props.index
        this.props.childAgeChange(age, index)
    }
    handleGradeChange = (e) => {
        const grade = e.target.value
        const index = this.props.index
        this.props.childGradeChange(grade, index)
    }

    render() {
        return (
            <div className='child-form-section'>
                             <label className='childNameLabel'>
                                 Name of child {this.props.index + 1}: {/*<p className='reqAsterisk'>*</p>*/}
                                 <input
                                    className='childNameInput childInformation'
                                    type='text' 
                                    placeholder='Enter name'
                                    required
                                    onChange={this.handleNameChange}
                                />
                                <br />
                            </label>
                            <label className='genderLabel'>
                                Gender: {/*<p className='reqAsterisk'>*</p>*/}
                                <select
                                onChange={this.handleGenderChange}
                                className='gender-Dropdown childInformation'>
                                    <option value=''></option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>                                    
                            </select>
                            </label>
                            <label className='ageLabel'>
                                Age: {/*<p className='reqAsterisk'>*</p>*/}
                                <input 
                                    className='ageInput childInformation'
                                    type='text'
                                    inputMode="numeric"
                                    maxLength={2}
                                    placeholder='Age'
                                    required
                                    onChange={this.handleAgeChange}
                                />
                            </label>
                            <label className='gradeLabel'>Grade:</label>{/*<p className='reqAsterisk'>*</p>*/}
                            <select
                                onChange={this.handleGradeChange}
                                className='grade-dropdown childInformation'>
                                    <option value=''></option>
                                    <option value='Pre-K'>Pre-K</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    
                            </select>
                    </div>
        )
    }
}

export default ChildSection