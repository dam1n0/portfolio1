import React, {useState} from "react";
import cssm from "./Profile2.module.css";
import userAvatar from "../../contentFiles/ava.jpg";
import {GoLocation} from "react-icons/go";
import {IoMailOpenOutline, IoPhonePortrait} from "react-icons/io5";
import {FaTelegramPlane} from "react-icons/fa";
import {BsBook, BsBriefcase} from "react-icons/bs";
import {experienceType, languagesType} from "../../redux/Profile-reducer";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import {profileApi} from "../../API/getProfileInfoAPI";
import loadingGif from "../../contentFiles/loadingCandle.gif";

const Profile2 = () => {
    /*const data = {
        "userMainInfo": {
            "userName": "KONOTOP MICHAEL",
            "jobPosition": "Junior Front-End Developer",
            "geoLocation": "Kharkiv, Ukraine",
            "phone": "+38(066)0695666",
            "email": "criminalist.mickail@gmail.com",
            "telegram": "@k0notop"
        },
        "Experience": [
            {
                "workPeriod": "2022 \u2013 now",
                "jobPosition": "INTEGRATION MANAGER",
                "companyName": "Freelance",
                "companyLocation": "All world",
                "projectName": "",
                "participation": "Technical specialist, integrator",
                "experience": ".",
                "technologies": "html\/css\/js php",
                "environment": "Web Storm, Postman, FileZila, Adobe Photoshop, Trello, Keitaro."
            },
            {
                "workPeriod": "2019 \u2013 2022",
                "jobPosition": "PRODUCT MANAGER",
                "companyName": "OLSEN STEINER LTD",
                "companyLocation": "Vietnam",
                "projectName": "CPA-IKON",
                "participation": "Development of a CPA marketing system",
                "experience": "Writing technical specifications for the creation of a SPA marketing system. Creation and control of main development departments (2-3 PHP developers, 1 tester. Work by scrum methodology) and Landing page development departments (4 HTML-development, 2 web-designers, 3 translators, 1 copywriter, 1 tester. Work by kanban methodology). Creation of scripts for moderation, analytics and traffic redistribution on Landing pages. GitLab repository support for over 1.5k landing pages",
                "technologies": "kanban, scrum, html\/css\/js, RestAPI",
                "environment": "Figma, Sublime Text, postman, trello, jira, gitlab, git."
            },
            {
                "workPeriod": "2015-2019",
                "jobPosition": "INTEGRATION DEPARTMENT MANAGER",
                "companyName": "AB Cloud Group LTD",
                "companyLocation": "Moscow",
                "projectName": "CPA kma.biz",
                "participation": "Configuration CRM, work with landing page content (testing), description of tasks for integration with other CRM systems (working with API documentation and postman).",
                "experience": "Familiarity with IT technologies. Testing landing pages and costom CRM. landing pages bug fixes. Work with RestAPI.",
                "technologies": "html\/css\/js, jQuery.",
                "environment": "Note pad, postman, bitrix, trello."
            }
        ],
        "summary": "I have been working in IT for 8 years. Experience with html\/css\/js\/ts, ReactJs frameworks, git, etc.",
        "education": {
            "educationPeriod": "2006-2012",
            "educationLocation": "Kharkiv, Ukraine",
            "educationPosition": "Applied materials science",
            "educationCompany": {
                "educationCompanyName": "National Technical University \u00abKharkiv Polytechnic Institute\u00bb",
                "educationCompanyUrl": "https:\/\/www.kpi.kharkov.ua\/eng\/"
            }
        },
        "technicalSkills": ["html", "css\/less", "JavaScript", "TypeScript", "ReactJS", "Redux\/toolkit", "webpack\/gulp", "RestAPI", "php", "git"],
        "languages": [{"languageName": "English", "languageLevel": "Pre-Intermediate"}],
        "hobbies": [{"hobbyName": "Football", "hobbyPhoto": "string"}, {
            "hobbyName": "Cycling",
            "hobbyPhoto": "string"
        }, {"hobbyName": "Dancing", "hobbyPhoto": "string"}, {"hobbyName": "Travel", "hobbyPhoto": "string"}]
    };*/
    const[goodSkill, setSkill] = useState(false)
    const { data , isLoading, isSuccess} = profileApi.endpoints.getProfileInfo.useQuery(goodSkill);
    return ((!isLoading && isSuccess)?
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
                    <h3>ABOUT</h3>
                    <p>{data.summary}</p>
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
                        <p key={Item} className={cssm.listItem}>/ <span className={cssm.bold}>{Item}</span></p>))}
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
                        <p><b>{data.education?.educationCompany.educationCompanyName}</b><GoLocation/> {data.education?.educationLocation}</p>
                            <p>{data.education?.educationPosition}</p>
                        </div>
                    </div>
                </div>
                <div className={cssm.leftBorder}>
                    <div className={cssm.logo}><BsBriefcase/></div>
                    <div className={cssm.leftContent}>
                        <h3>WORK EXPERIENCE</h3>
                        {data.Experience?.map((item: experienceType) => (
                            < ExperienceItem key={item.experience} {...item}/>))}
                    </div>
                </div>
            </div>
        </div>:<img className={cssm.loading} src={loadingGif} alt="LOADING" />
    )
}
export default Profile2