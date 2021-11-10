const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 3
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
        return {...state, users: action.users}
      }
      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
      }

      case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
      }
      

      default:
            return state;
    }
}
 
export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW,userID})
export const setUsersAC = (users) => ({type: SET_USER, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export default usersReducer;