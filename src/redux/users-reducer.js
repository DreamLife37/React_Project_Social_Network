const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';

let initialState = {
    users: [],
  };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FOLLOW:
        return {
          ...state, 
          //users: [...state.users], тоже самое, что и ниже
          //users: state.users.map(u => u)
          users: state.users.map(u => {
            if (u.id === action.userID) {
              return {...u, followed: true}
            }
            return u;
          })
        }

      case UNFOLLOW:
        return {
          ...state, 
          users: state.users.map(u => {
            if (u.id === action.userID) {
              return {...u, followed: false}
            }
            return u;
          })
        }

      case SET_USER: {
        return {...state, users: [...state.users, ...action.users]}

      }

        default:
            return state;
    }
}
 
export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => {
    return {
      type: UNFOLLOW,
      userID
    }
}
export const setUsersAC = (users) => ({type: SET_USER, users})

export default usersReducer;