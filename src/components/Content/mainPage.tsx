import React from "react";
import style from './content.module.css';
import {Mymessage, MyMessagePageType} from "../Profile/MyPosts/Mymessage";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/state";

type MainPagePropsType = {
    profilePage: MyMessagePageType
    dispatch: (action:ActionType) => void
}



export function MainPage(props:MainPagePropsType ) {


    return <main className={style.content}>

        <ProfileInfo/>
        <Mymessage dispatch={props.dispatch}
                   profilePage={props.profilePage}
        />


    </main>
}