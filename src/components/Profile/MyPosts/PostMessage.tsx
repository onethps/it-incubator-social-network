import s from './PostMessage.module.css';
import React from "react";
import {postDataType} from "../../../redux/Profile-page-reducer";
import coverImage from '../../../assets/profile_cover_image.jpg'
import PostUserStatus from "./PostUserStatus";

type PostMessageType = {
    profilePage:Array<postDataType>
    newPostText:string
    AddPostCreator: () => void
    UpdatePostCreator: (body:string) => void
}


export const PostMessage: React.FC<PostMessageType> = (props) => {
    let postsElems = props.profilePage.map(p =>
        <div key={p.id}>
            <div>{p.message}</div>

            <div> <span>👍</span>{p.likes}</div>
        </div>)




    return (
        <div>
            <div>
                <img alt={'imgAva'} className={s.imgStyle}
                     src={coverImage}>
                </img>
            </div>
            <PostUserStatus status={'Hello Bro'}/>
            <div>
                ava + text
            </div>
            <div className={s.Mymessage}>
                <textarea value={props.newPostText} placeholder='Write New Post'
                          onChange={ (e) => props.UpdatePostCreator(e.currentTarget.value)}>

                </textarea>
                <button onClick={ props.AddPostCreator}>Add Post</button>
                {postsElems}
            </div>

        </div>
    )
}