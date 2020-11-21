import React from "react";
import { updateNewPostTextActionCreator, addPostActionCreator } from './../../../../redux/state'


const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let newText = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(newText));
  };

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.state.profilePage.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default NewPost;
