import {UserAPI} from "../../api/api";
import {AppThunk} from "../ReduxStore";
import {IProfile} from "../../api/profileTypes";


export type profileReducerTypes = addPostType  | setProfileType | setStatusType

export enum ActionProfileTypes{
    ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS'

}


const initialState:initialStateType = {
    postData: [
        {id: 1, message: 'Hi how are u', likes: 10},
        {id: 2, message: 'Hey, are u fine?', likes: 11},
        {id: 3, message: 'Bye bye', likes: 8},
    ],
    profile: null,
    status: ''
}

type initialStateType = {
    postData: Array<postDataType>
    profile: IProfile | null
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

export const profileReducer = (state: initialStateType = initialState, action: profileReducerTypes):initialStateType => {
    switch (action.type) {
        case ActionProfileTypes.ADD_POST:
            const newPost: newPostType = {
                id: 5,
                message: action.newMessage,
                likes: 0
            }

            return  {...state, postData: [ newPost, ...state.postData]}
        case ActionProfileTypes.SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case ActionProfileTypes.SET_STATUS:
            return {...state, status: action.status}
        default:
            return {...state}
    }

}



// types
export type addPostType = ReturnType<typeof AddPostCreator>
export type setProfileType = ReturnType<typeof setProfile>
export type setStatusType = ReturnType<typeof setStatus>



/// actions
export const AddPostCreator = (newMessage:string) => ({type: ActionProfileTypes.ADD_POST, newMessage} as const)

export const setProfile = (profileData:any) => ({type: ActionProfileTypes.SET_USER_PROFILE, profile: profileData} as const)

export const setStatus = (status:string) => ({type: ActionProfileTypes.SET_STATUS, status} as const)



//thunk
export const getUserProfileThunk = (userID:number):AppThunk => async dispatch => {
    const response = await   UserAPI.getUserProfile(userID)
    dispatch(setProfile({...response.data}))
}

export const getUserStatusThunk = (userID:number):AppThunk => async dispatch => {
    const response =  await UserAPI.getUserStatus(userID)
    dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status:string):AppThunk => async dispatch => {
    const response = await UserAPI.updateStatus(status)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}