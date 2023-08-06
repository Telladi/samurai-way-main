import {RerenderEntireTree} from "../Rerender";


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type SidebarType = {}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}


export const state: StateType = {
    profilePage: {
        posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'Hi, Good', likesCount: 22},

        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Igor'},
            {id: 5, name: 'Sveta'},
            {id: 6, name: 'Viktor'},
        ],
        messages: [
            {id: 1, message: "hi"},
            {id: 2, message: "hi"},
            {id: 3, message: "hi"},
            {id: 4, message: "hi"},
            {id: 5, message: "hi"},
        ]
    },
    sidebar: {}
}

export const addPost = (message: string) => {

    let newPost = {id: 3, message, likesCount: 2}
    state.profilePage.posts.unshift(newPost);
    console.log(state.profilePage.posts)
    RerenderEntireTree(state)

}


