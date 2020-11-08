import React from "react";
import classes from './Friend.module.css'

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img src={"" + props.avatar} alt="avatar" />
      {props.name}
    </div>
  );
};

export default Friend;
