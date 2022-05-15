import {arrayUsers} from "../../store/reducers/UsersReducer";
import User from "./User";
import isFetchingLoader from "../../assets/loader.gif";
import React from "react";
import PreLoader from "../../common/PreLoader";
import Paginator from "./Paginator";

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
            <Paginator totalUserCount={this.props.totalUserCount}
                       onClickPageChangeHandler={this.onClickPageChangeHandler}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}/>
            {this.props.isFetching ? <User

                                           userData={this.props.userData}
                                           onLoadArray={this.props.onLoadArray}
                                           UnfollowThunk={this.props.UnfollowThunk}
                                           FollowThunk={this.props.FollowThunk}
                                          /> :
                <PreLoader/>

            }
        </div>
    };

}

export default UsersAPIComponent;