import React, { useState } from 'react';
import './editProfile.css';
import {useContext} from 'react';
import {AppContext} from "../App";

function EditProfile() {
  const[newName,setNewName] = useState("");
  const[newCompany,setNewCompany]= useState("");
  const[newCompanyDomain,setNewCompanyDomain]= useState("");
  const[newCompanyTimePeriod,setNewCompanyTimePeriod]= useState("");
  const[newCompanyProfile,setNewCompanyProfile]= useState("");
  const[newCompanyDescription,setNewCompanyDescription]= useState("");


  const{
      setUserName,
      setCompanyName,
      setCompanyDomain,
      setUserProfile,
      setTimePeriod,
      setWorkDescription
    } = useContext(AppContext);

  function nameChanged(event) {
    setNewName(event.target.value);
  }


  function companyNameChanged(event){
    setNewCompany(event.target.value);
  }

  function companyDomainChanged(event){
    setNewCompanyDomain(event.target.value);
  }

  function timePeriodChanged(event){
    setNewCompanyTimePeriod(event.target.value);
  }

  function profileChanged(event){
    setNewCompanyProfile(event.target.value);
  }

  function descriptionChanged(event){
    setNewCompanyDescription(event.target.value);
  }



  function submitHandle() {
    console.log(newName);
    setUserName(newName);
    setCompanyName(newCompany);
    setCompanyDomain(newCompanyDomain);
    setUserProfile(newCompanyProfile);
    setTimePeriod(newCompanyTimePeriod);
    setWorkDescription(newCompanyDescription);
  }

  return (
    <div className='mainContainer'>
        <div className='userName-wrapper'>
            <label className='name-label' >Name</label>
            <input className='userName' placeholder='enter your name' onChange={nameChanged} />
        </div>
        <div className='userExperience'>
            <label className='companyNameLabel' >Name</label>
            <input className='companyName' placeholder='enter your company Name' onChange={companyNameChanged} />
            <label className='newCompanyDomainLabel'>Company Domain</label>
            <input className='newCompanyDomain' placeholder='enter the company domain' onChange={companyDomainChanged}/>
            <label className='newCompanyTimePeriodLabel'>Time Period</label>
            <input className='newCompanyTimePerios' placeholder='enter the time period in this company' onChange={timePeriodChanged}/>
            <label className='newCompanyProfileLabel'>Your Profile</label>
            <input className='newCompanyProfile' placeholder='your profile in this company' onChange={profileChanged}/>
            <label className='newCompanyDescriptionLabel'>Tell About You Work</label>
            <input className='newCompanyDescription' placeholder='describe your work in maximum 350 words' onChange={descriptionChanged}/>
        </div>
        <button onClick={submitHandle}>
              Submit
        </button>
    </div>
  )
}

export default EditProfile;