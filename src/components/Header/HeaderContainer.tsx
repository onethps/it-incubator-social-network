import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {dataType, getLoginDataThunk, LogoutTC} from "../../redux/auth-reducer";
import {Header} from "./Header";

type propstHeaderContainerType = {
    LoginData:dataType
    LogoutTC: () => void
    getLoginDataThunk:() => void
}

class HeaderContainer extends React.Component<propstHeaderContainerType> {

    componentDidMount() {
        this.props.getLoginDataThunk()

    }


    render() {
        return <Header {...this.props}/>;
    }

}



const mapStateToProps = (props:AppStateType) => {

    return {
        LoginData: props.loginData
    }
}

export default connect(mapStateToProps, {LogoutTC, getLoginDataThunk
})(HeaderContainer)

