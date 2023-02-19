import React from "react";
import './Sidebar.css';
import {CgProfile} from 'react-icons/cg';
import {GrMailOption} from 'react-icons/gr';
import {BiPhoneCall} from 'react-icons/bi';
import {FiLinkedin} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';




export default function Sidebar() {
    return (
      <div className="sidebar-wrapper" id="sidebar-main-container">
        <div className="profile-wrapper">
          <CgProfile className="profile-logo"></CgProfile>
        </div>
        <div className="contact-info-wrapper">
          <div className="mail-wrapper">
            <GrMailOption className="mail-logo"></GrMailOption>
          </div>
          <div className="phone-wrapper">
            <BiPhoneCall className="phone-logo"></BiPhoneCall>
          </div>
          <div  className="linkedin-wrapper">
            <FiLinkedin className="linkedin-logo"></FiLinkedin>
          </div>
          <div className="github-wrapper">
            <BsGithub className="github-logo"></BsGithub>
          </div>
        </div>
      </div>
    )
}