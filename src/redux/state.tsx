import {DialogsArrayType, messagesData} from "../components/Dialogs/dialogs";
import {SideBarArrayType} from "../components/Sidebar/sidebar";
import {MyMessagePageType, newPostType} from "../components/Profile/MyPosts/Mymessage";

export type StoreType = {
    _state: RootStateType
    updatePostText: (newText: string) => void
    addNewPost: () => void
    subscribe: (callback: () => void) => void
    _onChange: () => void
    addMesssageText: () => void
    updateMessageText: (newMessage: string) => void
    getState: () => RootStateType
}


const store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi how are u', likes: 10},
                {id: 2, message: 'Hey, are u fine?', likes: 11},
                {id: 3, message: 'Bye bye', likes: 8},
            ],
            newPostText: 'it-JOra'

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
            newMessageText: '23124124'

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
    updatePostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    addNewPost() {
        const newPost: newPostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.postData.push(newPost)
        this.updatePostText('')
        this._onChange()
    },

    addMesssageText() {
        const newMessage: messagesData = {
            id: 5,
            message: this._state.messagePage.newMessageText
        }
        this._state.messagePage.messagesData.push(newMessage)
        this._onChange()
    },

    updateMessageText(newMessage: string) {
        this._state.messagePage.newMessageText = newMessage
        this._onChange()
    },
    _onChange() {
        console.log('State changed')
    },

    subscribe(callback: () => void) {
        this._onChange = callback
    },


    getState() {
        return this._state
    }


}

export type StateType = {
    store: StoreType
}
export type RootStateType = {
    profilePage: MyMessagePageType
    messagePage: DialogsArrayType
    sidebar: SideBarArrayType

}


export default store;
