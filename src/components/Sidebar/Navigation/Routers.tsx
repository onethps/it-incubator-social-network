import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../../Login/LoginPage";
import UsersContainer from "../../Users/UsersContainer";
import DialogsPageContainer from "../../Dialogs/DialogsPageContainer";
import ProfilePageContainer from "../../Profile/ProfiePageContainer";


export const Routers = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*"  element={ <Navigate to={'/mainpage'}/>}/>
                <Route path='/dialogs/' element={<DialogsPageContainer/>}/>
                <Route path='/mainpage/' element={  <ProfilePageContainer/>}/>
                <Route path='/mainpage/:userID' element={  <ProfilePageContainer/>}/>
                <Route path='/users/' element={<UsersContainer />}/>
                <Route path='/login/' element={<LoginPage />}/>
            </Routes>
        </div>
    );
};

export default Routers;