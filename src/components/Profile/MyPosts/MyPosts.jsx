import React from "react";
import classes from "./MyPosts.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
    <div>
      <h2>My posts</h2>
      <NewPostContainer store={props.store} />
      
      <div className={classes.posts}>
        {props.state.profilePage.postsData.map((post) => (
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
