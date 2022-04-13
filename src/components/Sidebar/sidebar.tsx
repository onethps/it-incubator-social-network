import React from 'react';
import {LeftFriendList} from "./LeftFriendList/LeftFriendList";
import s from "./sidebar.module.css"
import {SideBarType} from "./SideBarContainter";
import {Link} from "react-router-dom";


export type SideBarArrayType = {
    menuLinks: Array<menuLinks>
    friendsList: Array<friendsList>
}


 export type menuLinks = {
    id: number
    name: string
    link: string
}
 export type friendsList = {
    id: number
    name: string
    avatarLink: string
}




export const Sidebar: React.FC<SideBarType> = (props) => {

    let navElemes =
        props.sidebar.menuLinks.map((m, i) => <Link key={i} to={m.link} className={s.NavItem}>{m.name}</Link>)


    let friendsElems =
        props.sidebar.friendsList.map((f) => <LeftFriendList key={f.id} id={f.id} name={f.name} avatarLink={f.avatarLink}/>)


    return <div className={s.mainBlock}>

        <div className={s.navCardBox}>
            <div className={s.NavBlock}>
            {navElemes}
            </div>
        </div>
        <div className={s.friendsBlock}>
            {friendsElems}

        </div>
    </div>

}

export default Sidebar;