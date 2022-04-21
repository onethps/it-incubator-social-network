import {AppStateType} from "../../redux/redux-store";

export const getUSers = (state:AppStateType) => {
    return state.usersPage.users
}

export const getTotalUserCount = (state:AppStateType) => {
    return state.usersPage.totalUserCount
}

export const getcurrentPage = (state:AppStateType) => {
    return state.usersPage.currentPage
}

export const getPageSize = (state:AppStateType) => {
    return state.usersPage.pageSize
}
export const getisFetching = (state:AppStateType) => {
    return state.usersPage.isFetching
}

export const getOnLoadFollowStatus = (state:AppStateType) => {
    return state.usersPage.onLoadFollowStatus
}