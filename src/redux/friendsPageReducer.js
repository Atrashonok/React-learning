let initialState = {
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
};

const friendsPageReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};
export default friendsPageReducer;
