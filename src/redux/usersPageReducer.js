import {UsersAPI, followAPI} from '../api/api'

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

export const onFollow = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const onUnfollow = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const onSetUsers = (users) => ({
  type: SET_USERS,
  users: users,
});
export const onSetCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  page,
});
export const onToggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const onToggleFollowingInProgress = (followingInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  followingInProgress,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => { 
    return (dispatch) => {
        dispatch(onToggleIsFetching(true));
  
        UsersAPI.getUsers(currentPage, pageSize).then(
          (response) => {
            dispatch(onToggleIsFetching(false));
            dispatch(onSetUsers(response.items));
          }
        );
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(onToggleFollowingInProgress(true, userId));
                  followAPI.unfollow(userId).then((response) => {
                    if (response.resultCode === 0) {
                      dispatch(onUnfollow(userId));
                    }
                    dispatch(onToggleFollowingInProgress(false, userId));
                  });
    }
} 
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(onToggleFollowingInProgress(true, userId));
                  followAPI.follow(userId).then((response) => {
                    if (response.resultCode === 0) {
                      dispatch(onFollow(userId));
                    }
                    dispatch(onToggleFollowingInProgress(false, userId));
                  });
    }
} 

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };

    case SET_USERS: {
      //   return { ...state, users: [...state.users, ...action.users] };
      return { ...state, users: [...action.users] };
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.page };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export default usersPageReducer;
