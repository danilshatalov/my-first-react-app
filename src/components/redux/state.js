import { rerenderEntireTree } from './../../render';


let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hey, I am here', likesCount: '2 likes' },
            { id: 2, message: 'What is going on?', likesCount: '1 like' },
            { id: 3, message: 'What is your favorite color?', likesCount: '8 likes' },
            { id: 4, message: 'Him?', likesCount: '10 likes' }
        ]
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Robert' },
            { id: 2, name: 'Alexandra' },
            { id: 3, name: 'Phillip' },
            { id: 4, name: 'Tina' },
            { id: 5, name: 'Manila' },
            { id: 6, name: 'Margaret' }
        ],
        messages: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Whats up?' },
            { id: 3, message: 'Hey bro' },
            { id: 4, message: 'And you?' },
            { id: 5, message: 'What?' },
            { id: 6, message: 'Orr' }
        ]
    }
};

export let addPost = (PostMessage) => {
    let newPost = {
        id: 5,
        message: PostMessage,
        likesCount: "10 likes"
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;

