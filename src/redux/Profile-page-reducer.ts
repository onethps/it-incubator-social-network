import {newPostType} from "../components/Profile/MyPosts/Mymessage";
import {GlobalPostType} from "./ProfiePageContainer";

let initialState = {
    postData: [
        {id: 1, message: 'Hi how are u', likes: 10},
        {id: 2, message: 'Hey, are u fine?', likes: 11},
        {id: 3, message: 'Bye bye', likes: 8},
    ],
    newPostText: ''
}
export type initialProfileStateType = typeof initialState





export const profilePageReducer = (state: initialProfileStateType = initialState, action: GlobalPostType):initialProfileStateType => {
    let stateCopy = {...state}

    switch (action.type) {
        case 'ADD-POST':
            const newPost: newPostType = {
                id: 5,
                message: stateCopy.newPostText,
                likes: 0
            }
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case 'UPDATE-POST':
            stateCopy.newPostText = action.newText
            return stateCopy
        default:
            return state
    }

}