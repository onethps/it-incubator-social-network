import {SideBarArrayType} from "../components/Sidebar/sidebar";
import {MyMessagePageType, newPostType} from "../components/Profile/MyPosts/Mymessage";
import {DialogsArrayType, messagesData} from "../components/Dialogs/Dialogs";
import {profilePageReducer} from "./profile-page-reducer";
import {messagePageReducer} from "./message-page-reducer";

export type StoreType = {
    _state: RootStateType
    subscribe: (callback: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch: (action: ActionType) => void
}


const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi how are u', likes: 10},
                {id: 2, message: 'Hey, are u fine?', likes: 11},
                {id: 3, message: 'Bye bye', likes: 8},
            ],
            newPostText: ''
        },
        messagePage: {
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
                {id: 2, message: 'osfgsag'},
                {id: 3, message: 'VSVQWfqwfqwf'},
            ],
            newMessageText: ''

        },
        sidebar: {
            menuLinks: [
                {id: 1, name: 'MainPage', link: '/mainpage'},
                {id: 2, name: 'Dialogs', link: '/dialogs'},
                {id: 3, name: 'News', link: '/news'}
            ],
            friendsList: [
                {id: 1, name: 'Igor', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
                {id: 2, name: 'Valera', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
                {id: 3, name: 'Semen', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
            ]
        }

    },

    _onChange() {
        console.log('State changed')
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        store._state.profilePage = profilePageReducer(store._state.profilePage, action)
        store._state.messagePage = messagePageReducer(store._state.messagePage, action)

        store._onChange()

        // switch (action.type) {
        //
        //     case 'ADD-POST':
        //         const newPost: newPostType = {
        //             id: 5,
        //             message: this._state.profilePage.newPostText,
        //             likes: 0
        //         }
        //         this._state.profilePage.postData.push(newPost)
        //         this._state.profilePage.newPostText = ''
        //         this._onChange()
        //         return this._state
        //     case 'UPDATE-POST':
        //
        //         this._state.profilePage.newPostText = action.newText
        //         this._onChange()
        //         return this._state
        //     case 'ADD-MESSAGE':
        //         const newMessage: messagesData = {
        //             id: 5,
        //             message: this._state.messagePage.newMessageText
        //         }
        //         this._state.messagePage.messagesData.push(newMessage)
        //         this._onChange()
        //         return this._state
        //
        //     case 'UPDATE-MESSAGE':
        //         this._state.messagePage.newMessageText = action.newMessage
        //         this._onChange()
        //         return this._state
        //
        //     default:
        //         return this._state

    }

}

export const AddPostCreator = (): addPostType => {
    return {
        type: 'ADD-POST',
    }
}


export const AddNewMessage = (): AddNewMessageType => {
    return {
        type: 'ADD-MESSAGE'
    }
}

export const UpdatePostCreator = (newText: string): updatePostType => {
    return {
        type: 'UPDATE-POST',
        newText: newText
    }
}

export const updateMessage = (newMessage: string): updateMessageType => {
    return {
        type: 'UPDATE-MESSAGE',
        newMessage: newMessage
    }
}

export type ActionType = updateMessageType |
    updatePostType | AddNewMessageType | addPostType


export type updateMessageType = {
    type: 'UPDATE-MESSAGE',
    newMessage: string
}

export type updatePostType = {
    type: 'UPDATE-POST',
    newText: string
}

export type AddNewMessageType = {
    type: 'ADD-MESSAGE'
}

export type addPostType = {
    type: 'ADD-POST'
}

export type StateType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}


export type RootStateType = {
    profilePage: MyMessagePageType
    messagePage: DialogsArrayType
    sidebar: SideBarArrayType

}

export default store;
