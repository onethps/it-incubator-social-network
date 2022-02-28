import React from "react";
import {PostMessage} from "./MyPosts/PostMessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {initialProfileStateType} from "../../redux/Profile-page-reducer";

export type GlobalPostType = addPostType | updatePostType

type addPostType = {
    type: 'ADD-POST'
}

type updatePostType = {
    type:'UPDATE-POST',
    newText:string
}

export const AddPostCreator = (): addPostType => {
    return {
        type: 'ADD-POST',
    } as const
}

export let UpdatePostCreator = (newText:string):updatePostType => {
    return {
        type:'UPDATE-POST',
        newText
    } as const
}


type MapDispatchPropsType = {
    addPostCallAction: () => void
    updatePostCallAction: (body: string) => void
}

type mapStatePropsType = {
    profilePage:initialProfileStateType
}


export type ProfilePropsContainerType = MapDispatchPropsType & mapStatePropsType




let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        profilePage: state.profilePage
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


