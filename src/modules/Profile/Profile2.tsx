import cssm from "./Profile2.module.css";
import userAvatar from "../../contentFiles/ava.jpg";
import {GoLocation} from "react-icons/go";
import {IoMailOpenOutline, IoPhonePortrait} from "react-icons/io5";
import {FaTelegramPlane} from "react-icons/fa";
import {BsBook, BsBriefcase} from "react-icons/bs";
import {experienceType, languagesType} from "./types";
import ExperienceItem from "./ExperienceItem/ExperienceItem";

import data from "./profile.json"


const Profile2 = () => {

    return (
        <div className={cssm.main}>
            <div className={cssm.header}>

                <img src={userAvatar} className={cssm.userPhoto}/>
                <h1>{data.userMainInfo.userName}</h1>
                <p className={cssm.jobPosition}>DESIRED POSITION: {data.userMainInfo.jobPosition}</p>

            </div>
            <div className={cssm.leftPanel}>
                <div className={cssm.headerContacts}>
                    <h3>CONTACTS</h3>
                    <p><GoLocation/> {data.userMainInfo.geoLocation}</p>
                    <p><IoPhonePortrait/> {data.userMainInfo.phone}</p>
                    <p><IoMailOpenOutline/> {data.userMainInfo.email}</p>
                    <p><FaTelegramPlane/> {data.userMainInfo.telegram}</p>
                </div>
                <div>
                    <h3>SUMMARY:</h3>
                    {data.summary?.map((Item: string) => (
                        <p key={Item} className={cssm.listItem}>➤ <span>{Item}</span></p>))}
                </div>
                <div>
                    <h3>LANGUAGES</h3>
                    {data.languages?.map((Item: languagesType) => (<p key={Item.languageName}
                                                                      className={cssm.listItem}>/ <span
                        className={cssm.bold}>{Item.languageName}</span> ({Item.languageLevel})</p>))}
                </div>
                <div>
                    <h3>SKILLS</h3>
                    {data.technicalSkills?.map((Item: string) => (
                        <p key={Item} className={cssm.listItem}>✓ <span className={cssm.bold}>{Item}</span></p>))}
                </div>
            </div>
            <div className={cssm.rightPanel}>
                <div className={cssm.leftBorder}>
                    <div className={cssm.logo}><BsBook/></div>
                    <div className={cssm.leftContent}>
                        <h3>EDUCATION</h3>
                        <div className={cssm.bottomBorder}><span
                            className={cssm.calendar}>{data.education?.educationPeriod}</span></div>
                        <div className={cssm.dataBlock}>
                        <p><b>{data.education?.educationCompany.educationCompanyName}</b>
                            <GoLocation/> {data.education?.educationLocation}</p>
                            <p>{data.education?.educationPosition}</p>
                        </div>
                    </div>
                </div>
                <div className={cssm.leftBorder}>
                    <div className={cssm.logo}><BsBriefcase/></div>
                    <div className={cssm.leftContent}>
                        <h3>WORK EXPERIENCE</h3>
                        {data.Experience?.map((item: experienceType) => (
                            < ExperienceItem key={item.workPeriod} {...item}/>))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile2