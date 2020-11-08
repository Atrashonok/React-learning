import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    debugger
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsData.map((item) => (
          <DialogItem id={item.id} name={item.name} avatar={item.avatar} />
        ))}
      </div>

      <div className={classes.messages}>
        {props.messagesData.map((item) => (
          <Message message={item.message} from={item.from} />
        ))}
      </div>
    </div>
  );

};

export default Dialogs;
