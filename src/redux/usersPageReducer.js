const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

export const followAC = (userId) => ({
  type: FOLLOW,
  userId: userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId: userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users: users,
});

let initialState = {
  users: [
    {
      id: '1',
      followed: false,
      avatar: "https://html5css.ru/w3images/avatar2.png",
      fullname: "Alex A.",
      location: { country: "Belarus", city: "Brest" },
      status: "looking for a job",
    },
    {
      id: '2',
      followed: true,
      avatar: "https://html5css.ru/w3images/avatar2.png",
      fullname: "Dima K.",
      location: { country: "Belarus", city: "Minsk" },
      status: "looking for a job too",
    },
    {
      id: '3',
      followed: false,
      avatar: "https://html5css.ru/w3images/avatar2.png",
      fullname: "Anna A.",
      location: { country: "Belarus", city: "Brest" },
      status: "new year is coming",
    },
  ]
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
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};

export default usersPageReducer;
