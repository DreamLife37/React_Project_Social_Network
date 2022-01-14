import {
  profileAPI,
  userAPI
} from "../api/api";

const ADD_POST = 'ADD-POST';
/* const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'

let initialState = {
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
  //newPostText: 'React',
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        post: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
     /* case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };  */

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }

    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
})

 /* export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}  */

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data));
      });
  }
}

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatus(response.data));
      });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      });
  }
}

export default profileReducer;