import {MyMessagePageType, newPostType} from "../components/Profile/MyPosts/Mymessage";
import {ActionType} from "./state";


export const profilePageReducer = (state: MyMessagePageType, action: ActionType) => {
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