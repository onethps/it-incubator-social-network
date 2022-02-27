import {combineReducers, createStore} from "redux";
import {messagePageReducer} from "./Message-page-reducer";
import SidebarReducer from "./sidebar-reducer";
import {profilePageReducer} from './Profile-page-reducer';


let RootReducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    sidebar: SidebarReducer
})


type RootReducerType = typeof RootReducer

export type AppStateType = ReturnType<RootReducerType>



export const store = createStore(RootReducer);


export default  store