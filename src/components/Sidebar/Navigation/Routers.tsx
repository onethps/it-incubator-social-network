import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {ProfilePageContainer} from "../../Profile/ProfiePageContainer";
import PostContainer from "../../Profile/PeopleProfiles/PostContainer";
import LoginPage from "../../Profile/LoginPage";
import UsersContainer from "../../Users/UsersContainer";
import DialogsPageContainer from "../../Dialogs/DialogsPageContainer";


export const Routers = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*"  element={ <Navigate to={'/mainpage'}/>}/>
                <Route path='/dialogs/' element={<DialogsPageContainer/>}/>
                <Route path='/mainpage/' element={  <ProfilePageContainer/>}/>
                <Route path='/mainpage/:userID' element={  <PostContainer/>}/>
                <Route path='/users/' element={<UsersContainer />}/>
                <Route path='/login/' element={<LoginPage />}/>
            </Routes>
        </div>
    );
};

export default Routers;