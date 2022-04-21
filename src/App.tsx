import React, {ComponentType} from 'react';
import './App.css';
import SideBarContainter from "./components/Sidebar/SideBarContainter";
import Routers from "./components/Sidebar/Navigation/Routers";
import HeaderContainer from "./components/Header/HeaderContainer";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLoginDataThunk} from "./redux/auth-reducer";
import PreLoader from "./common/PreLoader";
import {initializeAppAC} from "./components/Users/app-reducer";


type AppType = {
    inicialize:boolean
    inicializetApp: () => void

}

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.inicializetApp()


    }


    render() {

        if (!this.props.inicialize) return <PreLoader/>

            return (
                <div className='app__wrapper'>
                    <HeaderContainer/>
                    <SideBarContainter/>
                    <Routers/>
                </div>
            )
        }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        inicialize: state.appReducer.initializec
    }

}

export default compose<ComponentType> (
    connect(
        mapStateToProps,{inicializetApp: initializeAppAC}))(App)


