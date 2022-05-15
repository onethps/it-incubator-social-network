import React, {ComponentType} from 'react';
import {AppStateType} from "../../../store/ReduxStore";
import {connect} from "react-redux";
import {getUserProfileThunk, getUserStatusThunk, updateStatusThunk} from "../../../store/reducers/ProfileReducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Post} from "./Post";
import {compose} from "redux";
import AuthRedirectHOC from "../../Sidebar/Navigation/AuthRedirectHOC";
import {IProfile} from "../../../api/profileTypes";
import {RouteNames} from "../../routes/AppRouters";

const mapStateToProps = (props:AppStateType) => {
    return {
        profileInfo: props.profilePage.profile,
        authUserID: props.loginData.id,
        isAuth: props.loginData.isAuth
    }
}

type PostContainerType = {
    profileInfo: IProfile
    userID?: string | undefined
    getUserProfileThunk: (userID:number) => void
    getUserStatusThunk: (userID:number) => void
    authUserID:string


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

    methodComponentUpdate() {
        let {userID} = this.props.match.params
        if(!userID) {
            userID = this.props.authUserID
            if(!userID) {
                this.props.history.push(RouteNames.LOGIN)
            }
        }
        this.props.getUserProfileThunk(Number(userID))
        this.props.getUserStatusThunk(Number(userID))
    }


    componentDidMount() {
        this.methodComponentUpdate()
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userID !== prevProps.match.params.userID){
            this.methodComponentUpdate()
        }
    }


    render() {
        return <div>
            <Post profileInfo={this.props.profileInfo} />
        </div>
    }

}

export default compose<ComponentType>(
    connect(mapStateToProps,
        { getUserProfileThunk, getUserStatusThunk, updateStatusThunk }),
    AuthRedirectHOC,
    withRouter,
)(PostContainer)