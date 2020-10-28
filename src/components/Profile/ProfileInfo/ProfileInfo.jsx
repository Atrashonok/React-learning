import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.background} >
        <img
          alt="background"
          src="https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />
      </div>

      <div className={classes.avatar}>
        <img src="" alt="avatar" />
      </div>

      <div className={classes.descriprion}>
        <div>Name: {props.FirstName}</div>
        <div> Last Name: {props.LastName}</div>
        <div>Age: {props.age}</div>
        <div>City: {props.city}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
