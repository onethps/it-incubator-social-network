import React, {ComponentType, useEffect, useState} from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {setProfile, userProfileType} from "../../../redux/Profile-page-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Post} from "./Post";

const mapStateToProps = (props:AppStateType) => {
    return {
        profileInfo: props.profilePage.profile,
    }
}

type PostContainerType = {
    setProfile: (arr:userProfileType) => void
    profileInfo: any
    userID?: string | undefined
}


export interface WithRouterProps<T = ReturnType<typeof useParams>> {
    history: {
        back: () => void;
        goBack: () => void;
        location: ReturnType<typeof useLocation>;
        push: (url: string, state?: any) => void;
    }
    location: ReturnType<typeof useLocation>;
    match: {
        params: T;
    };
    navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <P extends object>(Component: ComponentType<P>) => {
    return (props: Omit<P, keyof WithRouterProps>) => {
        const location = useLocation();
        const match = { params: useParams() };
        const navigate = useNavigate();

        const history = {
            back: () => navigate(-1),
            goBack: () => navigate(-1),
            location,
            push: (url: string, state?: any) => navigate(url, { state }),
            replace: (url: string, state?: any) => navigate(url, {
                replace: true,
                state
            })
        };

        return (
            <Component
                history={history}
                location={location}
                match={match}
                navigate={navigate}
                {...props as P}
            />
        );
    };
};


type Props = WithRouterProps<PostContainerType> & PostContainerType


class PostContainer1 extends React.Component<Props> {

    componentDidMount() {
        const {match} = this.props
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${match.params.userID}`).then(response => {
           return  this.props.setProfile({...response.data})})


    }

    render() {
        return <div>
            <Post profileInfo={this.props.profileInfo} />

        </div>
    }

}




// function PostContainer(props:PostContainerType) {
//     let {userID} = useParams()
//
//
//     useEffect( () => {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
//             props.setProfile({...response.data})})
//     }, [ props.setProfile]
// )
//
//         return(
//
//             <div>
//                 <Post profileInfo={props.profileInfo} />
//
//             </div>
//
//         )
//
// }

export default connect(mapStateToProps, {
  setProfile
})(withRouter(PostContainer1));