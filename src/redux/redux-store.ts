import {combineReducers, createStore} from "redux";
import {messagePageReducer} from "./message-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";


let reducers = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer
})

export const store = createStore(reducers);


export default  store