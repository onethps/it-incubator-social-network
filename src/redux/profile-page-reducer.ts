import {MyMessagePageType, newPostType} from "../components/Profile/MyPosts/Mymessage";
import {ActionType} from "./state";

let initialState = {
    postData: [
        {id: 1, message: 'Hi how are u', likes: 10},
        {id: 2, message: 'Hey, are u fine?', likes: 11},
        {id: 3, message: 'Bye bye', likes: 8},
    ],
    newPostText: ''
}


export const profilePageReducer = (state: MyMessagePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: newPostType = {
                id: 5,
                message: state.newPostText,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-POST':
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}