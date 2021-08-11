import {DialogsArrayType, messagesData} from "../components/Dialogs/dialogs";
import {SideBarArrayType} from "../components/Sidebar/sidebar";
import {MyMessagePageType, newPostType} from "../components/Profile/MyPosts/Mymessage";

let onChange = () => {
    console.log('SSte changed')
}

export const subscribe = (callback: () => void) => {
    onChange = callback
}


let StateData: RootDataType = {
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
}

export const addNewPost = () => {
    const newPost: newPostType = {
        id: 5,
        message: StateData.profilePage.newPostText,
        likes: 0
    }
    StateData.profilePage.postData.push(newPost)
    updatePostText('')
    onChange()
}

export const updatePostText = (newText: string) => {
    StateData.profilePage.newPostText = newText
    onChange()
}


export const addMesssageText = () => {
    const newMessage: messagesData = {
        id: 5,
        message: StateData.messagePage.newMessageText
    }
    StateData.messagePage.messagesData.push(newMessage)
    onChange()
}

export const updateMessageText = (newMessage: string) => {
    StateData.messagePage.newMessageText = newMessage
    onChange()
}

export type StateType = {
    state: RootDataType
    addNewPostCallback: () => void
    updatePostText: (newText: string) => void
    addMesssageTextCallBack: () => void
    updateMessageText: (newMessage: string) => void
}
export type RootDataType = {
    profilePage: MyMessagePageType
    messagePage: DialogsArrayType
    sidebar: SideBarArrayType

}




export default StateData;
