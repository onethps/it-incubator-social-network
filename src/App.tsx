import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {MainPage} from "./components/Content/mainPage";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import Sidebar from "./components/Sidebar/sidebar";
import {DialogsPageContainer} from "./redux/DialogsPageContainer";
import {AppStateType} from "./redux/redux-store";
import SideBarContainter from "./redux/SideBarContainter";


const App = () => {

    return (
        <BrowserRouter>
            <div className='app__wrapper'>
                <Header/>
                <SideBarContainter
                    // menuLinks={props.sidebar.menuLinks}
                    // friendsList={props.sidebar.friendsList}
                />

                <div className='app-wrapper-content'>
                    <Route path={'/'} exact render={() => <Redirect to={'/mainpage'}/>}/>
                    <Route path='/dialogs/' render={() =>
                        <DialogsPageContainer
                            // addMessageTextCallBack={props.store.addMessageText.bind(store)}
                            // updateMessageText={props.store.updateMessageText.bind(store)}
                        />}/>
                    <Route path='/mainpage/' render={() =>
                        <MainPage

                            // addNewPostCallback={props.store.addNewPost.bind(store)}
                            // updatePostText={props.store.updatePostText.bind(store)}

                        />}/>

                    <Route path='/news/' component={News}/>
                    <Route path='/music/' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
