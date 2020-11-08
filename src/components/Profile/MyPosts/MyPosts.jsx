import React from "react";
import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      <h2>My posts</h2>
      <NewPost />

      <div className={classes.posts}>
        {props.postsData.map((post) => (
          <Post
            message={post.message}
            likeCounts={post.likesCount}
            avatar={post.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
