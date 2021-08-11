import React from "react";
import style from './navigation.module.css';
import {NavLink} from "react-router-dom";
import {menuLinks} from "../sidebar";

export const Navigation: React.FC<menuLinks> = (props) => {


    return <nav>
        <div className={style.item}>
            <NavLink to={props.link} activeClassName={style.activeLink}>{props.name}</NavLink>
        </div>

    </nav>
}

