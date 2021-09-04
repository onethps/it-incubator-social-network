import React from "react";
import style from './content.module.css';
import {Mymessage, MyMessagePageType} from "../Profile/MyPosts/Mymessage";
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import {ActionType, StoreType} from "../../redux/state";
import {ProfilePageContainer} from "../../redux/ProfiePageContainer";

type MainPagePropsType = {
    store: StoreType

}


export function MainPage(props: MainPagePropsType) {


    return <main className={style.content}>

        <ProfileInfo/>
        <ProfilePageContainer store={props.store}/>


    </main>
}