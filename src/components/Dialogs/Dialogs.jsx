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

let dialogsData = [
  { id: "1", name: "Alex" },
  { id: "2", name: "Dmitry" },
  { id: "3", name: "Andrey" },
  { id: "4", name: "Alexey" },
  { id: "5", name: "Nikita" },
  { id: "6", name: "Max" },
  { id: "7", name: "Lena" },
  { id: "8", name: "Anna" },
];

let messagesData = [
  { id: "1", message: "hi" },
  { id: "2", message: "how are u?" },
  { id: "3", message: "fine, u?" },
  { id: "4", message: "me 2" },
];

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
        <DialogItem name={dialogsData[6].name} id={dialogsData[6].id} />
        <DialogItem name={dialogsData[7].name} id={dialogsData[7].id} />
      </div>
      <div className={classes.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id} />
        <Message message={messagesData[1].message} id={messagesData[1].id} />
        <Message message={messagesData[2].message} id={messagesData[2].id} />
        <Message message={messagesData[3].message} id={messagesData[3].id} />
      </div>
    </div>
  );
};

export default Dialogs;
