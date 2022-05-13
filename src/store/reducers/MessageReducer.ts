


export type messagePageReducerTypes = AddNewMessageACType
export type initialStateMessageType = typeof initialState

const initialState = {
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




export const messageReducer =
    (state: initialStateMessageType = initialState, action: messagePageReducerTypes): initialStateMessageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
          return  {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: action.newMessage}]
            }

        default:
            return state

    }
}


type AddNewMessageACType = ReturnType<typeof AddNewMessageAC>
export const AddNewMessageAC = (newMessage:string) => {
    return {
        type: 'ADD-MESSAGE', newMessage
    } as const
}