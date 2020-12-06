import React from "react";
import Friend from "./Friend/Friend";

let Friends = (props) => {
  return (
    <div>
      {props.store.getState().friendsPage.friendsData.map((item) => (
        <Friend name={item.name} avatar={item.avatar} />
      ))}
    </div>
  );
};

export default Friends;
