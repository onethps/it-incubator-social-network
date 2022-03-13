let initState: userType = {
    users: [],
    pageSize:4,
    totalUserCount:20,
    currentPage:1,
    isFetching:false,
    isDisableArray: [22814]
}

export type userType = {
    users:Array<arrayUsers>
    pageSize:number,
    totalUserCount:number,
    currentPage:number
    isFetching:boolean
    isDisableArray:  Array<number>
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
        case 'TOGGLE-DISABLE-BUTTON': {
            return {...state,
              isDisableArray: action.isFetching ? [...state.isDisableArray, action.userID] :
                  state.isDisableArray.filter(f => f !== action.userID)
            }
        }
        default:
            return state
    }

}


export default usersReducer



type ActionTypes = setUserCountType | setDataACType |
    setCurrentPageACType | isFetchinACType | isFollowType | isUnFollowType | isToggleDisableType

type setUserCountType = ReturnType<typeof setTotalCountAC>
type setDataACType = ReturnType<typeof setUserData>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type isFetchinACType = ReturnType<typeof isFetchinAC>
type isFollowType = ReturnType<typeof isFollowAC>
type isUnFollowType = ReturnType<typeof isUnFollowAC>
type isToggleDisableType = ReturnType<typeof isToggleDisableAC>


export const setTotalCountAC = (count:number) => {
    return {
        type:'SET-TOTAL-USER-COUNT',
        count
    } as const
}
export const setUserData = (newArray:any[]) => {
    return {
        type: 'SET-DATA',
        newArray
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

export const isToggleDisableAC = (userID:number, isFetching:boolean) => {
    return {
        type: 'TOGGLE-DISABLE-BUTTON',
        userID,
        isFetching
    } as const
}
