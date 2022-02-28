import React from "react";

import style from './friends.module.css'
import {friendsList} from "../sidebar";


export const LeftFriendList: React.FC<friendsList> = (props) => {
    return (
        <div className={style.mainBlock}>
            <img className={style.icon} src={props.avatarLink}/>
            <div className={style.name}>{props.name}</div>
        </div>
    )

}