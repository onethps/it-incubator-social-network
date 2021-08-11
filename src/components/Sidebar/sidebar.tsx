import React from 'react';
import {Navigation} from "./Navigation/navigation";
import {Friends} from "./Friends/friends";
import s from "./sidebar.module.css"

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




const Sidebar: React.FC<SideBarArrayType> = (props) => {

    let navElemes =
        props.menuLinks.map(m => <Navigation id={m.id} name={m.name} link={m.link}/>)

    let friendsElems =
        props.friendsList.map(f => <Friends id={f.id} name={f.name} avatarLink={f.avatarLink}/>)


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