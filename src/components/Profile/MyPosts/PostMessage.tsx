import s from './PostMessage.module.css';
import React, {ChangeEvent} from "react";
import {ProfilePropsContainerType} from "../ProfiePageContainer";
import axios from "axios";

export type newPostType = {
    id: number
    message: string
    likes: number

}




export const PostMessage: React.FC<ProfilePropsContainerType> = (props) => {

    let postsElems = props.profilePage.postData.map(p =>
        <div>
          <div>{p.message}</div>
          <div>{p.likes}</div>
        </div>)

    let addPost = () => {
        props.addPostCallAction()

    }

    let changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostCallAction(e.currentTarget.value)
    }

    return (
        <div>
                <div>
                    <img className={s.imgStyle}
                        src='https://pickydigest.com/wp-content/uploads/2017/05/fb-fanpage-cover-photo-strategies-and-tips_image11-1422x200.png'>
                    </img>
                </div>
                <div>
                    ava + text
                </div>
            <div className={s.Mymessage}>
                <textarea value={props.profilePage.newPostText} placeholder='Write New Post'
                          onChange={changePostText}>

                </textarea>
                <button onClick={addPost}>Add Post</button>
                {postsElems}
            </div>

        </div>
    )
}