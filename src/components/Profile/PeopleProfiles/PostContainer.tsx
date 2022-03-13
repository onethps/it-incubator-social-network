import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {setProfile, userProfileType} from "../../../redux/Profile-page-reducer";
import {useParams} from "react-router-dom";
import {Post} from "./Post";

const mapStateToProps = (props:AppStateType) => {
    return {
        profileInfo: props.profilePage.profile,
    }
}

type PostContainerType = {
    setProfile: (arr:userProfileType) => void
    profileInfo: any
}
//
// type mapStateToPropsType = {
//     profileData: userProfileType
// }



function PostContainer(props:PostContainerType) {
    let {userID} = useParams()


    useEffect( () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            props.setProfile({...response.data})})
    }, [ props.setProfile]
)

        return(

            <div>
                <Post profileInfo={props.profileInfo} />

            </div>

        )

}

export default connect(mapStateToProps, {
  setProfile
})(PostContainer);