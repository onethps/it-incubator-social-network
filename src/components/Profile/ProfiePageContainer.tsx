import {PostMessage} from "./MyPosts/PostMessage";
import {connect} from "react-redux";
import {AppStateType} from "../../store/ReduxStore";
import {AddPostCreator, postDataType, updateStatusThunk} from "../../store/reducers/ProfileReducer";
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
        AddPostCreator,
        updateStatusThunk
    }),
AuthRedirectHoc
)(PostMessage)

export  default ProfilePageContainer



