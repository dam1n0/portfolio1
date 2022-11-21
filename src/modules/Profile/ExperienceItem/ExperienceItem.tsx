import React from "react";
import cssm from "../Profile2.module.css";
import { GoLocation} from "react-icons/go";

export type propsType = {
    workPeriod: string
    jobPosition: string
    companyName: string
    companyLocation: string
    projectName: string
    participation: string
    experience: string
}


const ExperienceItem = (item: propsType) => {
    return (
        <div className={cssm.experienceItem}>
            <div className={cssm.bottomBorder}><span className={cssm.calendar}>{item.workPeriod}</span></div>
            <div className={cssm.dataBlock}>
                <h4 className={cssm.jobPosition}>{item.jobPosition}</h4>
                <p><b>{item.companyName}</b><span> <GoLocation/> {item.companyLocation}</span></p>
                <h4><b>Project: </b>{item.projectName}</h4>
                <p><b>Participation: </b> {item.participation}</p>
                <p><b>Experience: </b> {item.experience}</p>
            </div>
        </div>

    )
}

export default ExperienceItem