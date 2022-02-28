

let initialState = {
    menuLinks: [
        {id: 1, name: 'MainPage', link: '/mainpage'},
        {id: 2, name: 'Dialogs', link: '/dialogs'},
        {id: 3, name: 'Users', link: '/users'}
    ],
    friendsList: [
        {id: 1, name: 'Igor', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
        {id: 2, name: 'Valera', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
        {id: 3, name: 'Semen', avatarLink: 'https://icons.iconarchive.com/icons/sonya/swarm/256/Cat-icon.png'},
    ]


}

export type initialSidebarStateType = typeof initialState


export const SidebarReducer = (state: initialSidebarStateType = initialState, action: any): initialSidebarStateType => {

    return state
};

export default SidebarReducer;