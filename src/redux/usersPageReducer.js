const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 19,
  currentPage: 1,
  isFetching: false,
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

    default:
      return state;
  }
};

export default usersPageReducer;
