import {DialogsArrayType, messagesData} from "../components/Dialogs/Dialogs";
import {ActionType, RootStateType} from "./state";

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Slavik'},
        {id: 3, name: 'Valera'},
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Slavik'},
        {id: 3, name: 'Valera'}
    ],
        messagesData: [
    {id: 1, message: 'Yo'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'How is Going?'},
],
    newMessageText: ''

}



export const messagePageReducer = (state:DialogsArrayType = initialState, action:ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: messagesData = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state

        case 'UPDATE-MESSAGE':
            state.newMessageText = action.newMessage
            return state
    }
    return state
}