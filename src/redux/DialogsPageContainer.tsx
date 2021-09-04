import React from "react";
import { AddNewMessage, StoreType, updateMessage} from "../redux/state";
import {Dialogs} from "../components/Dialogs/Dialogs";

export type DialogsPageContainerType = {
    store: StoreType
}

export const DialogsPageContainer: React.FC<DialogsPageContainerType> = (props) => {

    let state = props.store.getState()

    const addMessageTextCallAction = () => {
        props.store.dispatch(AddNewMessage())
    }

    let updateMessageTextAction = (body:string) => {
        props.store.dispatch(updateMessage(body))
    }


    return (
       <Dialogs messagesPage={state.messagePage} addMessageTextCallAction={addMessageTextCallAction} updateMessageTextAction={updateMessageTextAction}/>

    )
}
