import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../store/ReduxStore";
import {AddNewMessageAC, initialStateMessageType} from "../../store/reducers/MessageReducer";
import AuthRedirectHOC from "../Sidebar/Navigation/AuthRedirectHOC";
import {ComponentType} from "react";


type mapStatePropsType = {
    messagesPage:initialStateMessageType
}

type MapDispatchPropsType = {
    addMessageTextCallAction: (newMessage:string) => void
}

let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        messagesPage: state.messagePage
    }
}

export type DialogPropsContainerType = mapStatePropsType & MapDispatchPropsType

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType  => {
    return {
        addMessageTextCallAction: (newMessage:string) => {
            dispatch(AddNewMessageAC(newMessage))
        },
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectHOC
)(Dialogs)
