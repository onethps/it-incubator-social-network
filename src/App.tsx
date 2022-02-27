import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import SideBarContainter from "./redux/SideBarContainter";
import Routers from "./components/Sidebar/Navigation/Routers";


const App = () => {

    return (

        <div className='app__wrapper'>
            <Header/>
            <SideBarContainter/>
            <Routers/>
        </div>
    )
}

export default App;
