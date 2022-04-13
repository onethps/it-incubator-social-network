let initState = {
    initializec:false
}


export const appReducer = (state = initState, action:inicilizecSuccerBoolType) => {


    switch (action.type) {
        case "INICIALIZED-SUCCERS":
            return {
                ...state,
                initializec: true
            }

        default:
            return {...state}

    }

}


export const inilizedSuccersAC = ( )=> {
    return {
        type: 'INICIALIZED-SUCCERS',
    }
}



// export const inicializetApp = ():AppThunk => {
//     return (dispatch:Dispatch) => {
// let promise = dispatch(getLoginDataThunk())
//
//         promise.then(() => {
//
//         })
//
//     }
// }

export type inicilizecSuccerBoolType = ReturnType<typeof inilizedSuccersAC>
