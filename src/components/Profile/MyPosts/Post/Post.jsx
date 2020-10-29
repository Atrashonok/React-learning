import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <div>
        <img src={"" + props.avatar} alt="avatar" />
      </div>

      {props.message}
      <div>
        <span>like</span>
        <span> {props.likeCounts} </span>
      </div>
    </div>
  );
};

export default Post;
