import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagePageReducer} from "./Message-page-reducer";
import SidebarReducer from "./sidebar-reducer";
import {profilePageReducer} from './Profile-page-reducer';
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";


let RootReducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    usersPage:usersReducer,
    sidebar: SidebarReducer,
    loginData: authReducer
})

type RootReducerType = typeof RootReducer

export type AppStateType = ReturnType<RootReducerType>



export const store = createStore(RootReducer, applyMiddleware(thunk));


// @ts-ignore
window.store = store

export default  store