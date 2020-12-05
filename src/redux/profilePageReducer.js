const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";

export const updateNewPostTextActionCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

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
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        likesCount: 0,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE2_4ZaThwQbloPcJIs0DK-Dcf3XuK5JHZ9g&usqp=CAU",
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export default profilePageReducer;
