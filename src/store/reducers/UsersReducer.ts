import {followAPI, ResponseCodes, UserAPI} from "../../api/api";
import {AppThunk} from "../ReduxStore";


export type usersReducerTypes = setUserCountType | setDataACType |
    setCurrentPageACType | isFetchinACType | isFollowType | isUnFollowType | onLoadFollowType


let initState: userType = {
    users: [],
    pageSize:10,
    totalUserCount:0,
    currentPage:1,
    isFetching:true,
    onLoadFollowStatus:[],
    portionNumber: 1
}

export type userType = {
    users:Array<arrayUsers>
    pageSize:number,
    totalUserCount:number,
    currentPage:number
    isFetching:boolean
    onLoadFollowStatus: any[]
    portionNumber:number
}
export type arrayUsers = {
    id: number,
    name: string
    followed:boolean
    status:string
    photos:photosType
}

export type photosType ={
    small: string | null
}

export const usersReducer = (state: userType = initState, action: usersReducerTypes): userType => {
    switch (action.type) {

        case 'SET-TOTAL-USER-COUNT':
            return {...state, totalUserCount: action.count}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.page}
        case 'SET-DATA':
            return {...state, users:action.newArray}
        case 'SET-ISFETCHING-LOADER':
            return {...state, isFetching:action.load}
        case 'SET-FOLLOW' : {
            return {...state, users: state.users.map((m => m.id === action.userID ? {...m, followed:true}: m))}
        }
        case 'SET-UNFOLLOW': {
            return {...state, users: state.users.map((m => m.id === action.userID ? {...m, followed:false}: m))}
        }

        case 'SET-ONLOAD-FOLLOW-STATUS': {
            const filterStatus = state.onLoadFollowStatus.filter(f => f !== action.userId)

            return {...state, onLoadFollowStatus: action.isFetching ?  filterStatus :
                    [...state.onLoadFollowStatus, action.userId]

            }
        }
        default:
            return state
    }

}

export default usersReducer

type setUserCountType = ReturnType<typeof setTotalCountAC>
type setDataACType = ReturnType<typeof setUserData>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type isFetchinACType = ReturnType<typeof isFetchinAC>
type isFollowType = ReturnType<typeof isFollowAC>
type isUnFollowType = ReturnType<typeof isUnFollowAC>
type onLoadFollowType = ReturnType<typeof onLoadFollowAC>

export const setTotalCountAC = (count:number) => {
    return {
        type:'SET-TOTAL-USER-COUNT',
        count,
    } as const
}
export const setUserData = (newArray:any[]) => {
    return {
        type: 'SET-DATA',
        newArray,
    } as const
}
export const setCurrentPageAC = (page:number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        page
    } as const
}
export const isFetchinAC = (load:boolean) => {
    return {
        type: 'SET-ISFETCHING-LOADER',
        load
    } as const
}

export const isFollowAC = (userID:number) => {
    return {
        type: 'SET-FOLLOW',
        userID
    } as const
}
export const isUnFollowAC = (userID:number) => {
    return {
        type: 'SET-UNFOLLOW',
        userID
    } as const
}

export const onLoadFollowAC = (isFetching:boolean, userId:number) => {
    return {
        type: 'SET-ONLOAD-FOLLOW-STATUS',
        isFetching,
        userId,

    } as const
}



export const getUserThunk = (currentPage:number, pageSize:number):AppThunk => async dispatch => {
    dispatch(isFetchinAC(false))

    try {
        const response = await UserAPI.getUsers(currentPage, pageSize)
        dispatch(isFetchinAC(true))
        dispatch(setUserData([...response.data.items]))
        // commented, cuz aloft of pages shows, first time we get only 5 pages
        // if needed to show all pages - uncomment second string
        dispatch(setTotalCountAC(response.data.totalCount))
    } catch (e) {
        console.log(e)
    }

}

export const setCurrentPageThunk = (pageNumber:number, pageSize:number):AppThunk => async dispatch => {
    dispatch(isFetchinAC(false))
    try {
        const response = await UserAPI.getCurrentPage(pageNumber, pageSize)
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(isFetchinAC(true))
        dispatch(setUserData([...response.data.items]))
    } catch (e) {
        console.log(e)
    }

}


const followUnfollowFlow = async (dispatch:any, userID:number, apiMethod:any, action:any) => {
    dispatch(onLoadFollowAC(false, userID))
    let response = await apiMethod(userID)
    if (response.data.resultCode === ResponseCodes.SUCCESS) {
        dispatch(action(userID))
    }
    dispatch(onLoadFollowAC(true, userID))
}


export const FollowThunk = (userID:number):AppThunk => {
    return async dispatch => {
        let apiMethod = followAPI.postFollow.bind(userID)
        let action = isFollowAC
        followUnfollowFlow(dispatch, userID, apiMethod,action)


        // dispatch(onLoadFollowAC(false, userID))
        // let response = await followAPI.postFollow(userID)
        // if (response.data.resultCode === 0) {
        //     dispatch(isFollowAC(userID))
        // }
        // dispatch(onLoadFollowAC(true, userID))
    }

}

export const UnfollowThunk = (userID:number):AppThunk => {
    return async dispatch => {
        let apiMethod = followAPI.deleteFollow.bind(userID)
        let action = isUnFollowAC
        followUnfollowFlow(dispatch, userID, apiMethod,action)
    }
}












