import NewPost from "./NewPost";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../redux/profilePageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onPostChange: (newText) => {
      let action = updateNewPostTextActionCreator(newText);
      dispatch(action);
    },
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
