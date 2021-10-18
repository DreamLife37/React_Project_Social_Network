const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_POST_MESSAGE:
      state.newMessageText = action.newTextMessage;
      return state;

    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE
})
export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_MESSAGE,
    newTextMessage: text
  }
}

export default dialogReducer;