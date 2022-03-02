import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {arrayUsers, isFetchinAC, setCurrentPageAC, setDataAC, SetUserCountAC} from "../../redux/usersReducer";
import UsersC from "./UsersAPIComponent";
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateType = {
    userData: Array<arrayUsers>
    totalUserCount:number
    currentPage:number
    pageSize:number
    isFetching:boolean

}

export const mapStateToProps = (props: AppStateType):mapStateType => {
    return {
        userData: props.usersPage.users,
        totalUserCount: props.usersPage.totalUserCount,
        currentPage: props.usersPage.currentPage,
        pageSize: props.usersPage.pageSize,
        isFetching: props.usersPage.isFetching

    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUserData: (newArray:any[]) => {
            dispatch(setDataAC(newArray))
        },
        setTotalCountAC: (count:number) => {
            dispatch(SetUserCountAC(count))
        },
        setCurrentPageAC: (page:number) => {
            dispatch(setCurrentPageAC(page))
        },
        isFetchinAC: (load:boolean) => {
            dispatch(isFetchinAC(load))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

