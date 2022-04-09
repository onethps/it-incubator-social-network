import s from './PostMessage.module.css';
import React from "react";
import {postDataType} from "../../../redux/Profile-page-reducer";
import coverImage from '../../../assets/profile_cover_image.jpg'
import PostUserStatus from "./PostUserStatus";
import PostContainer from "../PeopleProfiles/PostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, requeredFiled} from "../../../validators/validators";
import {TexArea} from "../../../common/FormValid/FormValid";

type PostMessageType = {
    postData:Array<postDataType>
    newPostText:string
    AddPostCreator: (newMessage:string) => void
    status:string
    updateStatusThunk:(status:string) => void

}


export const PostMessage: React.FC<PostMessageType> = (props) => {
    let postsElems = props.postData.map(p =>
        <div key={p.id}>
            <div>{p.message}</div>

            <div> <span>👍</span>{p.likes}</div>
        </div>)


    const handleSubmit = (formData:PostFormType) => {
        props.AddPostCreator(formData.PostFormMessageArea)
    }

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
                        <PostFormRedux onSubmit={handleSubmit}/>
                        {postsElems}
                    </div>
                </div>
            </div>
        </div>
    )
}

const maxLength15 = maxLength(15)


type PostFormType = {
    PostFormMessageArea: string
}

const PostForm: React.FC<InjectedFormProps<PostFormType>> = (props) => {



    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field className={s.textArea} validate={[requeredFiled, maxLength15]}
               name={'PostFormMessageArea'} component={TexArea}/>
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>
}

const PostFormRedux = reduxForm<PostFormType>({form:'post'})(PostForm)