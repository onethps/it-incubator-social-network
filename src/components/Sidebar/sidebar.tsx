import React from 'react';
import {Links} from "./Navigation/Links";
import {Friends} from "./Friends/friends";
import s from "./sidebar.module.css"
import {SideBarType} from "../../redux/SideBarContainter";


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
        props.sidebar.menuLinks.map(m => <Links id={m.id} name={m.name} link={m.link}/>)

    let friendsElems =
        props.sidebar.friendsList.map(f => <Friends id={f.id} name={f.name} avatarLink={f.avatarLink}/>)


    return <div className={s.mainBlock}>

        <div className={s.navBlock}>
            {navElemes}
        </div>
        <div className={s.friendsBlock}>
            {friendsElems}

        </div>
    </div>

}

export default Sidebar;