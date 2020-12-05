import React from "react";

const NewPost = (props) => {

  let onPostChange = (event) => {
    let newText = event.target.value;
    props.onPostChange(newText);
  };

  let onAddPost = () => {
    props.onAddPost();
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
    </div>
  );
};

export default NewPost;
