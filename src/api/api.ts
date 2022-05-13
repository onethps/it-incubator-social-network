import axios, {AxiosResponse} from "axios";
import {IProfile} from "./profileTypes";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '53743326-f61f-4a39-ac8a-be7cd4a5c568'
    }
})

//User API'S


interface IUser {
    name:string
    id:number
    status:string
    photos: photosTypes
    followed:boolean
}

export type photosTypes =  {
    small:string
    large:string
}

type responseUsers = {
    error: null | string
    items: IUser[]
    totalCount: number
}

type ResponseType<D = {}> = {
    data: D
    fieldsErrors?: D
    messages: Array<any>
    resultCode: number
}


type authMeType = {
    email:string,
    id:number,
    login:string

}


export enum ResponseCodes {
    SUCCESS = 0,
}




export const UserAPI = {

    getUsers(currentPage: number, pageSize: number) {
        return instance.get<responseUsers>(`users?page=${currentPage}&count=${pageSize}`)
    },
    getCurrentPage (pageNumber:number, pageSize:number){
        return  instance.get<responseUsers>(`users?page=${pageNumber}&count=${pageSize}`)
    },

    ///PostContainer API'S

    getUserProfile (userID:number) {
        return instance.get<IProfile>(`profile/${userID}`)

    },
    getUserStatus (userID:number) {
        return instance.get<string>(`profile/status/${userID}`)

    },
    updateStatus (status:string) {
        return instance.put<ResponseType>(`profile/status/`, {status})

    },

///header API'S


}

export const followAPI = {

    deleteFollow (userID:number) {
        return instance.delete(`follow/${userID}`)
    },
    postFollow (userID:number) {
        return instance.post(`follow/${userID}`)
    }
}



export const authAPI ={
    getLoginData () {
        return instance.get<ResponseType<authMeType>>(`auth/me`)
    },
    login (email:string, password:string, rememberMe:boolean = false) {
        return instance.post<ResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete<ResponseType>(`auth/login`)
    }

}





