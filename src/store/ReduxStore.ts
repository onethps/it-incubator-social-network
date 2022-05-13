import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagePageReducerTypes, messageReducer} from "./reducers/MessageReducer";
import SiderbarReducer from "./reducers/SiderbarReducer";
import {profileReducer, profileReducerTypes} from './reducers/ProfileReducer';
import usersReducer, {usersReducerTypes} from "./reducers/UsersReducer";
import authReducer, {authReducerTypes} from "./reducers/AuthReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./reducers/AppReducer";


let RootReducer = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    usersPage:usersReducer,
    sidebar: SiderbarReducer,
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