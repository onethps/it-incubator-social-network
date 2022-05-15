import {photosTypes} from "./api";


export interface IProfile {
    aboutMe: string | null
    contacts: contactsTypes
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: photosTypes
    userId: number
}


export type contactsTypes = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}


