import React from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UserPropsType = {
    userData: Array<arrayUsers>
    totalUserCount: number
    pageSize: number
    currentPage: number
    onClickHandler: (pageNumber: number) => void
    isFollowAC: (userID: number) => void
    isUnFollowAC: (userID: number) => void

}


export const User = (props: UserPropsType) => {
    let pages = props.totalUserCount / props.pageSize

    let page = []

    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }

    let onFollowClickHandler = (userID: number) => {
        props.isFollowAC(userID)

    }

    let onUnFollowClickHandler = (userID: number) => {
        props.isUnFollowAC(userID)


    }

    let renderUsers = props.userData.map(m => {
        return (
            <>
                <NavLink to={'/mainpage/' + m.id}><img className={s.avaStyle} src={catAva}/></NavLink>
                {m.followed ?

                    <button onClick={() =>
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                            {withCredentials: true,
                                headers: {
                                    'API-KEY': '53743326-f61f-4a39-ac8a-be7cd4a5c568'
                                }
                            }
                        ).then(response => {
                            if (response.data.resultCode == 0) {
                                onUnFollowClickHandler(m.id)
                            }
                        })
                    }>unfollow</button> :

                    <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`,
                            {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '53743326-f61f-4a39-ac8a-be7cd4a5c568'
                                }
                            }
                        ).then(response => {
                            if (response.data.resultCode == 0) {
                                onFollowClickHandler(m.id)
                            }
                        })
                    }}>follow</button>

                }
                <div key={m.id}>ID {m.id} NAME {m.name}</div>

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