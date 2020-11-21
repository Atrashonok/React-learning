import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let newText = newMessageElement.current.value;

    props.dispatch({
      type: "UPDATE-NEW-MESSAGE-TEXT",
      newText: newText,
    });
  };

  let addMessage = () => {
    props.dispatch({
      type: "ADD-MESSAGE",
    });
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.state.dialogsPage.dialogsData.map((item) => (
          <DialogItem id={item.id} name={item.name} avatar={item.avatar} />
        ))}
      </div>

      <div className={classes.messages}>
        {props.state.dialogsPage.messagesData.map((item) => (
          <Message message={item.message} from={item.from} />
        ))}
        <div className={classes.newMessage}>
          <div>
            <textarea
              ref={newMessageElement}
              onChange={onMessageChange}
              value={props.state.dialogsPage.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
