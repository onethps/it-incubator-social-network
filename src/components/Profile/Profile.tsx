import s from './Profile.module.css'
import React from "react";

type ProfilePageType = {
    message: string
    likesCount: number
}




export const Profile: React.FC<ProfilePageType> = (props) => {
    return <div>
        <img className={s.icon} src='https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'></img>
        <div className={s.message}>{props.message}</div>
        <div>likes</div>
        <div className={s.likes}>{props.likesCount}</div>
        </div>

}