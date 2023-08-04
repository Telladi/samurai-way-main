
type PostType = {
    id: number
    message: string
    likesCount: number
}

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type ProfilePageType = {
    posts: PostType[]
}

type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}


let state: RootStateType = {
    profilePage: {
        posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'Hi, Good', likesCount: 22},
                {id: 3, message: 'how are you?', likesCount: 24},
                {id: 4, message: 'Hi,  you?', likesCount: 43},
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

export default state;
