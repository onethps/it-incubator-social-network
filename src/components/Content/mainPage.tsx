import React from "react";
import style from './content.module.css';
import {Mymessage, MyMessagePageType} from "../Profile/MyPosts/Mymessage";
import {Profile} from "../Profile/Profile";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";

type MainPagePropsType = {
    profilePage: MyMessagePageType
    addNewPostCallback:() => void
    updatePostText: (newText: string) => void
}



export function MainPage(props:MainPagePropsType ) {


    return <main className={style.content}>

        <ProfileInfo/>
        <Mymessage addNewPostCallback={props.addNewPostCallback}
                   profilePage={props.profilePage}
                   updatePostText={props.updatePostText}
        />


    </main>
}