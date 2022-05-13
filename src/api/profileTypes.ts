import {photosTypes} from "./api";


export interface IProfile {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsTypes
    photos: photosTypes
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