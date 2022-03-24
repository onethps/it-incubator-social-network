import React from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";


type UserPropsType = {
    userData: Array<arrayUsers>
    totalUserCount: number
    pageSize: number
    currentPage: number
    onClickPageChangeHandler: (pageNumber: number) => void
    onLoadArray: any[]
    UnfollowThunk: (userID:number) => void
    FollowThunk: (userID:number) => void

}


export const User = (props: UserPropsType) => {
    let pages = props.totalUserCount / props.pageSize

    let page = []

    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }


    let renderUsers = props.userData.map(m => {
        return (
            <>
                <NavLink to={'/mainpage/' + m.id}>
                    <img className={s.avaStyle} src={catAva}/>
                </NavLink>
                {m.followed ?

                    <button disabled={props.onLoadArray.includes(m.id)}
                            onClick={() => { props.UnfollowThunk(m.id) }
                            }>unfollow</button> :

                    <button disabled={props.onLoadArray.includes(m.id)}
                            onClick={() => { props.FollowThunk(m.id) }
                            }>follow</button>

                }
                <div key={m.id}>ID {m.id} NAME {m.name}</div>

            </>
        )
    })


    return (
        <div>
            <div>
                {page.map(m => {
                    return <span onClick={() => {props.onClickPageChangeHandler(m)}} className={props.currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                })}
            </div>

            {renderUsers}
        </div>

    );
};

export default User;