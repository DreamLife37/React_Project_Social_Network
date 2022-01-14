const ADD_MESSAGE = 'ADD-MESSAGE';
//const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

let initialState = {
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
  //newMessageText: 'React is cool',
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
};

const dialogReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:

      let newMessage = {
        id: 5,
        message: action.newMessageText,
      };

      return {
        ...state,
        //newMessageText: '',
        messages: [...state.messages, newMessage]
      };

      /* case UPDATE_NEW_POST_MESSAGE:
        return {
          ...state,
          newMessageText: action.newTextMessage
      }; */
    default:
      return state;
  }
}

export const addMessageActionCreator = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText
})
/* export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_MESSAGE,
    newTextMessage: text
  }
} */
export default dialogReducer;