import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={props.from === "mine" ? classes.mine : classes.friend}>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
