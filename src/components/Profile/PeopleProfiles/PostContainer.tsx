import React, {ComponentType, useEffect, useState} from 'react';
import axios from "axios";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {getUserProfileThunk, setProfile, userProfileType} from "../../../redux/Profile-page-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Post} from "./Post";
import {UserAPI} from "../../../api/api";
import {type} from "os";

const mapStateToProps = (props:AppStateType) => {
    return {
        profileInfo: props.profilePage.profile,
    }
}

type PostContainerType = {
    profileInfo: any
    userID?: string | undefined
    getUserProfileThunk: (userID:number) => void
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


class PostContainer extends React.Component<Props> {

    componentDidMount() {
        const {match} = this.props
        this.props.getUserProfileThunk(Number(match.params.userID))
    }

    render() {
        return <div>
            <Post profileInfo={this.props.profileInfo} />
        </div>
    }

}



export default connect(mapStateToProps, { getUserProfileThunk }
)(withRouter(PostContainer));