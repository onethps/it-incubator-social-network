import React from "react";
import style from './navigation.module.css';
import {menuLinks} from "../sidebar";
import {Link} from "react-router-dom";

export const Links: React.FC<menuLinks> = (props) => {


    return (
        <nav>
            <div className={style.item}>
                <Link to={props.link} className={style.activeLink}>{props.name}</Link>
            </div>
        </nav>
    )
}

