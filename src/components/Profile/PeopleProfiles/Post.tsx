import React from 'react';
import {userProfileType} from "../../../redux/Profile-page-reducer";
import {useParams} from "react-router-dom";

type PostType = {
    profileInfo: any
}


const Post = (props:PostType) => {
if (!props.profileInfo) {
    return <div>jdi</div>
}
    return (

        <div>
                    <div>{props.profileInfo.aboutMe}</div>
                    <div>{props.profileInfo.fullName}</div>
                    <img src={props.profileInfo.photos.small}/>
        </div>
    );
};



export {Post};