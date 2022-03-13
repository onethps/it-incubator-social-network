import React from 'react';
import {arrayUsers, isFollowAC, isUnFollowAC, setUserData} from "../../redux/usersReducer";
import axios from "axios";
import User from "./User";
import isFetchingLoader from "../../assets/loader.gif";


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

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials:true
            }).then(response => {
                this.props.isFetchinAC(true)
                this.props.setUserData([...response.data.items])
                // this.props.setTotalCountAC(response.data.totalCount)
            })

    }

    onClickHandler = (pageNumber:number) => {
        this.props.isFetchinAC(false)
        this.props.setCurrentPageAC(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials:true
        }).then(response => {
            this.props.isFetchinAC(true)
            this.props.setUserData([...response.data.items])})

    }




    render() {
        return <div>

            { this.props.isFetching ?  <User totalUserCount={this.props.totalUserCount}
                                             pageSize={this.props.pageSize}
                                             userData={this.props.userData}
                                             onClickHandler={this.onClickHandler}
                                             isFollowAC={this.props.isFollowAC}
                                             isUnFollowAC={this.props.isUnFollowAC}
                                             currentPage={this.props.currentPage}/> :
                <img src={isFetchingLoader}/>

            }
        </div>
    };

}

export default UsersAPIComponent;