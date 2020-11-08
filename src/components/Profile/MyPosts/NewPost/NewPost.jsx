import React from "react";

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default NewPost;
