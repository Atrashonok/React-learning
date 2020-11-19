import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={props.from === "friend" ? classes.friend : classes.mine}>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
