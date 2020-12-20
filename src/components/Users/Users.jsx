import classes from "./Users.module.css";
import React from "react";

const Users = (props) => {

// let users = [{
//     id: '1',
//     followed: false,
//     avatar: "https://html5css.ru/w3images/avatar2.png",
//     fullname: "Alex A.",
//     location: { country: "Belarus", city: "Brest" },
//     status: "looking for a job",
//   },
//   {
//     id: '2',
//     followed: true,
//     avatar: "https://html5css.ru/w3images/avatar2.png",
//     fullname: "Dima K.",
//     location: { country: "Belarus", city: "Minsk" },
//     status: "looking for a job too",
//   },
//   {
//     id: '3',
//     followed: false,
//     avatar: "https://html5css.ru/w3images/avatar2.png",
//     fullname: "Anna A.",
//     location: { country: "Belarus", city: "Brest" },
//     status: "new year is coming",
//   },]

//   if (props.usersPage.users.length === 0) {
//     props.onSetUsers(users);
//   }

  return (
    <div>
      {props.usersPage.users.map((user) => (
        <div key={user.id} className={classes.user}>
          <img src={user.avatar} alt="avatar" className={classes.avatar} />
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
            <div>{user.fullname}, </div>
            <div>
              <span>{user.location.country}, </span>
              <span>{user.location.city}</span>
            </div>
            <div>{user.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
