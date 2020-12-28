import React from "react";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  toggleIsFetchingAC,
} from "./../../redux/usersPageReducer";
import { connect } from "react-redux";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.onToggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.onToggleIsFetching(false);
          this.props.onSetUsers(response.data.items);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.onSetCurrentPage(pageNumber);
    this.props.onToggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.onToggleIsFetching(false);
        this.props.onSetUsers(response.data.items);
      });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          onPageChanged={this.onPageChanged.bind(this)}
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onUnfollow={this.props.onUnfollow}
          onFollow={this.props.onFollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
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
    onSetCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    onToggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
