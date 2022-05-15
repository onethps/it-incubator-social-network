import {authAPI, ResponseCodes} from "../../api/api";
import {AppThunk} from "../ReduxStore";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";


export type authReducerTypes = getDataACType | stopSubmitType


let initState: initStateAuthType = {
    id:null,
    email:null,
    login:null,
    isAuth: false
}

export type initStateAuthType = {
    id:number | null,
    email:string | null,
    login:string | null,
    isAuth: boolean
}

export const authReducer = (state: initStateAuthType = initState, action: authReducerTypes): initStateAuthType => {
    switch (action.type) {

        case 'AUTH-STATUS':
            return {...state,
                ...action.payload
            }

        default:
            return state
    }

}


export default authReducer



type getDataACType = ReturnType<typeof getDataAC>
type stopSubmitType = ReturnType<typeof stopSubmit>

export const getDataAC = (payload:initStateAuthType) => {
    return {
        type: 'AUTH-STATUS',
        payload
    } as const
}




export const getLoginDataThunk = ():AppThunk  =>  async dispatch => {
    let response =  await authAPI.getLoginData()
    let {email, login, id} = response.data.data
    if (response.data.resultCode === ResponseCodes.SUCCESS) {
        dispatch(getDataAC({id, email, login, isAuth:true}))
    }

}


export const loginization = (email:string, password:string, rememberMe:boolean):AppThunk => async dispatch => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === ResponseCodes.SUCCESS){
            dispatch(getLoginDataThunk())
        } else  {
            let message = response.data.messages.length ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error:message}))
        }
    })
}



export const LogoutTC = ():AppThunk => dispatch => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getDataAC({id:null, login:null, email:null, isAuth:false}))
        }
    })
}


