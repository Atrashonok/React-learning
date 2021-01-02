import axios from "axios";
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { onSetAuthUser } from "./../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.onSetAuthUser(response.data.data);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

const mapDispatchToProps = {
  onSetAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);