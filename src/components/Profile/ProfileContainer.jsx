import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { onSetUserProfile } from "../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
