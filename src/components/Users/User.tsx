import React from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../store/reducers/UsersReducer";
import {NavLink} from "react-router-dom";
import {RouteNames} from "../routes/AppRouters";
import Paginator from "./Paginator";


export type UserPropsType = {
    userData: Array<arrayUsers>
    onLoadArray: any[]
    UnfollowThunk: (userID:number) => void
    FollowThunk: (userID:number) => void

}


export const User = ({userData, onLoadArray, UnfollowThunk, FollowThunk,}:UserPropsType) => {

    let renderUsers = userData.map(m => {
        return (
            <div key={m.id}>
                    <NavLink to={`/mainpage/ ${m.id}`}>
                    {m.photos.small ? <img alt={'img'} className={s.avaStyle} src={m.photos.small}/>:
                        <img alt={'img'} className={s.avaStyle} src={catAva}/>
                    }
                </NavLink>

                {m.followed ?

                    <button disabled={onLoadArray.includes(m.id)}
                            onClick={() => {UnfollowThunk(m.id) }
                            }>unfollow</button> :

                    <button disabled={onLoadArray.includes(m.id)}
                            onClick={() => { FollowThunk(m.id) }
                            }>follow</button>

                }
                <div key={m.id}>ID {m.id} NAME {m.name}</div>
                <div>Status: {m.status}</div>

            </div>
        )
    })
    return (
        <div>

            {renderUsers}
        </div>

    );
};

export default User;