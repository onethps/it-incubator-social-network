import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {arrayUsers, isFetchinAC, setCurrentPageAC, setTotalCountAC, setUserData} from "../../redux/usersReducer";
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


export const UsersContainer = connect(mapStateToProps, {
    setUserData, setTotalCountAC, setCurrentPageAC, isFetchinAC

})(UsersAPIComponent)

