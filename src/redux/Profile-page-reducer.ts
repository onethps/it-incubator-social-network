import {Dispatch} from "redux";
import {UserAPI} from "../api/api";
import {AppThunk} from "./redux-store";


export type profileReducerTypes = addPostType | updatePostType | setProfileType | setStatusType


const initialState:initialProfileStateType = {
    postData: [
        {id: 1, message: 'Hi how are u', likes: 10},
        {id: 2, message: 'Hey, are u fine?', likes: 11},
        {id: 3, message: 'Bye bye', likes: 8},
    ],
    profile: null,
    status: ''
}

export type initialProfileStateType = {
    postData: Array<postDataType>
    profile: any
    status:string
}

export type postDataType = {
    id:number,
    message: string,
    likes: number
}

export type newPostType = {
    id: number
    message: string
    likes: number
}

export const profilePageReducer = (state: initialProfileStateType = initialState, action: profileReducerTypes):initialProfileStateType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: newPostType = {
                id: 5,
                message: action.newMessage,
                likes: 0
            }

         return  {...state, postData: [ newPost, ...state.postData]}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }

}



export type addPostType = ReturnType<typeof AddPostCreator>
export type updatePostType = ReturnType<typeof UpdatePostCreator>
export type setProfileType = ReturnType<typeof setProfile>
export type setStatusType = ReturnType<typeof setStatus>

export const AddPostCreator = (newMessage:string) => {
    return {
        type: 'ADD-POST', newMessage
    } as const
}
export const UpdatePostCreator = (newText:string) => {
    return {
        type:'UPDATE-POST',
        newText
    } as const
}
export const setProfile = (profileData:any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profileData
    } as const
}


export const setStatus = (status:string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}







export const getUserProfileThunk = (userID:number):AppThunk => dispatch => {
        UserAPI.getUserProfile(userID).then(response => {
            return  dispatch(setProfile({...response.data}))

        })
    }

export const getUserStatusThunk = (userID:number):AppThunk => dispatch => {
        UserAPI.getUserStatus(userID).then(response => {
            return  dispatch(setStatus(response.data))
        })
    }

export const updateStatusThunk = (status:string):AppThunk => dispatch => {
        UserAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }