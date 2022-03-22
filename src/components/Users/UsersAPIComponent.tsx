import React from 'react';
import {arrayUsers} from "../../redux/usersReducer";
import User from "./User";
import isFetchingLoader from "../../assets/loader.gif";
import {UserAPI} from "../../api/api";


type UserAPIPropsType = {
    userData: Array<arrayUsers>
    setUserData: (newArray: any[]) => void
    setTotalCountAC: (count:number) => void
    setCurrentPageAC: (page:number) => void
    totalUserCount:number,
    currentPage:number,
    pageSize:number,
    isFetchinAC:(load:boolean) =>void
    isFetching:boolean
    isFollowAC: (userID:number) => void
    isUnFollowAC: (userID:number) => void
}

class UsersAPIComponent extends React.Component<UserAPIPropsType>{

    componentDidMount() {

        this.props.isFetchinAC(false)
        UserAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.isFetchinAC(true)
                this.props.setUserData([...data.items])
                // commented, cuz aloft of pages shows, first time we get only 5 pages
                // if needed to show all pages - uncomment second string
                // this.props.setTotalCountAC(data.totalCount)
            })

    }

    onClickPageChangeHandler = (pageNumber:number) => {
        this.props.isFetchinAC(false)
        this.props.setCurrentPageAC(pageNumber)
        UserAPI.getCurrentPage(pageNumber,this.props.pageSize).then(data => {
            this.props.isFetchinAC(true)
            this.props.setUserData([...data.items])})

    }

    render() {
        return <div>

            { this.props.isFetching ?  <User totalUserCount={this.props.totalUserCount}
                                             pageSize={this.props.pageSize}
                                             userData={this.props.userData}
                                             onClickPageChangeHandler={this.onClickPageChangeHandler}
                                             isFollowAC={this.props.isFollowAC}
                                             isUnFollowAC={this.props.isUnFollowAC}
                                             currentPage={this.props.currentPage}/> :
                <img src={isFetchingLoader}/>

            }
        </div>
    };

}

export default UsersAPIComponent;