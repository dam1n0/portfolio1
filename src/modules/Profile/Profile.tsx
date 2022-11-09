import React, {useEffect, useState} from 'react'
import {useAppSelector, useAppDispatch} from "../../hooks";
import {hobbiesType, languagesType, updateAboutMe} from "../../redux/Profile-reducer";
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
	const { data , isLoading, isSuccess} = profileApi.endpoints.getProfileInfo.useQuery(goodSkill)

	return (
	(!isLoading && isSuccess)?<div className={cssm.main}>
				<div className={cssm.header}>
					<img src={userAvatar} className={cssm.userPhoto}/>
					<h1>{data.userMainInfo.userName}</h1>
					<p className={cssm.likeAlink}>{data.userMainInfo.jobPosition}</p>
					<h4><GoLocation /> {data.userMainInfo.geoLocation}</h4>
					<h4><GoDeviceMobile /> {data.userMainInfo.phone}</h4>
					<h4><GoMail /> {data.userMainInfo.email}</h4>
					<h4><GrSend /> {data.userMainInfo.telegram}</h4>
				</div>
			<div className={cssm.central}>
				<h3>Experience</h3>
				{/*data.Experience?.map((Item) =>(< ExperienceItem key={Item.experience} {...Item}/>))*/}
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
				<div>
					<h3>Hobbies</h3>
					{data.hobbies?.map((Item: hobbiesType) =>(<a key={Item.hobbyName} href={Item.hobbyPhoto} className={cssm.listItem}>{Item.hobbyName}</a>))}
				</div>
			</div>

		<button onClick={()=>setSkill(!goodSkill)}>And now</button>
			</div>:<div>Loading</div>
		)
}
export default Profile