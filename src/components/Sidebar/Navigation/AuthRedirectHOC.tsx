import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

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
        let {isAuth, ...jopa} = props

        if (!props.isAuth) return <Navigate to={'/login'}/>



        return <Component {...jopa as T}/>
    }


    return  connect(mapStateToProps)(WrappedComponent)

}


export default AuthRedirectHoc;


