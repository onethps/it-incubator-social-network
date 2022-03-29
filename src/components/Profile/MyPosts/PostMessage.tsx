import s from './PostMessage.module.css';
import React from "react";
import {postDataType, updateStatusThunk} from "../../../redux/Profile-page-reducer";
import coverImage from '../../../assets/profile_cover_image.jpg'
import PostUserStatus from "./PostUserStatus";
import PostContainer from "../PeopleProfiles/PostContainer";

type PostMessageType = {
    postData:Array<postDataType>
    newPostText:string
    AddPostCreator: () => void
    UpdatePostCreator: (body:string) => void
    status:string
    updateStatusThunk:(status:string) => void

}


export const PostMessage: React.FC<PostMessageType> = (props) => {
    let postsElems = props.postData.map(p =>
        <div key={p.id}>
            <div>{p.message}</div>

            <div> <span>👍</span>{p.likes}</div>
        </div>)




    return (
        <div>
            <div>
                <img  alt={'imgCover'} className={s.imgStyle}
                     src={coverImage}>
                </img>
            </div>
            <div style={{padding:'20px'}}>

                <PostContainer/>

                <PostUserStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>

                <div style={{marginTop:'20px'}}>
                    <div style={{fontWeight:'bold'}}>MY POSTS</div>
                    <div className={s.Mymessage}>
                <textarea value={props.newPostText} placeholder='Write New Post'
                          onChange={ (e) => props.UpdatePostCreator(e.currentTarget.value)}>

                </textarea>
                        <button onClick={ props.AddPostCreator}>Add Post</button>
                        {postsElems}
                    </div>
                </div>
            </div>
        </div>
    )
}