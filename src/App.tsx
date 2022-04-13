import React, {ComponentType} from 'react';
import './App.css';
import SideBarContainter from "./components/Sidebar/SideBarContainter";
import Routers from "./components/Sidebar/Navigation/Routers";
import HeaderContainer from "./components/Header/HeaderContainer";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {connect} from "react-redux";
import {getLoginDataThunk} from "./redux/auth-reducer";


type AppType = {
    inicialize:boolean
    getLoginDataThunk: () => void
}

class App extends React.Component<AppType> {

    componentDidMount() {
        this.props.getLoginDataThunk()


    }


    render() {

        if (!this.props.inicialize) return '....loading'

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
        mapStateToProps,{getLoginDataThunk}),
)(App)


