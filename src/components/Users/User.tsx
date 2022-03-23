import React, {useState} from 'react';
import s from "./Users.module.css";
import catAva from "../../assets/cat_ava.jpeg";
import {arrayUsers} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";


type UserPropsType = {
    userData: Array<arrayUsers>
    totalUserCount: number
    pageSize: number
    currentPage: number
    onClickPageChangeHandler: (pageNumber: number) => void
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


let [followStatusArr, setfollowStatusArr] = useState<Array<number>>([])


    let renderUsers = props.userData.map(m => {
        return (
            <>
                <NavLink to={'/mainpage/' + m.id}>
                    <img className={s.avaStyle} src={catAva}/>
                </NavLink>
                {m.followed ?

                    <button disabled={followStatusArr.includes(m.id)}
                            onClick={() => {
                                setfollowStatusArr([...followStatusArr, m.id])
                        followAPI.deleteFollow(m.id).then(response => {
                            // setStatus('idle')
                            setfollowStatusArr(followStatusArr.filter(f => m.id !== f))
                            if (response.data.resultCode == 0) {
                                onUnFollowClickHandler(m.id)
                            }
                        })
                    }
                    }>unfollow</button> :

                    <button disabled={followStatusArr.some((elem) => elem === m.id)} onClick={() => {
                        // setStatus('loading')
                        setfollowStatusArr([...followStatusArr, m.id])
                        followAPI.postFollow(m.id).then(response => {
                            // setStatus('idle')
                            setfollowStatusArr(followStatusArr.filter(f => m.id !== f))
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
                    return <span onClick={() => {props.onClickPageChangeHandler(m)}} className={props.currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                })}
            </div>

            {renderUsers}
        </div>

    );
};

export default User;