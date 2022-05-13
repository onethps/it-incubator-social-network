import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import UsersContainer from "./Users/UsersContainer";
import DialogsPageContainer from "./Dialogs/DialogsPageContainer";
import ProfilePageContainer from "./Profile/ProfiePageContainer";


export enum RouteNames {
    DIALOGS = '/dialogs/',
    MAINPAGE = '/mainpage/:userID',
    MAINPAGE1 = '/mainpage/',
    USERS = '/users/',
    LOGIN = '/login/',
}


export const AppRouters = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                {/*<Route path="*"  element={ <Navigate to={RouteNames.MAINPAGE}/>}/>*/}
                <Route path={RouteNames.DIALOGS} element={<DialogsPageContainer/>}/>
                <Route path={RouteNames.MAINPAGE} element={<ProfilePageContainer/>}/>
                <Route path={RouteNames.MAINPAGE1} element={<ProfilePageContainer/>}/>
                <Route path={RouteNames.USERS} element={<UsersContainer />}/>
                <Route path={RouteNames.LOGIN} element={<LoginPage />}/>
            </Routes>
        </div>
    );
};

export default AppRouters;