import React from "react";
import {NavLink} from "react-router-dom";
import s from '../dialogs.module.css'
import {dialogsData} from "../dialogs";



export const DialogItem: React.FC<dialogsData> = (props) => {
    let path = "/DialogItem/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
