import {PostMessage} from "./MyPosts/PostMessage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AddPostCreator, postDataType, UpdatePostCreator} from "../../redux/Profile-page-reducer";
import AuthRedirectHoc from "../Sidebar/Navigation/AuthRedirectHOC";

type MapDispatchPropsType = {
    addPostCallAction: () => void
    updatePostCallAction: (body: string) => void
}

type mapStatePropsType = {
    profilePage:Array<postDataType>
    newPostText:string
}


export type ProfilePropsContainerType = MapDispatchPropsType & mapStatePropsType


let mapStateToProps = (props: AppStateType):mapStatePropsType => {
    return {
        profilePage: props.profilePage.postData,
        newPostText:props.profilePage.newPostText,
    }
}



export const ProfilePageContainer = AuthRedirectHoc(connect(mapStateToProps,{
    AddPostCreator, UpdatePostCreator
})(PostMessage))


