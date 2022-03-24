import s from './PostMessage.module.css';
import React from "react";
import {postDataType} from "../../../redux/Profile-page-reducer";
import coverImage from '../../../assets/profile_cover_image.jpg'

type PostMessageType = {
    profilePage:Array<postDataType>
    newPostText:string
    AddPostCreator: () => void
    UpdatePostCreator: (body:string) => void
}


export const PostMessage: React.FC<PostMessageType> = (props) => {

    let postsElems = props.profilePage.map(p =>
        <div>
            <div>{p.message}</div>

            <div> <span>👍</span>{p.likes}</div>
        </div>)




    return (
        <div>
            <div>
                <img className={s.imgStyle}
                     src={coverImage}>
                </img>
            </div>
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