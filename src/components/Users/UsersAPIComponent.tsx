import {arrayUsers} from "../../store/reducers/UsersReducer";
import User from "./User";
import isFetchingLoader from "../../assets/loader.gif";
import React from "react";
import PreLoader from "../../common/PreLoader";

type UserAPIPropsType = {
    userData: Array<arrayUsers>
    totalUserCount: number,
    currentPage: number,
    pageSize: number,
    isFetching: boolean
    onLoadArray: any[]
    getUserThunk: (currentPage: number, pageSize: number) => void
    setCurrentPageThunk: (pageNumber: number, pageSize: number) => void
    UnfollowThunk: (userID: number) => void
    FollowThunk: (userID: number) => void

}

class UsersAPIComponent extends React.Component<UserAPIPropsType> {

    componentDidMount() {
        this.props.getUserThunk(this.props.currentPage, this.props.pageSize)
    }

    onClickPageChangeHandler = (pageNumber: number) => {
        this.props.setCurrentPageThunk(pageNumber, this.props.pageSize)
    }

    render() {
        return <div>

            {this.props.isFetching ? <User totalUserCount={this.props.totalUserCount}
                                           pageSize={this.props.pageSize}
                                           userData={this.props.userData}
                                           onClickPageChangeHandler={this.onClickPageChangeHandler}
                                           onLoadArray={this.props.onLoadArray}
                                           UnfollowThunk={this.props.UnfollowThunk}
                                           FollowThunk={this.props.FollowThunk}
                                           currentPage={this.props.currentPage}/> :
                <PreLoader/>

            }
        </div>
    };

}

export default UsersAPIComponent;