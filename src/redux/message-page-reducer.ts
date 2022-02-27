import {ActionType} from "./state";

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


export type inicialStateMessageType = typeof initialState


export const messagePageReducer = (state: inicialStateMessageType = initialState, action: ActionType): inicialStateMessageType => {
    let stateCopy;

    switch (action.type) {
        case 'UPDATE-MESSAGE':
            stateCopy = {
                ...state,
                newMessageText: action.newMessage
            }
            return stateCopy

        case 'ADD-MESSAGE':
            let body = state.newMessageText
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }
            stateCopy.newMessageText = ''
            return stateCopy


    }
    return state
}