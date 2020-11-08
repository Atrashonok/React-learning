import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";


const DialogItem = (props) => {
  return (
    <div className={classes.dialog}>
      <NavLink
        to={"/dialogs/" + props.id}
        activeClassName={classes.activeDialog}
      >
        <div>
          <img src={" " + props.avatar} alt="avatar" />
          {props.name}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
