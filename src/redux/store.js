import dialogsPageReducer from "./dialogsPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
  _state: {
    profilePage: {
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
    },

    dialogsPage: {
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
    },

    friendsPage: {
      friendsData: [
        {
          id: "1",
          name: "misha",
          avatar: "https://html5css.ru/w3images/avatar2.png",
        },
        {
          id: "2",
          name: "dasha",
          avatar: "https://html5css.ru/w3images/avatar2.png",
        },
        {
          id: "3",
          name: "sasha",
          avatar: "https://html5css.ru/w3images/avatar2.png",
        },
        {
          id: "4",
          name: "vanya",
          avatar: "https://html5css.ru/w3images/avatar2.png",
        },
        {
          id: "5",
          name: "lera",
          avatar: "https://html5css.ru/w3images/avatar2.png",
        },
      ],
    },
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profilePageReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsPageReducer(
      this._state.dialogsPage,
      action
    );
    this._state.friendsPage = friendsPageReducer(
      this._state.friendsPage,
      action
    );

    this._callSubscriber(this._state);
  },
};





export default store;
