import classes from "./Users.module.css";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";

class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((response) => {
          this.props.onSetUsers(response.data.items);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.onSetCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.onSetUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={classes.pageNumbers}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && classes.currentPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}{' '}
              </span>
            );
          })}
        </div>

        {this.props.users.map((user) => (
          <div key={user.id} className={classes.user}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
              className={classes.avatar}
            />
            <div className={classes.followButton}>
              {user.followed ? (
                <button
                  onClick={() => {
                    this.props.onUnfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.onFollow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            <div className={classes.description}>
              <div>{user.name}, </div>
              <div>
                <span>{"user.location.country"}, </span>
                <span>{"user.location.city"}</span>
              </div>
              <div>{user.status}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
