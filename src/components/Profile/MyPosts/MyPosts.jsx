import React from "react";
import classes from "./MyPosts.module.css";
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

let postsData = [
    {id:'1', message:'hello from react', likesCount:'15', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE2_4ZaThwQbloPcJIs0DK-Dcf3XuK5JHZ9g&usqp=CAU'},
    {id:'2', message:'it is my first message', likesCount:'1', avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOAs4W1oDheD8oRE6KspKzmy9EdQmciyHC9w&usqp=CAU'}
]

const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <NewPost />
      <div className={classes.posts}>
        <Post
          message={postsData[0].message}
          likeCounts={postsData[0].likesCount}
          avatar={postsData[0].avatar}
        />
        <Post
          message={postsData[1].message}
          likeCounts={postsData[1].likesCount}
          avatar={postsData[1].avatar}
        />
      </div>
    </div>
  );
};

export default MyPosts;
