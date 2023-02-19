import React from "react";
import './editProfile.css';


export default function EditProfile() {
    return(
        <div className="edit-profile-wrapper" id="edit-pofile-wrapper">
            <div className="container">
                <div className="heading-wrapper">
                    <label>Make your profile look best</label>
                </div>
                <div className="name-wrapper">
                    <label className="name-label">Name</label>
                    <input className="name" id="name" placeholder="Enter your name"/>
                </div>
                <div className="profile-pic-wrapper">
                    <label className="profile-pic-label">Upload your best Pic here</label>
                    <button className="choose-profile-pic">Choose Profile Pic</button>
                </div>
                <div className="self-moto-wrapper">
                    <label className="explain-moto-label">Explain your Moto in Max 2 lines</label>
                    <textarea type="text" className="moto" placeholder="write here..." rows="3"/>
                </div>
                <div className="experience-wrapper">
                    <div className="company-name-experience-work">
                        <label className="company-name-label">Enter your company name</label>
                        <input className="company-name" placeholder="Company name"/>
                        <input className="company-experience" placeholder="time spended in this organization"/>
                        <textarea className="company-word" placeholder="explain your roles and responsibilities in this organization"/>
                    </div>
                </div>
                <div className="total-experience-wrapper">
                    <label className="experience-label">How much experience do you have?</label> 
                    <input type="numeric" className="experience-years"/>
                    <input type="numeric" className="experience-months"/>
                </div>
                <div className="technologies-wrapper">
                    
                </div>
                <div className="previous-projects-wrapper">

                </div>
                <div className="self-description-wrapper">

                </div>
                <div className="hobbies-wrapper">

                </div>
                <div className="languages-wrapper">

                </div>
            </div>
        </div>
    )
}