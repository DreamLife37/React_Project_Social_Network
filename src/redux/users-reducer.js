

import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      }

      case UNFOLLOW:
        return {
          ...state,
          users: state.users.map(u => {
            if (u.id === action.userID) {
              return {
                ...u,
                followed: false
              }
            }
            return u;
          })
        }

        case SET_USER: {
          return {
            ...state,
            users: action.users
          }
        }
        case SET_CURRENT_PAGE: {
          return {
            ...state,
            currentPage: action.currentPage
          }
        }

        case SET_TOTAL_USERS_COUNT: {
          return {
            ...state,
            totalUsersCount: action.count
          }
        }

        case TOGGLE_IS_FETCHING: {
          return {
            ...state,
            isFetching: action.isFetching
          }
        }

        case TOOGLE_IS_FOLLOWING_PROGRESS: {
          return {
            ...state,
            followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
          }
        }

        default:
          return state;
  }
}

export const followSuccess = (userID) => ({
  type: FOLLOW,
  userID
})
export const unfollowSuccess = (userID) => ({
  type: UNFOLLOW,
  userID
})
export const setUsers = (users) => ({
  type: SET_USER,
  users
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOOGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
})

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(currentPage))
    });
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
                                userAPI.follow(userId).then(response => {
                                    if (response.data.resultCode == 0) {
                                        dispatch(followSuccess(userId));
                                    }
                                    dispatch(toggleFollowingProgress(false, userId));
                                })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    userAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode == 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
  }
}



export default usersReducer;