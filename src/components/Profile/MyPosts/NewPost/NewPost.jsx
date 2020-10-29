import React from "react";
import classes from './NewPost.module.css'

const NewPost = (props) => {
  return (
    <div>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </div>
  );
};

export default NewPost
