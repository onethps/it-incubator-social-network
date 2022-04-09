import {PostMessage} from "./MyPosts/PostMessage";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AddPostCreator, postDataType, UpdatePostCreator, updateStatusThunk} from "../../redux/Profile-page-reducer";
import AuthRedirectHoc from "../Sidebar/Navigation/AuthRedirectHOC";
import {compose} from "redux";
import {ComponentType} from "react";



type mapStatePropsType = {
    postData:Array<postDataType>
    status:string
}



let mapStateToProps = (props: AppStateType):mapStatePropsType => {
    return {
        postData: props.profilePage.postData,
        status:props.profilePage.status,
    }
}


export  const ProfilePageContainer = compose<ComponentType>(
    connect(mapStateToProps,{
        AddPostCreator, UpdatePostCreator,
        updateStatusThunk
    }),
AuthRedirectHoc
)(PostMessage)

export  default ProfilePageContainer



