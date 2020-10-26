import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts"

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          alt="background"
          src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
