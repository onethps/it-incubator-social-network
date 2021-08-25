import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {MainPage} from "./components/Content/mainPage";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import Sidebar from "./components/Sidebar/sidebar";
import store, {StateType} from "./redux/state";
import {Dialogs} from "./components/Dialogs/Dialogs";




const App: React.FC<StateType> = (props) => {
const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app__wrapper'>
                <Header/>
                <Sidebar
                    menuLinks={state.sidebar.menuLinks}
                    friendsList={state.sidebar.friendsList}/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs/' render={() =>
                        <Dialogs
                            messagesPage={state.messagePage}
                            dispatch={props.store.dispatch}
                            // addMessageTextCallBack={props.store.addMessageText.bind(store)}
                            // updateMessageText={props.store.updateMessageText.bind(store)}
                        />}/>
                    <Route path='/mainpage/' render={() =>
                        <MainPage
                            profilePage={state.profilePage}
                            // addNewPostCallback={props.store.addNewPost.bind(store)}
                            // updatePostText={props.store.updatePostText.bind(store)}
                            dispatch={props.store.dispatch}
                        />}/>

                    <Route path='/news/' component={News}/>
                    <Route path='/music/' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
