import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {
  onSetUserProfile,
} from "../../redux/profilePageReducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.onSetUserProfile(response.data);
      });
  }

  render() {
    return (
      <div className={classes.content}>
        <Profile {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  onSetUserProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
