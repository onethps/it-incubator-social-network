import React, {lazy, Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import PreLoader from "../../common/PreLoader";
// import LoginPage from "../Login/LoginPage";
// import UsersContainer from "../Users/UsersContainer";
// import DialogsPageContainer from "../Dialogs/DialogsPageContainer";
// import ProfilePageContainer from "../Profile/ProfiePageContainer";

const LoginPage = lazy(() => import('../Login/LoginPage'));
const UsersContainer = lazy(() => import('../Users/UsersContainer'));
const DialogsPageContainer = lazy(() => import('../Dialogs/DialogsPageContainer'));
const ProfilePageContainer = lazy(() => import('../Profile/ProfiePageContainer'));


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
            <Suspense fallback={<PreLoader/>}>
            <Routes>
                <Route path={'/'} element={<Navigate to={RouteNames.MAINPAGE1}/>}/>
                <Route path={RouteNames.DIALOGS} element={<DialogsPageContainer/>}/>
                <Route path={RouteNames.MAINPAGE} element={<ProfilePageContainer/>}/>
                <Route path={RouteNames.MAINPAGE1} element={<ProfilePageContainer/>}/>
                <Route path={RouteNames.USERS} element={<UsersContainer />}/>
                <Route path={RouteNames.LOGIN} element={<LoginPage />}/>

            </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouters;