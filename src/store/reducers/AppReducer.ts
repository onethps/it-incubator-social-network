import {AppThunk} from "../ReduxStore";
import {getLoginDataThunk} from "./AuthReducer";

let initState = {
    initializec:false
}


export const appReducer = (state = initState, action:initializeAppACType) => {
    switch (action.type) {
        case "APP/INITIALIZE-APP":
            return {
                ...state,
                initializec: true
            }
        default:
            return state

    }
}

export const initializerSuccersAC = () => {
    return {
        type: 'APP/INITIALIZE-APP',
    }
}

export const initializeAppAC = ():AppThunk => dispatch => {
    new Promise((res) => {
        res(dispatch(getLoginDataThunk()))
    }).then(() => {
        dispatch(initializerSuccersAC())
    })

}

export type initializeAppACType = ReturnType<typeof initializerSuccersAC>
