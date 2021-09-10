import React from "react";
import {AddNewMessage, AddPostCreator, StoreType, updateMessage, UpdatePostCreator} from "../redux/state";
import {Mymessage} from "../components/Profile/MyPosts/Mymessage";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {inicialStateMessageType} from "./message-page-reducer";
import {initialProfileStateType} from "./profile-page-reducer";


// type ProfilePageContainerType = {
//     store: StoreType
// }
//
//
// export const ProfilePageContainer = (props:ProfilePageContainerType) => {
//     let state = props.store.getState()
//
//     let addNewPostFunc = () => {
//         props.store.dispatch(AddPostCreator())
//
//     }
//
//     let updatePostTextFunc = (body:any) => {
//         props.store.dispatch(UpdatePostCreator(body))
//     }
//
//     return (
//         <Mymessage addNewPostFunc={addNewPostFunc} updatePostTextFunc={updatePostTextFunc} profilePage={state.profilePage} />
//     )
// }



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




export const ProfilePageContainer = connect(mapStateToProps,mapDispatchToProps)(Mymessage)


