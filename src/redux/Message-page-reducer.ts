
export type inicialStateMessageType = typeof initialState

type GlobalMessagePageType = AddNewMessageType

let initialState = {
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Slavik'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Dimych'},
        {id: 5, name: 'Slavik'},
        {id: 6, name: 'Valera'}
    ],
    messagesData: [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How is Going?'},
    ],

}






type AddNewMessageType = ReturnType<typeof AddNewMessage>
export const AddNewMessage = (newMessage:string) => {
    return {
        type: 'ADD-MESSAGE', newMessage
    } as const
}



export const messagePageReducer = (state: inicialStateMessageType = initialState, action: GlobalMessagePageType): inicialStateMessageType => {
    let stateCopy;

    switch (action.type) {
        case 'ADD-MESSAGE':
            stateCopy = {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.newMessage}]
            }

            return stateCopy


    }
    return state
}