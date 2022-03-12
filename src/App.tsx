import React from 'react';
import './App.css';
import SideBarContainter from "./redux/SideBarContainter";
import Routers from "./components/Sidebar/Navigation/Routers";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {

    return (

        <div className='app__wrapper'>
            <HeaderContainer/>
            <SideBarContainter/>
            <Routers/>
        </div>
    )
}

export default App;
