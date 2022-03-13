import React, {useEffect, useState} from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {setProfile, userProfileType} from "../../../redux/Profile-page-reducer";
import {useParams} from "react-router-dom";
import {Post} from "./Post";

const mapStateToProps = (props:AppStateType) => {
    return {
        profileInfo: props.profilePage.profile,
    }
}

type PostContainerType = {
    setProfile: (arr:userProfileType) => void
    profileInfo: any
}

export interface RoutedProps<Params = any> {
    params: Params;
}


export function withRouter<P extends RoutedProps>( Child: React.ComponentClass<P> ) {
    return ( props: Omit<P, keyof RoutedProps> ) => {
        return <Child { ...props as P }  params={ useParams() }/>;
    }
}


class PostContainer extends React.Component<PostContainerType & RoutedProps> {

    componentDidMount() {
        const {userID} = this.props.params

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`, {
            withCredentials:true
        }).then(response => {
            this.props.setProfile({...response.data})})
    }


    render() {
        return(

            <div>
                <Post profileInfo={this.props.profileInfo} />

            </div>

        )
    }


}


export default connect(mapStateToProps, {
  setProfile,
})(withRouter(PostContainer));