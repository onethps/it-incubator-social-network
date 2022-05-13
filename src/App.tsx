import React, {ComponentType} from 'react';
import './App.css';
import SideBarContainter from "./components/Sidebar/SideBarContainter";
import AppRouters from "./components/routes/AppRouters";
import HeaderContainer from "./components/Header/HeaderContainer";
import {AppStateType} from "./store/ReduxStore";
import {compose} from "redux";
import {connect} from "react-redux";
import PreLoader from "./common/PreLoader";
import {initializeAppAC} from "./store/reducers/AppReducer";


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
                <AppRouters/>
            </div>
        )
    }
}

const mapStateToProps = (state:AppStateType) => {
    return {
        inicialize: state.appReducer.initializec
    }

}

export default compose<ComponentType> (connect(
        mapStateToProps,{inicializetApp: initializeAppAC}))(App)