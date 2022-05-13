import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {loginization} from "../../store/reducers/AuthReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../store/ReduxStore";

type FormDataType = {
    email:string
    password:string
    rembemberMe:boolean
}

type LoginPageType = {
    loginization: (email:string, password:string, rememberMe:boolean) => void
    isAuth:boolean
}

const mapStateToProps = (props:AppStateType) => {
    return {
        isAuth: props.loginData.isAuth
    }
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'} name={'email'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rembemberMe'} component={'input'}/> rememb me
            </div>
            <div>
                {props.error}
            </div>
            <div>
                <button>LOGIN</button>
            </div>

        </form>
    )
}



const LoginReduxForm = reduxForm<FormDataType>({form:'login'})(LoginForm)




export const LoginPage: React.FC<LoginPageType> = (props) => {


    // n59GsqYXu9!_U65

    if (props.isAuth) return <Navigate to={'/mainpage'}/>

    const onSubmit = (formData:FormDataType) => {
        props.loginization(formData.email, formData.password, true)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect (mapStateToProps, {loginization})(LoginPage);


