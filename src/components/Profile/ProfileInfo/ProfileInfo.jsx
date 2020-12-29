import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

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
          <div>
            facebook:{" "}
            <a href={`http://www.${props.profile.contacts.facebook}`}>
              {props.profile.contacts.facebook}
            </a>
          </div>
          <div>
            website:{" "}
            <a href={`http://www.${props.profile.contacts.website}`}>
              {props.profile.contacts.website}
            </a>
          </div>
          <div>
            vk:{" "}
            <a href={`http://www.${props.profile.contacts.vk}`}>
              {props.profile.contacts.vk}
            </a>
          </div>
          <div>
            twitter:{" "}
            <a href={`http://www.${props.profile.contacts.twitter}`}>
              {props.profile.contacts.twitter}
            </a>
          </div>
          <div>
            instagra:{" "}
            <a href={`http://www.${props.profile.contacts.instagra}`}>
              {props.profile.contacts.instagra}
            </a>
          </div>
          <div>
            youtube:{" "}
            <a href={`http://www.${props.profile.contacts.youtube}`}>
              {props.profile.contacts.youtube}
            </a>
          </div>
          <div>
            github:{" "}
            <a href={`http://www.${props.profile.contacts.github}`}>
              {props.profile.contacts.github}
            </a>
          </div>
          <div>
            mainLink:{" "}
            <a href={`http://www.${props.profile.contacts.mainLink}`}>
              {props.profile.contacts.mainLink}
            </a>
          </div>
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
