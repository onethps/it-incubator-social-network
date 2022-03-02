let initState: userType = {
    users: [],
    pageSize:4,
    totalUserCount:20,
    currentPage:1,
    isFetching:false
}

export type userType = {
    users:Array<arrayUsers>
    pageSize:number,
    totalUserCount:number,
    currentPage:number
    isFetching:boolean
}

export type arrayUsers = {
    id: number,
    name: string
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
        default:
            return state
    }

}


export default usersReducer



type ActionTypes = setUserCountType | setDataACType | setCurrentPageACType | isFetchinACType

type setUserCountType = ReturnType<typeof SetUserCountAC>
type setDataACType = ReturnType<typeof setDataAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type isFetchinACType = ReturnType<typeof isFetchinAC>

export const SetUserCountAC = (count:number) => {
    return {
        type:'SET-TOTAL-USER-COUNT',
        count
    } as const
}
export const setDataAC = (newArray:any[]) => {
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
