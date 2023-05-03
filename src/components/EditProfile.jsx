import React, { useState } from 'react';
import './editProfile.css';
import {useContext} from 'react';
import {AppContext} from "../App";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";


function EditProfile() {
  const[numberOfExperience,setNumberOfExperience] = useState(1);
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

  function addNumberOfExperiences(){
    setNumberOfExperience(numberOfExperience+1);
  }

  function minusNumberOfExperiences(){
    if(numberOfExperience===0){
      document.getElementById("experienceWrapper").style.display = "none";
    }
    else if(numberOfExperience>0){
      setNumberOfExperience(numberOfExperience-1);
    }
  }

  return (
    <div className='mainContainer'>
        <div className='userName-wrapper'>
            <label className='name-label' >Name</label>
            <input className='userName' placeholder='enter your name' onChange={nameChanged} />
        </div>
        <div className='experienceWrapper' id='experienceWrapper'>
          <label className='experiencelabel'>Number of Experiences: {numberOfExperience}</label>
          <AiOutlinePlusSquare className='addNumberOfExperience' onClick={addNumberOfExperiences}>
          </AiOutlinePlusSquare>
          <AiOutlineMinusSquare className='minusNumberOfExperience' onClick={minusNumberOfExperiences}>
          </AiOutlineMinusSquare>
          {
          [...Array(numberOfExperience)].map(function (){
            return(
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
            )
          })
        }
        </div>
        
        
        <button onClick={submitHandle}>
              Submit
        </button>
    </div>
  )
}

export default EditProfile;