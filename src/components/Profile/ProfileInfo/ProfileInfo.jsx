import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const contacts = {
    facebook: (
      <div>
        facebook:{" "}
        <a href={`http://www.${props.profile.contacts.facebook}`}>
          {props.profile.contacts.facebook}
        </a>
      </div>
    ),
    website: (
      <div>
        website:{" "}
        <a href={`http://www.${props.profile.contacts.website}`}>
          {props.profile.contacts.website}
        </a>
      </div>
    ),
    vk: (
      <div>
        vk:{" "}
        <a href={`http://www.${props.profile.contacts.vk}`}>
          {props.profile.contacts.vk}
        </a>
      </div>
    ),
    twitter: (
      <div>
        twitter:{" "}
        <a href={`http://www.${props.profile.contacts.twitter}`}>
          {props.profile.contacts.twitter}
        </a>
      </div>
    ),
    instagram: (
      <div>
        instagram:{" "}
        <a href={`http://www.${props.profile.contacts.instagram}`}>
          {props.profile.contacts.instagram}
        </a>
      </div>
    ),
    youtube: (
      <div>
        youtube:{" "}
        <a href={`http://www.${props.profile.contacts.youtube}`}>
          {props.profile.contacts.youtube}
        </a>
      </div>
    ),
    github: (
      <div>
        github:{" "}
        <a href={`http://www.${props.profile.contacts.github}`}>
          {props.profile.contacts.github}
        </a>
      </div>
    ),
    mainlink: (
      <div>
        mainLink:{" "}
        <a href={`http://www.${props.profile.contacts.mainLink}`}>
          {props.profile.contacts.mainLink}
        </a>
      </div>
    ),
  };

  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.backgroundImage}>
        <img alt="background" src={} />
      </div> */}

      <div className={classes.avatar}>
        <img src={props.profile.photos.large} alt="avatar" />
      </div>

      <div className={classes.descriprion}>
        <div className={classes.name}> {props.profile.fullName}</div>
        <div> About me: {props.profile.aboutMe} </div>

        <div className={classes.contacts}>
          {props.profile.contacts.facebook ? contacts.facebook : ""}
          {props.profile.contacts.website ? contacts.website : ""}
          {props.profile.contacts.vk ? contacts.vk : ""}
          {props.profile.contacts.twitter ? contacts.twitter : ""}
          {props.profile.contacts.instagram ? contacts.instagram : ""}
          {props.profile.contacts.youtube ? contacts.youtube : ""}
          {props.profile.contacts.github ? contacts.github : ""}
          {props.profile.contacts.mainlink ? contacts.mainlink : ""}
        </div>

        <div>{`looking for a job: ${
          props.profile.lookingForAJob ? "yes" : "no"
        }`}</div>
        <div>
          {props.profile.lookingForAJob
            ? props.profile.lookingForAJobDescription
            : ""}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
