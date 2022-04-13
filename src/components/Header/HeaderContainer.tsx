import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {getLoginDataThunk, initStateAuthType, LogoutTC} from "../../redux/auth-reducer";
import {Header} from "./Header";

type propstHeaderContainerType = {
    LoginData:initStateAuthType
    LogoutTC: () => void
}

class HeaderContainer extends React.Component<propstHeaderContainerType> {


    render() {
        return <Header {...this.props}/>;
    }

}



const mapStateToProps = (props:AppStateType) => {

    return {
        LoginData: props.loginData
    }
}

export default connect(mapStateToProps, {LogoutTC
})(HeaderContainer)

