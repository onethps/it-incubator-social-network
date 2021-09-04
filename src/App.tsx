import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/header";
import {MainPage} from "./components/Content/mainPage";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import Sidebar from "./components/Sidebar/sidebar";
import {StateType} from "./redux/state";
import {DialogsPageContainer} from "./redux/DialogsPageContainer";




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
                    <Route path={'/'} exact render={() => <Redirect to={'/mainpage'}/>}/>
                    <Route path='/dialogs/' render={() =>
                        <DialogsPageContainer
                            store={props.store}
                            // addMessageTextCallBack={props.store.addMessageText.bind(store)}
                            // updateMessageText={props.store.updateMessageText.bind(store)}
                        />}/>
                    <Route path='/mainpage/' render={() =>
                        <MainPage
                            store={props.store}
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
