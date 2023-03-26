import React,{useContext} from 'react';
import { AppContext } from '../App';
import './experience.css';


function Experience() {
    const { companyName,
            companyDomain,
            userProfile,
            timePeriod,
            workDescription
        } = useContext(AppContext)
  return (
    <div className='experience-container'>
        <div className='left-half-container'>
            <div className='first-experience-container'>
                <div className='company-name'>
                    {companyName}
                </div>
                <div className='company-domain'>
                    ({companyDomain})
                </div>
                <div className='time-period'>
                    {timePeriod}
                </div>
                <div className='your-role'>
                    {userProfile}
                </div>
                <div className='work-description'>
                    <p>
                        {/* My main role was to learn and implement the same in the project.I have developed a few projects over there like, "Telegram Chatbot". */}
                        {workDescription}
                    </p>
                </div>
            </div>
        </div>
        <div className='right-half-container'>
            <div className='second-experience-container'>
                <div className='company-name'>
                        Gingerwebs Pvt. Ltd.
                </div>
                <div className='company-domain'>
                    (Assessment Domain)
                </div>
                <div className='time-period'>
                    2 years
                </div>
                <div className='your-role'>
                    Java Developer (Software Developer)
                </div>
                <div className='work-description'>
                    <p style={{fontSize: "1rem"}}>
                        I have joined this organisation as a software developer, 
                        and beacause of my good performance I was on development from the very second month of my training.
                         I have worked on different kind of projects like, "Secure Browser"(crossplatform desktop application) ,
                          spring boot api's, python pre-trained data models, cloud technologies like aws ec2, aws lambda, aws s3 etc.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience;