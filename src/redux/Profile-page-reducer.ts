import {Dispatch} from "redux";
import {UserAPI} from "../api/api";

let initialState:initialProfileStateType = {
    postData: [
        {id: 1, message: 'Hi how are u', likes: 10},
        {id: 2, message: 'Hey, are u fine?', likes: 11},
        {id: 3, message: 'Bye bye', likes: 8},
    ],
    newPostText: 'some text',
    profile: null,
    status: ''
}

export type initialProfileStateType = {
    postData: Array<postDataType>
    newPostText:string
    profile: any
    status:string
}



export type userProfileType ={
    userId:number
    aboutMe:string
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

export const profilePageReducer = (state: initialProfileStateType = initialState, action: GlobalPostType):initialProfileStateType => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: newPostType = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }

         return  {...state, postData: [ newPost, ...state.postData], newPostText: ''}

        case 'UPDATE-POST':
            return {...state, newPostText: action.newText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-STATUS':
            return {...state, status: action.status}
        default:
            return {...state}
    }

}

export type GlobalPostType = addPostType | updatePostType | setProfileType | setStatusType


export type addPostType = ReturnType<typeof AddPostCreator>
export type updatePostType = ReturnType<typeof UpdatePostCreator>
type setProfileType = ReturnType<typeof setProfile>
type setStatusType = ReturnType<typeof setStatus>

export const AddPostCreator = () => {
    return {
        type: 'ADD-POST',
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







export const getUserProfileThunk = (userID:number) => {
    return (dispatch:Dispatch) => {
        UserAPI.getUserProfile(userID).then(response => {
            return  dispatch(setProfile({...response.data}))

        })
    }
}


export const getUserStatusThunk = (userID:number) => {
    return (dispatch:Dispatch) => {
        UserAPI.getUserStatus(userID).then(response => {
            return  dispatch(setStatus(response.data))
        })
    }
}


///
export const updateStatusThunk = (status:string) => {
    return (dispatch:Dispatch) => {
        UserAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}
