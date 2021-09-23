
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
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Aleksey' }
      ]
    } 
  }

  export default state;