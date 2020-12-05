import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsPageReducer";

const DialogsContainer = (props) => {
    
  let onMessageChange = (newText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(newText));
  };

  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let state = props.store.getState().dialogsPage;

  return (
    <Dialogs
      onMessageChange={onMessageChange}
      onAddMessage={onAddMessage}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
