import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {userType} from "../../redux/usersReducer";
import UsersC from "./UsersC";


type mapStateType = {
    userData: userType
}

export const mapStateToProps = (props: AppStateType): mapStateType => {
    return {
        userData: props.usersPage
    }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setDataAC: (newArray:any[]) => {
            dispatch(setDataAC(newArray))
        }
    }
}


const setDataAC = (newArray:any[]) => {
    return {
        type: 'SET-DATA',
        newArray
    } as const
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

