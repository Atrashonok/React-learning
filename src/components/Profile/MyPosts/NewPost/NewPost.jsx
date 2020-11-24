import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "./../../../../redux/profilePageReducer";

const NewPost = (props) => {

  let onPostChange = (event) => {
    let newText = event.target.value;
    
    props.dispatch(updateNewPostTextActionCreator(newText));
  };
  let onAddPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.state.profilePage.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
    </div>
  );
};

export default NewPost;
