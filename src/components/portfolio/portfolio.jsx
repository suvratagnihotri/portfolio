import React from "react";
import EditProfile from "../editProfile/editProfile";
import Sidebar from "../sidebar/Sidebar";
import './portfolio.css';


export default function Portfolio() {
    return(
        <div className="portfolio-main-wrapper">
            <Sidebar></Sidebar>
            <EditProfile></EditProfile>
        </div>
    )
}