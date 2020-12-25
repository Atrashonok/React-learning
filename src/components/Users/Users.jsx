import classes from "./Users.module.css";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
 
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.onSetUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getUsers}>get users</button>
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
