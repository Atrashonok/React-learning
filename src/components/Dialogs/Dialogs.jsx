import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();

  //   let sendMessage = () => {
  //     let message = newMessageElement.current.value;
  //     alert(message);
  //   };

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
        <div className={classes.newMessage}>
          <div>
            <textarea ref={newMessageElement}></textarea>
          </div>
          <div>
            <button
              onClick={() => {
                alert(newMessageElement.current.value);
              }}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
