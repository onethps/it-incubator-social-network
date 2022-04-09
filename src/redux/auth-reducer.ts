import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatch} from "./redux-store";


type authGlobalTypes = getDataACType
let initState: dataType = {
    id:null, email:null, login:null, isAuth: false
}

export type dataType = {
    id:number | null, email:string | null, login:string | null, isAuth: boolean
}

export const authReducer = (state: dataType = initState, action: authGlobalTypes): dataType => {
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

export const getDataAC = (payload:dataType) => {
    return {
        type: 'AUTH-STATUS',
        payload
    } as const
}




export const getLoginDataThunk = () => {
    return (dispatch: AppDispatch) => {
        authAPI.getLoginData()
            .then(data => {
                let {email, id, login } = data.data
                if (data.resultCode === 0) {
                    dispatch(getDataAC({id, email, login, isAuth:true}))
                }
            })

    }
}


export const loginization = (email:string, password:string, rememberMe:boolean) => {
    return (dispatch:AppDispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0){
                dispatch(getLoginDataThunk())
            }
        })
    }
}



export const LogoutTC = () => {
    return (dispatch:AppDispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getDataAC({id:null, login:null, email:null, isAuth:false}))
            }
        })
    }
}


