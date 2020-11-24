import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "./../../redux/dialogsPageReducer";

const Dialogs = (props) => {

  let onMessageChange = (event) => {
    let newText = event.target.value;
    
    props.dispatch(updateNewMessageTextActionCreator(newText));
  };
  let onAddMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.state.dialogsPage.dialogsData.map((item) => (
          <DialogItem id={item.id} name={item.name} avatar={item.avatar} />
        ))}
      </div>

      <div className={classes.messages}>
        <div className={classes.history}>
          {props.state.dialogsPage.messagesData.map((item) => (
            <Message message={item.message} from={item.from} />
          ))}
        </div>
        <div className={classes.newMessage}>
          <div>
            <textarea
              onChange={onMessageChange}
              value={props.state.dialogsPage.newMessageText}
            />
          </div>
          <div>
            <button onClick={onAddMessage}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
