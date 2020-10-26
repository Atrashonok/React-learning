import React from "react";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={`${classes.dialog} ${classes.active}`}>Dmitry</div>
        <div className={classes.dialog}>Alexey</div>
        <div className={classes.dialog}>Nikita</div>
        <div className={classes.dialog}>Andrey</div>
      </div>

      <div className={classes.messages}>
        <div className={classes.message}>hi</div>
        <div className={classes.message}>how are u?</div>
        <div className={classes.message}>fine</div>
      </div>
    </div>
  );
};

export default Dialogs;
