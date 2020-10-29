import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={classes.wrapper} >
      <div className={classes.backgroundImage}>
        <img alt="background" src={"" + props.backgroundImageSRC} />
      </div>

      <div className={classes.avatar}>
        <img src={"" + props.avatarSRC} alt="avatar" />
      </div>

      <div className={classes.descriprion}>
        <div>Name: {props.FirstName}</div>
        <div>Last Name: {props.LastName}</div>
        <div>Age: {props.age}</div>
        <div>City: {props.city}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
