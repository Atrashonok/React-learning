import React from "react";
import {
  onFollow,
  onUnfollow,
  onSetCurrentPage,
  onToggleFollowingInProgress,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
} from "./../../redux/usersPageReducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.onSetCurrentPage(pageNumber);

    this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
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
          followingInProgress={this.props.followingInProgress}
          unfollowThunkCreator={this.props.unfollowThunkCreator}
          followThunkCreator={this.props.followThunkCreator}
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
  followingInProgress: state.usersPage.followingInProgress,
});

let mapDispatchToProps = {
  onFollow,
  onUnfollow,
  onSetCurrentPage,
  onToggleFollowingInProgress,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
