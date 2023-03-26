import React,{useContext} from 'react';
import { AppContext } from '../App';
import './BriefIntroduction.css';
import profile from '../static/images/profile.jpg'

function BriefIntroduction() {
    const {userName} = useContext(AppContext);
  return (
    <div>
        <div className="info-wrapper">
                <div className="info">
                    <div className='brief-introduction-wrapper'>
                        <h2 className='introduction'>
                            <h3 id='name'>{userName}</h3>
                            <div className='message'>
                                <div id='word1'>Java Developer</div>
                                <div id='word2'>Software Eng.</div>
                                <div id='word2'>2 Years Exp.</div>
                            </div>
                        </h2>
                    </div>
                    <div className='profile-wrapper'>
                        <div className='profile-pic'>
                            <img className='profile' src={profile} alt="profile-pic" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BriefIntroduction;