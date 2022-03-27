import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AddNewMessage, inicialStateMessageType, updateMessage} from "../../redux/Message-page-reducer";
import AuthRedirectHOC from "../Sidebar/Navigation/AuthRedirectHOC";
import {ComponentType} from "react";


type mapStatePropsType = {
    messagesPage:inicialStateMessageType
}

type MapDispatchPropsType = {
    addMessageTextCallAction: () => void
    updateMessageTextAction: (body: string) => void
}

let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        messagesPage: state.messagePage
    }
}

export type DialogPropsContainerType = mapStatePropsType & MapDispatchPropsType

let mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType  => {
    return {
        addMessageTextCallAction: () => {
            dispatch(AddNewMessage())
        },

        updateMessageTextAction: (body: string) => {
            dispatch(updateMessage(body))
        },
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirectHOC
)(Dialogs)
