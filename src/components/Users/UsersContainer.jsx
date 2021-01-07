import React from "react";
import {
  onFollow,
  onUnfollow,
  onSetUsers,
  onSetCurrentPage,
  onToggleIsFetching,
  onToggleFollowingInProgress,
} from "./../../redux/usersPageReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { UsersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.onToggleIsFetching(true);

      UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(
        (response) => {
          this.props.onToggleIsFetching(false);
          this.props.onSetUsers(response.items);
        }
      );
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.onSetCurrentPage(pageNumber);
    this.props.onToggleIsFetching(true);

    UsersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
      this.props.onToggleIsFetching(false);
      this.props.onSetUsers(response.items);
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
          followingInProgress={this.props.followingInProgress}
          onToggleFollowingInProgress={this.props.onToggleFollowingInProgress}
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
  followingInProgress: state.usersPage.followingInProgress
});

let mapDispatchToProps = {
  onFollow,
  onUnfollow,
  onSetUsers,
  onSetCurrentPage,
  onToggleIsFetching,
  onToggleFollowingInProgress,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
