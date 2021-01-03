import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
              className={props.currentPage === p ? classes.currentPage : ""}
              key={p}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id} className={classes.user}>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt="avatar"
              className={classes.avatar}
            />
          </NavLink>
          <div className={classes.followButton}>
            {user.followed ? (
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0b677094-9c31-490c-95cf-fd5676c154ee",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.onUnfollow(user.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "0b677094-9c31-490c-95cf-fd5676c154ee",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.onFollow(user.id);
                      }
                    });
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
};

export default Users;
