import React from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {MainPage} from "./components/Content/mainPage";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {DialogsPageContainer} from "./redux/DialogsPageContainer";
import SideBarContainter from "./redux/SideBarContainter";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


const App = () => {

    return (

        <div className='app__wrapper'>
            <Header/>
            <SideBarContainter/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="*"  element={ <Navigate to={'/mainpage'}/>}/>
                    <Route path='/dialogs/' element={<DialogsPageContainer/>}/>
                    <Route path='/mainpage/' element={<MainPage/>}/>
                    <Route path='/news/' element={News}/>
                    <Route path='/music/' element={Music}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
