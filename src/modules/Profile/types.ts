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
    experience: string[] | []
    technologies: string
    environment: string
}

export type dataType = {
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