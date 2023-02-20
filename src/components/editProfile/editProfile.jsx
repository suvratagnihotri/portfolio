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
                        <div className="work-time">
                            <label className="from-date-label">From Date</label>
                            <input className="from-date"/>
                            <label className="to-date-label">To Date</label>
                            <input className="to-date"/>
                        </div>
                        <textarea className="company-word" placeholder="explain your roles and responsibilities in this organization"/>
                    </div>
                </div>
                <div className="total-experience-wrapper">
                    <label className="experience-label">Total years of experience you have ?</label> 
                    <input type="numeric" className="experience-years"/>
                    <input type="numeric" className="experience-months"/>
                </div>
                <div className="technologies-wrapper">
                    <label className="enchnologies-label">Enter the technologies separated by comma</label>
                    <input className="technologies-name"></input>
                </div>
                <div className="previous-projects-wrapper">
                    <label className="enchnologies-label">Enter the Projects that you have worked on or developed</label>

                </div>
                <div className="self-description-wrapper">

                </div>
                <div className="hobbies-wrapper">

                </div>
                <div className="languages-wrapper">

                </div>
                <div className="extra-wrapper">

                </div>
            </div>
        </div>
    )
}