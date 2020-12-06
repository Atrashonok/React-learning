import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsPageReducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let onMessageChange = (newText) => {
          store.dispatch(updateNewMessageTextActionCreator(newText));
        };

        let onAddMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        let state = store.getState().dialogsPage;
        return (
          <Dialogs
            onMessageChange={onMessageChange}
            onAddMessage={onAddMessage}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
