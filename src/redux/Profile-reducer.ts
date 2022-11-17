import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type userMainInfoType = {
    userName: string
    jobPosition: string
    geoLocation: string
    phone: string
    email: string
    telegram: string
}
export type languagesType = {
    languageName: string
    languageLevel: string
}
export type hobbiesType = {
    hobbyName: string
    hobbyPhoto: string
}
type educationCompanyType = {
    educationCompanyName: string
    educationCompanyUrl: string
}
export type experienceType = {
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

type initialStateType = {
    userMainInfo: userMainInfoType | null
    Experience: Array<experienceType> | null
    summary: string | null
    education:{
        educationPeriod: string
        educationLocation: string
        educationPosition: string
        educationCompany: educationCompanyType
    } | null
    technicalSkills: Array<string> | null
    languages: Array<languagesType> | null
    hobbies: Array<hobbiesType> | null

}


let initialState: initialStateType = {
    userMainInfo: null,
    Experience: null,
    summary: null,
    education: null,
    technicalSkills: null,
    languages: null,
    hobbies: null
}

const ProfileReducer = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateAboutMe(state, action: PayloadAction<initialStateType>) { //можно задать обьект из initialState в <string>
            state = action.payload
        }
    }
})

export const {updateAboutMe} = ProfileReducer.actions;
export default ProfileReducer.reducer;