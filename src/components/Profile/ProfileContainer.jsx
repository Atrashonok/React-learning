import React from "react";
import classes from "./Profile.module.css";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getUserProfileThunkCreator} from '../../redux/profilePageReducer'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    
    this.props.getUserProfileThunkCreator(userId);
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
  authUserId: state.auth.id,
});

const mapDispatchToProps = {
    getUserProfileThunkCreator,
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
