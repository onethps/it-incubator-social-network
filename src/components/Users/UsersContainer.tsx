import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {arrayUsers, FollowThunk, getUserThunk, setCurrentPageThunk, UnfollowThunk} from "../../redux/usersReducer";
import UsersAPIComponent from "./UsersAPIComponent";
import {compose} from "redux";
import AuthRedirectHoc from "../Sidebar/Navigation/AuthRedirectHOC";
import {ComponentType} from "react";
import {
    getcurrentPage,
    getisFetching,
    getOnLoadFollowStatus,
    getPageSize,
    getTotalUserCount,
    getUSers
} from "./users-selectors";


type mapStateType = {
    userData: Array<arrayUsers>
    totalUserCount:number
    currentPage:number
    pageSize:number
    isFetching:boolean
    onLoadArray: any[]

}

const mapStateToProps = (state: AppStateType):mapStateType => {
    return {
        userData: getUSers(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getcurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getisFetching(state),
        onLoadArray: getOnLoadFollowStatus(state)

    }
}



export default compose<ComponentType>(
    connect(mapStateToProps, {getUserThunk, setCurrentPageThunk,UnfollowThunk, FollowThunk}),
    AuthRedirectHoc
)(UsersAPIComponent)

