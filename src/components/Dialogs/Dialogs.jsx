import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        activeClassName={classes.activeDialog}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Dmitry" id="1" />
        <DialogItem name="Alex" id="2" />
        <DialogItem name="Andrey" id="3" />
        <DialogItem name="Alexey" id="4" />
        <DialogItem name="Nikita" id="5" />
      </div>
      <div className={classes.messages}>
        <Message message="hi" />
        <Message message="how are u?" />
        <Message message="fine, u?" />
      </div>
    </div>
  );
};

export default Dialogs;
