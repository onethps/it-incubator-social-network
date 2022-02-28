import React from 'react';
import {userType} from "../../redux/usersReducer";
import axios from "axios";
import catAva from '../../assets/cat_ava.jpeg'
import s from './Users.module.css'

type UserPropsType = {
    userData: userType
    setDataAC: (newArray: any[]) => void
}

class Users extends React.Component<UserPropsType>{

    constructor(props:UserPropsType) {
        super(props);
        if(props.userData.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setDataAC([...response.data.items])})
        }

    }



    renderUsrs = this.props.userData.users.map(m => {
        return (
            <>
                <img className={s.avaStyle} src={catAva}/>
                <div key={m.id}>{m.name}</div>
            </>
        )
    })

    render() {



        return (

            <div>
                {this.renderUsrs}
            </div>
        );
    };

}

export default Users;