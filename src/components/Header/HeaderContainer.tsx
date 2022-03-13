import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {dataType, getDataAC} from "../../redux/auth-reducer";
import {Header} from "./Header";
import axios from "axios";
import App from "../../App";

type propstHeaderContainerType = {
    getDataAC: (data:dataType) => void
    LoginData:dataType
}

class HeaderContainer extends React.Component<propstHeaderContainerType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        }).then(response => {
                if (response.data.resultCode === 0) {
                this.props.getDataAC(response.data.data)
                }
        })
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

export default connect(mapStateToProps, {
    getDataAC
})(HeaderContainer)

