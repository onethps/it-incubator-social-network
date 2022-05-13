import React from 'react';
import s from "./Users.module.css";
import {UserPropsType} from "./User";


type PaginatorType ={
    totalUserCount:number, pageSize:number,
    onClickPageChangeHandler: (pageNumber:number) => void, currentPage:number
}

const Paginator = ({totalUserCount, pageSize, onClickPageChangeHandler, currentPage}:PaginatorType) => {
    let pages = totalUserCount / pageSize

    let page = []

    for (let i = 4010; i <= 4020; i++) {
        page.push(i)
    }


    return (
        <div>
            <div className={s.pagesBlock}>
                {page.map((m,i) => {
                    return <span key={i} onClick={() => {onClickPageChangeHandler(m)}}
                                 className={currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                })}
            </div>
        </div>
    );
};

export default Paginator;