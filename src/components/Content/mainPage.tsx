import React from "react";
import style from './content.module.css';
import {ProfileInfo} from "../Profile/ProfileInfo/ProfileInfo";
import {ProfilePageContainer} from "../../redux/ProfiePageContainer";


export function MainPage() {

    return <main className={style.content}>
        <ProfileInfo/>
        <ProfilePageContainer/>
    </main>
}


