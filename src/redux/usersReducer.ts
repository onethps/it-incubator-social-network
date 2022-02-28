let initState: userType = {
 users: []
}

export type userType = {
 users:Array<arrayUsers>
}

export type arrayUsers = {
    id: number,
    name: string
}

export const usersReducer = (state: userType = initState, action: any): userType => {
    switch (action.type) {
        case 'SET-DATA':
            return {...state, users:[...state.users, ...action.newArray]}
        default:
            return state
    }

}


export default usersReducer