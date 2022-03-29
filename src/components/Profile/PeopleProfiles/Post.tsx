import React from 'react';
import catAva from "../../../assets/cat_ava.jpeg";

type PostType = {
    profileInfo: any
}


const Post = (props: PostType) => {
    if (!props.profileInfo) {
        return <div>Loading....</div>
    }
    return (

        <div>
            <div>{props.profileInfo.aboutMe}</div>
            <div>{props.profileInfo.fullName}</div>
            {props.profileInfo.photos.small ?
                <img alt={'parsedIMG'} src={props.profileInfo.photos.small}/> :
                <img alt={'catAVA'} style={{width: '100px', height: '100px'}} src={catAva}/>
            }
        </div>
    );
};


export {Post};