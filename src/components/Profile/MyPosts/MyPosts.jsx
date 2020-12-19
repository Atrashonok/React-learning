import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let onPostChange = (event) => {
    let newText = event.target.value;
    props.onPostChange(newText);
  };

  let onAddPost = () => {
    props.onAddPost();
  };

  return (
    <div>
      <h2>My posts</h2>

      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>

      <div className={classes.posts}>
        {props.postsData.map((post) => (
          <Post
            message={post.message}
            likeCounts={post.likesCount}
            avatar={post.avatar}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
