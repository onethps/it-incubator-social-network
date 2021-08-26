import s from './Mymessage.module.css';
import {Profile} from "../Profile";
import React, {ChangeEvent, LegacyRef, RefObject} from "react";
import {ActionType, AddPostCreator, UpdatePostCreator} from "../../../redux/state";


type MyMessagePropsType = {
    profilePage: MyMessagePageType
    dispatch: (action:ActionType) => void
}

export type MyMessagePageType = {
    postData: Array<newPostType>
    newPostText: string
}


export type newPostType = {
    id: number
    message: string
    likes: number

}


export const Mymessage: React.FC<MyMessagePropsType> = (props) => {

    let postsElems = props.profilePage.postData.map(p =>
        <div>
            <Profile message={p.message} likesCount={p.likes}/>
        </div>)


    let addPost = () => {
        // props.addNewPostCallback()
        props.dispatch(AddPostCreator())

    }

    let changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.updatePostText(e.currentTarget.value)
        props.dispatch(UpdatePostCreator(e.currentTarget.value))

    }

    return (
        <div>
            My Messages
            <div className={s.Mymessage}>
                <textarea value={props.profilePage.newPostText}  placeholder='Write New Post'
                          onChange={changePostText}>

                </textarea>
                <button onClick={addPost}>Add Post</button>
                {postsElems}
            </div>

        </div>
    )
}


