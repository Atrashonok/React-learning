import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  let addPost = () => {
    props.addPost();
  };

  return (
    <div>
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default NewPost;
