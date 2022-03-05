import React from 'react';
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import {DialogsPageContainer} from "../../Dialogs/DialogsPageContainer";
import {ProfilePageContainer} from "../../Profile/ProfiePageContainer";
import {UsersContainer} from "../../Users/UsersContainer";
import PostContainer from "../../Profile/PeopleProfiles/PostContainer";


export const Routers = () => {
    return (
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="*"  element={ <Navigate to={'/mainpage'}/>}/>
                <Route path='/dialogs/' element={<DialogsPageContainer/>}/>
                <Route path='/mainpage/' element={  <ProfilePageContainer/>}/>
                <Route path='/mainpage/:userID' element={  <PostContainer/>}/>
                <Route path='/users/' element={<UsersContainer />}/>
            </Routes>
        </div>
    );
};

export default Routers;