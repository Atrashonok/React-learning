import React from "react";
import NewPost from './NewPost' ;
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../redux/profilePageReducer";

const NewPostContainer = (props) => {

  let onPostChange = (newText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newText));
  };

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let newPostText=props.store.getState().profilePage.newPostText

  return (
    <NewPost
      onPostChange={onPostChange}
      onAddPost={onAddPost}
      newPostText={newPostText}
    />
  );
};

export default NewPostContainer;
