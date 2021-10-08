let store = {
  _callSubscriber() { //вызвать(уведомить) подписчика
    console.log('State is changed');
  },

  _state: {
    profilePage: {
      posts: [{
          id: 1,
          post: 'Hi, how are you',
          likesCount: 5
        },
        {
          id: 2,
          post: 'Dimych',
          likesCount: 10
        },
        {
          id: 3,
          post: "It's my first post",
          likesCount: 15
        }
      ],
      newPostText: 'React'

    },

    dialogsPage: {
      messages: [{
          id: 1,
          message: 'Hi'
        },
        {
          id: 2,
          message: 'Hello'
        },
        {
          id: 3,
          message: 'Yo'
        },
        {
          id: 4,
          message: 'How are you?'
        },

      ],

      newMessageText: 'React is cool',

      dialogs: [{
          id: 1,
          name: 'Andrey2',
          avatar: 'https://avavatar.ru/images/original/8/Q7OMzfTjG5ubGQx6.jpg'
        },
        {
          id: 2,
          name: 'Dimych',
          avatar: 'https://avavatar.ru/images/original/1/TEFNRLzxxtrA8205.jpg'
        },
        {
          id: 3,
          name: 'Aleksey',
          avatar: 'https://avavatar.ru/images/full/1/wgS4KQ8MVxQktf3k.jpg'
        }
      ]

    },

    sidebar: {
      friends: [{
          id: 1,
          name: 'Andrey1',
          avatar: 'https://avavatar.ru/images/original/8/Q7OMzfTjG5ubGQx6.jpg'
        },
        {
          id: 2,
          name: 'Dimych',
          avatar: 'https://avavatar.ru/images/original/1/TEFNRLzxxtrA8205.jpg'
        },
        {
          id: 3,
          name: 'Aleksey',
          avatar: 'https://avavatar.ru/images/full/1/wgS4KQ8MVxQktf3k.jpg'
        }
      ]
    }

  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newTextMessage) {
    this._state.dialogsPage.newMessageText = newTextMessage;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-TEXT-MESSAGE') {
      this._state.dialogsPage.newMessageText = action.newTextMessage;
      this._callSubscriber(this._state);
    }

  }

 

}

 window.store = store;

export default store;