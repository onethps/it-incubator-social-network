import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {dataType} from "../../redux/auth-reducer";

type HeaderType = {
    LoginData: dataType

}

export function Header(props: HeaderType) {

    return (
            <header className={s.header}>
                <div className={s.logoHeaderStyle}><img src='https://cdn.icon-icons.com/images/icon-icons.svg'/></div>

                <div className={s.LoginStyle}> {props.LoginData.isAuth ?
                    <div >{props.LoginData.login}</div> :
                    <NavLink to={'/login'}>LOGIN</NavLink>}</div>

            </header>
    )
}


