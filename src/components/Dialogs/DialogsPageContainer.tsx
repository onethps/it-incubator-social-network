import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {AddNewMessage, inicialStateMessageType, updateMessage} from "../../redux/Message-page-reducer";

// export type DialogsPageContainerType = {
//
// }
// //
// // export const DialogsPageContainer: React.FC<DialogsPageContainerType> = (props) => {
// //
// //     let state = props.store.getState()
// //
// //     const addMessageTextCallAction = () => {
// //         props.store.dispatch(AddNewMessage())
// //     }
// //
// //     let updateMessageTextAction = (body: string) => {
// //         props.store.dispatch(updateMessage(body))
// //     }
// //     return (
// //         <Dialogs messagesPage={state.messagePage} addMessageTextCallAction={addMessageTextCallAction}
// //                  updateMessageTextAction={updateMessageTextAction}/>
// //     )
// // }


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

export const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
