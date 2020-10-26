import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIiSpzNXPS4BkcgywUfzgWMtDE9IwEAYm5eg&usqp=CAU"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>like</span>
        <span> {props.likeCounts} </span>
      </div>
    </div>
  );
};

export default Post;
