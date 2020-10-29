import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.content}>
      <ProfileInfo
        FirstName="Alex"
        LastName="Belov"
        age="23"
        city="Brest"
        avatarSRC="data:image/jpeg;base64,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"
        backgroundImageSRC="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
      />

      <MyPosts />
    </div>
  );
};

export default Profile;
