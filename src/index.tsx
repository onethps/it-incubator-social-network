import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";
import store, {AppStateType} from "./redux/redux-store";


export const renderTree = (state:AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

renderTree(store.getState())

store.subscribe(() => {
    renderTree(store.getState())

})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
