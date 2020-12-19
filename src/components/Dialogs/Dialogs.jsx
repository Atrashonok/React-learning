import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    
  let onMessageChange = (event) => {
    let newText = event.target.value;
    props.onMessageChange(newText);
  };

  let onAddMessage = () => {
    props.onAddMessage();
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsPage.dialogsData.map((item) => (
          <DialogItem id={item.id} name={item.name} avatar={item.avatar} key={item.id}/>
        ))}
      </div>

      <div className={classes.messages}>
        <div className={classes.history}>
          {props.dialogsPage.messagesData.map((item) => (
            <Message message={item.message} from={item.from} key={item.id} />
          ))}
        </div>
        <div className={classes.newMessage}>
          <div>
            <textarea
              onChange={onMessageChange}
              value={props.dialogsPage.newMessageText}
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
