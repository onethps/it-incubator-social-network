import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {arrayUsers, FollowThunk, getUserThunk, setCurrentPageThunk, UnfollowThunk} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";


type mapStateType = {
    userData: Array<arrayUsers>
    totalUserCount:number
    currentPage:number
    pageSize:number
    isFetching:boolean
    onLoadArray: any[]

}

export const mapStateToProps = (props: AppStateType):mapStateType => {
    return {
        userData: props.usersPage.users,
        totalUserCount: props.usersPage.totalUserCount,
        currentPage: props.usersPage.currentPage,
        pageSize: props.usersPage.pageSize,
        isFetching: props.usersPage.isFetching,
        onLoadArray: props.usersPage.onLoadFollowStatus

    }
}


export const UsersContainer = connect(mapStateToProps, {
    getUserThunk,
    setCurrentPageThunk,UnfollowThunk, FollowThunk

})(UsersAPIComponent)

