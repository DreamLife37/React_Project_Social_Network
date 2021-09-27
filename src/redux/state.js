import { rerenderEntireTree } from "../render";

  let state = {
    profilePage: {
      posts: [
        { id: 1, post: 'Hi, how are you', likesCount: 5 },
        { id: 2, post: 'Dimych', likesCount: 10 },
        { id: 3, post: "It's my first post", likesCount: 15 }
      ]
    },

    dialogsPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'Yo' }
      ],
      dialogs: [
        { id: 1, name: 'Andrey2', avatar: 'https://avavatar.ru/images/original/8/Q7OMzfTjG5ubGQx6.jpg' },
        { id: 2, name: 'Dimych', avatar: 'https://avavatar.ru/images/original/1/TEFNRLzxxtrA8205.jpg'},
        { id: 3, name: 'Aleksey', avatar: 'https://avavatar.ru/images/full/1/wgS4KQ8MVxQktf3k.jpg'}
      ]
    
    },
    
    sidebar: {
      friends: [
      { id: 1, name: 'Andrey1', avatar: 'https://avavatar.ru/images/original/8/Q7OMzfTjG5ubGQx6.jpg' },
      { id: 2, name: 'Dimych', avatar: 'https://avavatar.ru/images/original/1/TEFNRLzxxtrA8205.jpg'},
      { id: 3, name: 'Aleksey', avatar: 'https://avavatar.ru/images/full/1/wgS4KQ8MVxQktf3k.jpg'}
    ]
  }

  }

  export let addPost = (postMessage) => {
    debugger;
    let newPost = {
      id: 5,
      post: postMessage,
      likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
  }

  export default state;