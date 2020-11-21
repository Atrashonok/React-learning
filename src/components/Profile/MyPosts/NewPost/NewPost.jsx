import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let newText = newPostElement.current.value;

    props.dispatch({
      type: "UPDATE-NEW-POST-TEXT",
      newText: newText,
    });
  };

  let addPost = () => {
    props.dispatch({
      type: "ADD-POST",
    });
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
