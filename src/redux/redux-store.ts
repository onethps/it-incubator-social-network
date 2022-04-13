import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagePageReducer, messagePageReducerTypes} from "./Message-page-reducer";
import SidebarReducer from "./sidebar-reducer";
import {profilePageReducer, profileReducerTypes} from './Profile-page-reducer';
import usersReducer, {usersReducerTypes} from "./usersReducer";
import authReducer, {authReducerTypes} from "./auth-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, inicilizecSuccerBoolType} from "../components/Users/app-reducer";


let RootReducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    usersPage:usersReducer,
    sidebar: SidebarReducer,
    loginData: authReducer,
    appReducer: appReducer,
    form: formReducer
})

type RootReducerType = typeof RootReducer

export type AppStateType = ReturnType<RootReducerType>


export const store = createStore(RootReducer, applyMiddleware(thunk));


export type AppReducersTypes = authReducerTypes | messagePageReducerTypes
    | profileReducerTypes | usersReducerTypes

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducersTypes>


// @ts-ignore
window.store = store

export default  store