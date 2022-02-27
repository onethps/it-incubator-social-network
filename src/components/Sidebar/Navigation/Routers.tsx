import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsPageContainer} from "../../../redux/DialogsPageContainer";
import {MainPage} from "../../Content/mainPage";
import {News} from "../../News/news";
import {Music} from "../../Music/music";

export const Routers = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*"  element={ <Navigate to={'/mainpage'}/>}/>
                <Route path='/dialogs/' element={<DialogsPageContainer/>}/>
                <Route path='/mainpage/' element={<MainPage/>}/>
                <Route path='/news/' element={News}/>
                <Route path='/music/' element={Music}/>
            </Routes>
        </div>
    );
};

export default Routers;