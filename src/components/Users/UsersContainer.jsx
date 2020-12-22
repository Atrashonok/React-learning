import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
} from "./../../redux/usersPageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => {
  return {
    onFollow: (userId) => {
      let action = followAC(userId);
      dispatch(action);
    },
    onUnfollow: (userId) => {
      let action = unfollowAC(userId);
      dispatch(action);
    },
    onSetUsers: (users) => {
      dispatch(setUsersAC(users));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
