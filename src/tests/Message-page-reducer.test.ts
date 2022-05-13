import {AddNewMessageAC, initialStateMessageType, messageReducer} from "../store/reducers/MessageReducer";

let initState:initialStateMessageType;

beforeEach(() => {

    initState = {
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




})

describe('MessagePageReducer', () => {

    it('message should be added', () => {
        const action = AddNewMessageAC
        let endState = messageReducer(initState, action('new message'))

        expect(endState.messagesData.length).toBe(4)
        expect(endState.messagesData[3].message).toBe('new message')

    })

})

