import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='hello from React' likeCounts='15' />
        <Post message='it is my 1st message' likeCounts='20' />
      </div>
    </div>
  );
};

export default MyPosts;
