import {DialogsArrayType, messagesData} from "../components/Dialogs/Dialogs";
import {ActionType, RootStateType} from "./state";

export const messagePageReducer = (state:DialogsArrayType, action:ActionType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: messagesData = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            return state

        case 'UPDATE-MESSAGE':
            state.newMessageText = action.newMessage
            return state
    }
    return state
}