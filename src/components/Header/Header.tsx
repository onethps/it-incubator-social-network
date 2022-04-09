import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {dataType} from "../../redux/auth-reducer";


type HeaderType = {
    LoginData: dataType
    LogoutTC: () => void


}

export function Header(props: HeaderType) {

    let styleC = {display:'flex', flexDirection:'column', alignItems:'center', padding:'10px'}
    return (
        <header className={s.header}>

            <div className={s.logoHeaderStyle}>
                <img alt={'logoIMG'} src='https://cdn.icon-icons.com/images/icon-icons.svg'/>
            </div>

            <div className={s.LoginStyle}> {props.LoginData.isAuth ?
                <div>
                    <div >{props.LoginData.login}</div>
                    <button onClick={props.LogoutTC}>LOGOUT</button>
                </div>
                :
                <NavLink to={'/login'} >LOGIN</NavLink>}
            </div>


        </header>
    )
}


