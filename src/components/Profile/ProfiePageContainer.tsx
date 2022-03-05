import React from "react";
import {PostMessage} from "./MyPosts/PostMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AddPostCreator, postDataType, UpdatePostCreator} from "../../redux/Profile-page-reducer";

type MapDispatchPropsType = {
    addPostCallAction: () => void
    updatePostCallAction: (body: string) => void
}

type mapStatePropsType = {
    profilePage:Array<postDataType>
    newPostText:string
}


export type ProfilePropsContainerType = MapDispatchPropsType & mapStatePropsType


let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        profilePage: state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType  => {
    return {
        addPostCallAction: () => {
            dispatch(AddPostCreator())
        },

        updatePostCallAction: (body: string) => {
            dispatch(UpdatePostCreator(body))
        }
    }
}

export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(PostMessage)


