import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/header";
import {Navigation} from "./components/Sidebar/Navigation/navigation";
import {MainPage} from "./components/Content/mainPage";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import Sidebar from "./components/Sidebar/sidebar";
import {StateType} from "./redux/state";




const App = (props: StateType) => {


    return (
        <BrowserRouter>
            <div className='app__wrapper'>
                <Header/>
                <Sidebar
                    menuLinks={props.state.sidebar.menuLinks}
                    friendsList={props.state.sidebar.friendsList}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs/' render={() =>
                        <Dialogs
                            messagesPage={props.state.messagePage}
                            addMesssageTextCallBack={props.addMesssageTextCallBack}
                            updateMessageText={props.updateMessageText}
                        />}/>
                    <Route path='/mainpage/' render={() =>
                        <MainPage
                            profilePage={props.state.profilePage}
                            addNewPostCallback={props.addNewPostCallback}
                            updatePostText={props.updatePostText}
                        />}/>

                    <Route path='/news/' component={News}/>
                    <Route path='/music/' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
