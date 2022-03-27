import {Dispatch} from "redux";
import {followAPI, UserAPI} from "../api/api";

let initState: userType = {
    users: [],
    pageSize:4,
    totalUserCount:20,
    currentPage:1,
    isFetching:true,
    onLoadFollowStatus:[22996]
}

export type userType = {
    users:Array<arrayUsers>
    pageSize:number,
    totalUserCount:number,
    currentPage:number
    isFetching:boolean
    onLoadFollowStatus: any[]
}
export type arrayUsers = {
    id: number,
    name: string
    followed:boolean
}

export const usersReducer = (state: userType = initState, action: ActionTypes): userType => {
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
            return {...state, onLoadFollowStatus: action.isFetching ?  state.onLoadFollowStatus.filter(f => f !== action.userId) :
                    [...state.onLoadFollowStatus, action.userId]

            }
        }
        default:
            return state
    }

}


export default usersReducer



type ActionTypes = setUserCountType | setDataACType |
    setCurrentPageACType | isFetchinACType | isFollowType | isUnFollowType | onLoadFollowType

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



export const getUserThunk = (currentPage:number, pageSize:number) => {

    return (dispatch: Dispatch) => {
        dispatch(isFetchinAC(false))
        UserAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isFetchinAC(true))
                dispatch(setUserData([...data.items]))
                // commented, cuz aloft of pages shows, first time we get only 5 pages
                // if needed to show all pages - uncomment second string
                // dispatch(setTotalCountAC(data.totalCount))
            })
    }
}

export const setCurrentPageThunk = (pageNumber:number, pageSize:number) => {

    return (dispatch: Dispatch) => {

        dispatch(isFetchinAC(false))
        dispatch(setCurrentPageAC(pageNumber))
        UserAPI.getCurrentPage(pageNumber, pageSize).then(data => {
            dispatch(isFetchinAC(true))
            dispatch(setUserData([...data.items]))

        })

    }
}


export const UnfollowThunk = (userID:number) => {
    return (dispatch: Dispatch) => {

        dispatch(onLoadFollowAC(false, userID))
        followAPI.deleteFollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(isUnFollowAC(userID))
            }
            dispatch(onLoadFollowAC(true, userID))
        })

    }
}

export const FollowThunk = (userID:number) => {
    return (dispatch: Dispatch) => {

        dispatch(onLoadFollowAC(false, userID))
        followAPI.postFollow(userID).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(isFollowAC(userID))
            }
            dispatch(onLoadFollowAC(true, userID))
        })

    }
}










