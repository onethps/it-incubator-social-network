import s from './PostMessage.module.css';
import React, {ChangeEvent} from "react";
import {ProfilePropsContainerType} from "../ProfiePageContainer";
import {postDataType} from "../../../redux/Profile-page-reducer";

type PostMessageType = {
    profilePage:Array<postDataType>
    newPostText:string
    addPostCallAction: () => void
    updatePostCallAction: (body:string) => void
}


export const PostMessage: React.FC<PostMessageType> = (props) => {

    let postsElems = props.profilePage.map(p =>
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
                <textarea value={props.newPostText} placeholder='Write New Post'
                          onChange={changePostText}>

                </textarea>
                <button onClick={addPost}>Add Post</button>
                {postsElems}
            </div>

        </div>
    )
}