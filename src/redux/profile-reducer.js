const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, post: 'Hi, how are you', likesCount: 5},
      {id: 2,post: 'Dimych',likesCount: 10},
      {id: 3,post: "It's my first post",likesCount: 15}],
    newPostText: 'React'
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0
            };
           
            return {
              ...state,
              posts: [...state.posts, newPost],
              newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
              ...state, 
              newPostText: action.newText
            };

        default:
            return state;
    }
}
 
export const addPostActionCreator = () => ({
    type: ADD_POST
  })
  export const updateNewPostActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export default profileReducer;