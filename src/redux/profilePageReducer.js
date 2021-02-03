import { UsersAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onSetUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfileThunkCreator = (userId) => (dispatch) => {
    UsersAPI.getUserById(userId)
    .then((response) => {
      dispatch(onSetUserProfile(response));
    });
}

let initialState = {
  postsData: [
    {
      id: 1,
      message: "hello from react",
      likesCount: 15,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE2_4ZaThwQbloPcJIs0DK-Dcf3XuK5JHZ9g&usqp=CAU",
    },
    {
      id: 2,
      message: "it is my first message",
      likesCount: 1,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOAs4W1oDheD8oRE6KspKzmy9EdQmciyHC9w&usqp=CAU",
    },
  ],
  newPostText: "new post",
  profile: null,
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1,
        message: state.newPostText,
        likesCount: 0,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE2_4ZaThwQbloPcJIs0DK-Dcf3XuK5JHZ9g&usqp=CAU",
      };

      return {
        ...state,
        postsData: [newPost, ...state.postsData],
        newPostText: "",
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export default profilePageReducer;
