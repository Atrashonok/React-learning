import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (newText) => {
      let action = updateNewMessageTextActionCreator(newText);
      dispatch(action);
    },
    onAddMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
