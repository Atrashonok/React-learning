const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

export const updateNewMessageTextActionCreator = (newText) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

let initialState = {
  dialogsData: [
    {
      id: "1",
      name: "Alex",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "2",
      name: "Dmitry",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "3",
      name: "Andrey",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "4",
      name: "Alexey",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "5",
      name: "Nikita",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "6",
      name: "Max",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "7",
      name: "Lena",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
    {
      id: "8",
      name: "Anna",
      avatar:
        "https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg",
    },
  ],
  messagesData: [
    { id: "1", message: "hi", from: "friend" },
    { id: "2", message: "how are u?", from: "friend" },
    { id: "3", message: "fine, u?", from: "mine" },
    { id: "4", message: "me 2", from: "friend" },
  ],
  newMessageText: "new message",
};

const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: "3",
        message: state.newMessageText,
        from: "mine",
      };

      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];

      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };

      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default dialogsPageReducer;
