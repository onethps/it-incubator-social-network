import {combineReducers, createStore} from "redux";
import {messagePageReducer} from "./message-page-reducer";
import {profilePageReducer} from "./profile-page-reducer";
import SidebarReducer from "./sidebar-reducer";


let RootReducer = combineReducers({
    messagePage: messagePageReducer,
    profilePage: profilePageReducer,
    sidebar: SidebarReducer
})


type RootReducerType = typeof RootReducer

export type AppStateType = ReturnType<RootReducerType>



export const store = createStore(RootReducer);


export default  store