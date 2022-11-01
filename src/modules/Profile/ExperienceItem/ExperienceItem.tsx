import React from "react";
import cssm from "../Profile.module.css";
import { GoCalendar, GoLocation} from "react-icons/go";

export type propsType = {
    workPeriod: string
    jobPosition: string
    companyName: string
    companyLocation: string
    projectName: string
    participation: string
    experience: string
    technologies: string
    environment: string
}


const ExperienceItem = (item: propsType) => {
    return (
        <div className={cssm.experienceItem} >
            <span className={cssm.calendar}><GoCalendar /> {item.workPeriod}</span>
            <h4>{item.jobPosition}</h4>
            <a className={cssm.likeAlink} href={'google.com'}>{item.companyName}</a>
            <span> <GoLocation/> {item.companyLocation}</span>
            <h4><b>Project: </b>{item.projectName}</h4>
            <p><b>Participation: </b> {item.participation}</p>
            <p><b>Experience: </b> {item.experience}</p>
            <p><b>Technologies: </b> {item.technologies}</p>
            <p><b>Environment: </b> {item.environment}</p>
        </div>

)
}

export default ExperienceItem