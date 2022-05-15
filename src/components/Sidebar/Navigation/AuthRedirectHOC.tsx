import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../../store/ReduxStore";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        isAuth: state.loginData.isAuth
    }
}

function AuthRedirectHoc<T>(Component:React.ComponentType<T>){
    const WrappedComponent = (props:mapStateToPropsType) => {
        let {isAuth, ...rest} = props
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...rest as T}/>
    }
    return  connect(mapStateToProps)(WrappedComponent)
}


export default AuthRedirectHoc;


