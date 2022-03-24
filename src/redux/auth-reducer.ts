import {Dispatch} from "redux";
import {UserAPI} from "../api/api";

let initState: dataType = {
    id:null,
    email:null,
    login:null,
    isAuth: false
}

export type dataType = {
    id:any,
    email:any,
    login:any
    isAuth: boolean
}

export const authReducer = (state: dataType = initState, action: authGlobalTypes): dataType => {
    switch (action.type) {

        case 'AUTH-ON-SITE':
            return {...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }

}


export default authReducer

type authGlobalTypes = getDataACType

type getDataACType = ReturnType<typeof getDataAC>

export const getDataAC = (data:dataType) => {
    return {
        type: 'AUTH-ON-SITE',
        data
    } as const
}


export const getLoginDataThunk = () => {
    return (dispatch: Dispatch) => {
        UserAPI.getLoginData()
            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(getDataAC(data.data))
                }
            })

    }
}

