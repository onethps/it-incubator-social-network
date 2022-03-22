import {connect} from "react-redux";
import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {dataType, getDataAC} from "../../redux/auth-reducer";
import {Header} from "./Header";
import {UserAPI} from "../../api/api";

type propstHeaderContainerType = {
    getDataAC: (data:dataType) => void
    LoginData:dataType
}

class HeaderContainer extends React.Component<propstHeaderContainerType> {

    componentDidMount() {
        UserAPI.getLoginData()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.getDataAC(data.data)
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

