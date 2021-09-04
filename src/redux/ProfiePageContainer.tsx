import React from "react";
import {AddPostCreator, StoreType, UpdatePostCreator} from "../redux/state";
import {Mymessage} from "../components/Profile/MyPosts/Mymessage";


type ProfilePageContainerType = {
    store: StoreType
}




export const ProfilePageContainer = (props:ProfilePageContainerType) => {
    let state = props.store.getState()

    let addNewPostFunc = () => {
        props.store.dispatch(AddPostCreator())

    }

    let updatePostTextFunc = (body:any) => {
        props.store.dispatch(UpdatePostCreator(body))
    }

    return (
        <Mymessage addNewPostFunc={addNewPostFunc} updatePostTextFunc={updatePostTextFunc} profilePage={state.profilePage} />
    )
}


