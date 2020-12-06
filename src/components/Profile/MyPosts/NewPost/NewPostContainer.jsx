import React from "react";
import NewPost from "./NewPost";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../redux/profilePageReducer";
import StoreContext from "../../../../StoreContext";

const NewPostContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onPostChange = (newText) => {
          store.dispatch(updateNewPostTextActionCreator(newText));
        };

        let onAddPost = () => {
          store.dispatch(addPostActionCreator());
        };

        let newPostText = store.getState().profilePage.newPostText;

        return (
          <NewPost
            onPostChange={onPostChange}
            onAddPost={onAddPost}
            newPostText={newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default NewPostContainer;
