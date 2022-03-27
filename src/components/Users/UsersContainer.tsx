import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {arrayUsers, FollowThunk, getUserThunk, setCurrentPageThunk, UnfollowThunk} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import AuthRedirectHoc from "../Sidebar/Navigation/AuthRedirectHOC";
import {ComponentType} from "react";


type mapStateType = {
    userData: Array<arrayUsers>
    totalUserCount:number
    currentPage:number
    pageSize:number
    isFetching:boolean
    onLoadArray: any[]

}

const mapStateToProps = (props: AppStateType):mapStateType => {
    return {
        userData: props.usersPage.users,
        totalUserCount: props.usersPage.totalUserCount,
        currentPage: props.usersPage.currentPage,
        pageSize: props.usersPage.pageSize,
        isFetching: props.usersPage.isFetching,
        onLoadArray: props.usersPage.onLoadFollowStatus

    }
}



export default compose<ComponentType>(
    connect(mapStateToProps, {getUserThunk, setCurrentPageThunk,UnfollowThunk, FollowThunk}),
    AuthRedirectHoc
)(UsersAPIComponent)

// export default connect(mapStateToProps, {
//     getUserThunk,
//     setCurrentPageThunk,UnfollowThunk, FollowThunk
//
// })(UsersAPIComponent)

