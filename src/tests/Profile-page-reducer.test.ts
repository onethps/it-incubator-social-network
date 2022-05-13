import {
    AddPostCreator,
    initialProfileStateType,
    profileReducer,
    setProfile,
    setStatus
} from "../store/reducers/ProfileReducer";

let initState:initialProfileStateType;

beforeEach(() => {

    initState = {
        postData: [
            {id: 1, message: 'Hi how are u', likes: 10},
            {id: 2, message: 'Hey, are u fine?', likes: 11},
            {id: 3, message: 'Bye bye', likes: 8},
        ],
        profile: null,
        status: ''
    }




})

describe('ProfilePageReducer', () => {

    let localInit = {
        profile: null,
        status: '',
        postData: [
            {id: 1, message: 'Hi how are u', likes: 10},
        ]
    }
    it('message should be added', () => {
        const action = AddPostCreator
        let endState = profileReducer(localInit, action('new post'))

        expect(endState.postData.length).toBe(2)
        // expect(endState.postData[1].id).toBe(5)

    })

    it('profile should be updated', () => {
        const action = setProfile
        let endState = profileReducer(initState, action('new profile'))
        expect(endState.profile).toBe('new profile')
    })

    it('status should be updated', () => {
        const action = setStatus
        let endState = profileReducer(initState, action('new status'))
        expect(endState.status).toBe('new status')
    })

})

