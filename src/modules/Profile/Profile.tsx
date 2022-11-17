import React, {useState} from 'react'
import {useAppSelector, useAppDispatch} from "../../hooks";
import {experienceType, hobbiesType, languagesType} from "../../redux/Profile-reducer";
import cssm from "./Profile.module.css";
import userAvatar from "../../contentFiles/ava.jpg";
import ExperienceItem from "./ExperienceItem/ExperienceItem";
import { GoCalendar, GoDeviceMobile, GoMail, GoLocation} from "react-icons/go";
import { GrSend } from "react-icons/gr";
import {profileApi} from "../../API/getProfileInfoAPI";



const Profile = () => {
	/*const profile = useAppSelector((state)=> state.Profile);
	const dispatch = useAppDispatch();*/
	const[goodSkill, setSkill] = useState(false)
	//заглушка для локалки
	//const { data , isLoading, isSuccess} = profileApi.endpoints.getProfileInfo.useQuery(goodSkill);
	const data={"userMainInfo":{"userName":"Konotop Michael","jobPosition":"Junior Front-End Developer","geoLocation":"Kharkiv, Ukraine","phone":"+38(066)0695666","email":"criminalist.mickail@gmail.com","telegram":"@k0notop"},"Experience":[{"workPeriod":"2022 \u2013 now","jobPosition":"Integration Manager","companyName":"Freelance","companyLocation":"All world","projectName":"","participation":"Technical specialist, integrator","experience":"Server administration, installation and configuration of trackers, hosting, domains. Landing page creation, Rest API integration, Cloaking","technologies":"html\/css\/js php","environment":"Web Storm, Postman, FileZila, Adobe Photoshop, Trello, Keitaro"},{"workPeriod":"2019 \u2013 2022","jobPosition":"Product Manager","companyName":"OLSEN STEINER LTD","companyLocation":"Vietnam","projectName":"CPA-IKON","participation":"Development of a CPA marketing system","experience":"Writing technical specifications for the entire system. Creation and control of main-development, HTML-development, integration departments. Manual testing, ","technologies":"kanban, scrum, html\/css\/js, RestAPI","environment":"Figma, Sublime Text, postman, trello, jira, gitlab, git."},{"workPeriod":"2015-2019","jobPosition":"Integration department manager","companyName":"AB Cloud Group LTD","companyLocation":"Moscow","projectName":"CPA kma.biz","participation":"CRM configuration, work with site content (testing), description of integration tasks with other CRM systems (working with API documentation).","experience":"Familiarity with IT technologies. HTML codding, testing landing pages and CRM, work with RestAPI ","technologies":"html\/css\/js, jQuery.","environment":"Note pad, postman, bitrix, trello."}],"summary":"I've been working as outstaff developer for 5 years and 10 years as a developer in general. Experienced in html\/css\/js\/ts, VueJs and ReactJs frameworks,webpack, git etc.","education":{"educationPeriod":"2006-2012","educationLocation":"Kharkiv, Ukraine","educationPosition":"Applied materials science","educationCompany":{"educationCompanyName":"National Technical University \u00abKharkiv Polytechnic Institute\u00bb","educationCompanyUrl":"https:\/\/www.kpi.kharkov.ua\/eng\/"}},"technicalSkills":["html","css\/scss\/less","js","ts","React","Redux\/toolkit","webpack\/gulp","RestAPI","php","git"],"languages":[{"languageName":"English","languageLevel":"Pre-Intermediate"},{"languageName":"Ukraine","languageLevel":"native"},{"languageName":"Russian","languageLevel":"native"}],"hobbies":[{"hobbyName":"Football","hobbyPhoto":"string"},{"hobbyName":"Cycling","hobbyPhoto":"string"},{"hobbyName":"Dancing","hobbyPhoto":"string"},{"hobbyName":"Travel","hobbyPhoto":"string"}]}
	const isSuccess = true;
	const isLoading = false;
	//заглушка для локалки
	return (
	(!isLoading && isSuccess)?<div className={cssm.main}>
				<div className={cssm.header}>
					<div className={cssm.headerProfile}>
					<img src={userAvatar} className={cssm.userPhoto}/>
					<h1>{data.userMainInfo.userName}</h1>
					<p className={cssm.likeAlink}>{data.userMainInfo.jobPosition}</p>
					</div>
					<div className={cssm.headerContacts}>
						<h4><GoLocation /> {data.userMainInfo.geoLocation}</h4>
						<h4><GoDeviceMobile /> {data.userMainInfo.phone}</h4>
						<h4><GoMail /> {data.userMainInfo.email}</h4>
						<h4><GrSend /> {data.userMainInfo.telegram}</h4>
					</div>
				</div>
			<div className={cssm.central}>
				<h3>Experience</h3>
				{data.Experience?.map((item:experienceType) =>(< ExperienceItem key={item.experience} {...item}/>))}
			</div>
			<div className={cssm.rightPanel}>
				<div>
					<h3>Summary</h3>
					<p>{data.summary}</p>
				</div>
				<div>
					<h3>Education</h3>
					<p className={cssm.calendar}><GoCalendar /> {data.education?.educationPeriod}</p>
					<p><GoLocation /> {data.education?.educationLocation}</p>
					<p>{data.education?.educationPosition}</p>
					<a className={cssm.likeAlink} href={data.education?.educationCompany.educationCompanyUrl}>{data.education?.educationCompany.educationCompanyName}</a>
				</div>
				<div>
					<h3>Technical Skills</h3>
						{data.technicalSkills?.map((Item:string) =>(<span key={Item} className={cssm.listItem}>{Item}</span>))}
				</div>
				<div>
					<h3>Languages</h3>
					{data.languages?.map((Item: languagesType) =>(<span key={Item.languageName} className={cssm.listItem}>{Item.languageName} ({Item.languageLevel})</span>))}
				</div>
				{/*<div>
					<h3>Hobbies</h3>
					{data.hobbies?.map((Item: hobbiesType) =>(<a key={Item.hobbyName} href={Item.hobbyPhoto} className={cssm.listItem}>{Item.hobbyName}</a>))}
				</div>*/}
			</div>

		<button className={cssm.button} onClick={()=>setSkill(!goodSkill)}>{goodSkill?"Back to truth":"Not enough skills"}</button>
			</div>:<div>loading</div>
		)
}
export default Profile