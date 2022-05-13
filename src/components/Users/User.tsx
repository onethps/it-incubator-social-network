import React from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../store/reducers/UsersReducer";
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

    for (let i = 4010; i <= 4020; i++) {
        page.push(i)
    }


    let renderUsers = props.userData.map(m => {
        return (
            <>
                <NavLink to={'/mainpage/' + m.id}>
                    {m.photos.small ? <img alt={'img'} className={s.avaStyle} src={m.photos.small}/>:
                        <img alt={'img'} className={s.avaStyle} src={catAva}/>
                    }
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
                <div>Status: {m.status}</div>

            </>
        )
    })


    return (
        <div>
            <div className={s.pagesBlock}>
                {page.map((m,i) => {
                    return <span key={i} onClick={() => {props.onClickPageChangeHandler(m)}}
                                 className={props.currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                })}
            </div>

            {renderUsers}
        </div>

    );
};

export default User;