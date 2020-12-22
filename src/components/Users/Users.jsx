import classes from "./Users.module.css";
// import React, { useEffect } from "react";
import React from "react";
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png";

const Users = (props) => {
  //  const { users, onSetUsers } = props;

  //  useEffect(() => {
  //    if (users.length === 0) {
  //      onSetUsers(usersMock);
  //    }
  //  }, [users]);

  //   let users = [
  //     {
  //       id: "1",
  //       followed: false,
  //       avatar: "https://html5css.ru/w3images/avatar2.png",
  //       fullname: "Alex A.",
  //       location: { country: "Belarus", city: "Brest" },
  //       status: "looking for a job",
  //     },
  //     {
  //       id: "2",
  //       followed: true,
  //       avatar: "https://html5css.ru/w3images/avatar2.png",
  //       fullname: "Dima K.",
  //       location: { country: "Belarus", city: "Minsk" },
  //       status: "looking for a job too",
  //     },
  //     {
  //       id: "3",
  //       followed: false,
  //       avatar: "https://html5css.ru/w3images/avatar2.png",
  //       fullname: "Anna A.",
  //       location: { country: "Belarus", city: "Brest" },
  //       status: "new year is coming",
  //     },
  //   ];

  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.onSetUsers(response.data.items);
      });
  }

  return (
    <div>
      {props.users.map((user) => (
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
                  props.onUnfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.onFollow(user.id);
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
