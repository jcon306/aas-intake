import React, { Component } from 'react'
import Heading from './Components/Heading/Heading'
import NameSection from './Components/NameSection/NameSection'
import AddressSection from './Components/AddressSection/AddressSection'
import PhoneSection from './Components/PhoneSection/PhoneSection'
import EmailSection from './Components/EmailSection/EmailSection'
import AgencySection from './Components/AgencySection/AgencySection'
import ChildSection from './Components/ChildSection/ChildSection'
import SubmitButton from './Components/SubmitButton/SubmitButton'
import Logo from './F4FLogo.png'
import './Form.css'

import axios from 'axios'

class Form extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            motherFirstName: '',
            motherLastName: '',
            address: '',
            city: '',
            zipCode: '',
            phoneNumber: '',
            email: '',
            agency: '',
            numOfChildren: 0,
            childNames: [''],
            childGenders: [''],
            childAges: [''],
            childGrades: ['']
        }
      }
      
    handleMotherFirstNameChange = (e) => {
        this.setState({
            motherFirstName: e.target.value
        })
    }
    handleMotherLastNameChange = (e) => {
        this.setState({
            motherLastName: e.target.value
        })
    }
    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }
    handleZipCodeChange = (e) => {
        this.setState({
            zipCode: e.target.value
        })
    }

    handlePhoneNumberChange = (e) => {
        this.setState({
            phoneNumber: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleAgencyChange = (e) => {
        this.setState({
            agency: e.target.value
        })
    }

    handleNumberOfChildrenChange = (e) => {
        this.setState({
            numOfChildren: parseInt(e.target.value)
        })
    }

    handleChildNameChange = (childName, index) => {
        const childNames = [...this.state.childNames]
        childNames[index] = childName
        this.setState({
            childNames: childNames
        })
    }

    handleChildGenderChange = (gender, index) => {
        const childGenders = [...this.state.childGenders]
        childGenders[index] = gender
        this.setState({
            childGenders: childGenders
        })
    }

    handleChildAgeChange = (age, index) => {
        const childAges = [...this.state.childAges]
        childAges[index] = age
        this.setState({
            childAges: childAges
        })
    }

    handleChildGradeChange = (grade, index) => {
        const childGrades = [...this.state.childGrades]
        childGrades[index] = grade
        this.setState({
            childGrades: childGrades
        })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        const childInputFields = document.querySelectorAll('.childInformation')
        const isChildInformationFilled = Array.from(childInputFields).every(input => input.value)

        if (this.state.email.indexOf('@') === -1) {
            alert('Please enter a valid email address')
        } else if (this.state.phoneNumber.length < 10){
            alert('Please enter a valid phone number')
        } else if (!isChildInformationFilled) {
            alert('Please make sure all child information fields are filled out.')
        } else if (this.state.motherFirstName && this.state.motherLastName && this.state.address && this.state.city 
            && this.state.zipCode && this.state.agency && this.state.numOfChildren) {
                const data = {
                    "Email": this.state.email,
                    "Mother's Last Name": this.state.motherLastName,
                    "Mother's First Name": this.state.motherFirstName,
                    "Address": `${this.state.address}, ${this.state.city}, ${this.state.zipCode}`,
                    "Phone Number": this.state.phoneNumber,
                    "Referral Agency": this.state.agency,
                    "Number Of Children": this.state.numOfChildren,
                    "Child Name(s)": this.state.childNames.join(","),
                    "Child Gender(s)": this.state.childGenders.join(","),
                    "Child Age(s)": this.state.childAges.join(","),
                    "Child Grade(s)": this.state.childGrades.join(","),
                    "Date Signed Up": new Date().toLocaleDateString('en-US') ,
                    "Sponsored": 'No'        
                }
                axios.post("https://sheet.best/api/sheets/69691e5c-affa-4614-95ac-7866672bbfea", data) 
                    .then((response) => {
                        if (response.status === 200) {
                            alert('Registration successful! You may now close this page.')
                        } 
                        this.setState({
                            motherFirstName: '',
                            motherLastName: '',
                            address: '',
                            city: '',
                            zipCode: '',
                            phoneNumber: '',
                            email: '',
                            agency: '',
                            numOfChildren: 0,
                            childNames: [''],
                            childGenders: [''],
                            childAges: [''],
                            childGrades: ['']
                        }) 
                    })
                    .catch(error => {
                        alert('There was a problem registering. Please try again later or email Families For Families.\n' + error.message)
                    })
            }  else {
                alert('Please make sure all the contact information fields are filled out.')
            }  
    }
    render() {
        let childArrayElements = []
        for (let i=0; i<this.state.numOfChildren; i++) {
            childArrayElements.push(
                 <div className='form-section' key={i} id={i} > 
                    <ChildSection
                        key={i}
                        index={i}
                        childNameChange={this.handleChildNameChange}
                        childGenderChange={this.handleChildGenderChange}
                        childAgeChange={this.handleChildAgeChange}   
                        childGradeChange={this.handleChildGradeChange} 
                    />
                </div> 
            )
        } 

        return (
            <div className='form-container'>
                <img className='page-logo' src={Logo} alt='F4F Logo' />
                <div className='first form-section'>
                    <Heading />
                </div>
                <div className='form-section'>
                    <NameSection 
                        onMotherFirstNameChange={this.handleMotherFirstNameChange}
                        onMotherLastNameChange={this.handleMotherLastNameChange}  
                        motherFirstName={this.state.motherFirstName}
                        motherLastName={this.state.motherLastName} />
                </div>
                <div className='form-section'>
                    <AddressSection 
                        addressChange={this.handleAddressChange}
                        cityChange={this.handleCityChange}
                        zipCodeChange={this.handleZipCodeChange}
                        address ={this.state.address}
                        city={this.state.city}
                        zipCode={this.state.zipCode}
                    />
                </div>
                <div className='form-section'>
                    <PhoneSection 
                        phoneNumberChange={this.handlePhoneNumberChange} 
                        phoneNumber={this.state.phoneNumber} />
                </div>
                <div className='form-section'>
                    <EmailSection 
                        emailChange={this.handleEmailChange} 
                        email={this.state.email} />
                </div>
                <div className='form-section'>
                    <AgencySection 
                        agencyChange={this.handleAgencyChange} 
                        numberOfChildren={this.handleNumberOfChildrenChange} 
                        agency={this.state.agency} 
                        numChildren={this.state.numOfChildren}/>
                </div>
                {childArrayElements}
                <div className='submit'>
                    <SubmitButton  onSubmit={this.handleSubmit}/>
                </div> 
            </div>
        )
    }
}

export default Form