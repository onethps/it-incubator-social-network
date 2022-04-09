import {applyMiddleware, combineReducers, createStore} from "redux";
import {messagePageReducer} from "./Message-page-reducer";
import SidebarReducer from "./sidebar-reducer";
import {profilePageReducer} from './Profile-page-reducer';
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let RootReducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    usersPage:usersReducer,
    sidebar: SidebarReducer,
    loginData: authReducer,
    form: formReducer
})

type RootReducerType = typeof RootReducer

export type AppStateType = ReturnType<RootReducerType>



export const store = createStore(RootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
// export type TypedDispatch = ThunkDispatch<AppStateType, any, AnyAction>;


// @ts-ignore
window.store = store

export default  store