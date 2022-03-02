import React from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../redux/usersReducer";


type UserPropsType = {
    userData: Array<arrayUsers>
    totalUserCount:number
    pageSize:number
    currentPage:number
    onClickHandler: (pageNumber:number) => void
}


export const User = (props:UserPropsType) => {
    let pages = props.totalUserCount / props.pageSize

    let page = []

    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }

    let   renderUsers = props.userData.map(m => {
        return (
            <>
                <img className={s.avaStyle} src={catAva}/>
                <div key={m.id}>{m.name}</div>
            </>
        )
    })


    return (
        <div>
            <div>
                {page.map(m => {
                    return <span onClick={() => {
                        props.onClickHandler(m)
                    }}
                     className={props.currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                })}
            </div>

            {renderUsers}
        </div>

    );
};

export default User;