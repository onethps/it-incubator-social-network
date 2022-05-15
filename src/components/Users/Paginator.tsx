import React, {useState} from 'react';
import s from "./Users.module.css";
import {useDispatch} from "react-redux";


type PaginatorType ={
    totalUserCount:number, pageSize:number,
    onClickPageChangeHandler: (pageNumber:number) => void, currentPage:number
}



const Paginator = ({totalUserCount, pageSize, onClickPageChangeHandler, currentPage}:PaginatorType) => {
    const dispatch = useDispatch()

    // получаем колво страниц (делим общее число юзеров на количество отображаемых на страница)
    let pages = Math.ceil(totalUserCount / pageSize)
    let [portionNumber, setPoritionNumber ] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * pageSize + 1
    let rightPortionNumber = portionNumber * pageSize

    let page = []
    for (let i = 1; i <= pages; i++) {
        page.push(i)
    }


    return (
        <div>
            <div className={s.pagesBlock}>
                {portionNumber !== 1 && <button onClick={ () => setPoritionNumber(portionNumber - 1)}>Prev</button>}
                {page.filter(f => f >= leftPortionNumber && f <= rightPortionNumber)
                    .map((m,i) => {
                        return <span key={i} onClick={() => {onClickPageChangeHandler(m)}}
                                     className={currentPage === m ? s.activeClass : s.normalClass}>{m}</span>
                    })}
                {rightPortionNumber <= page.length &&  <button onClick={ () => setPoritionNumber(portionNumber + 1)}>Next</button>}
            </div>
        </div>
    );
};

export default Paginator;