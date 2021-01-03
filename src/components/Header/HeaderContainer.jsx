import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { onSetAuthUser } from "./../../redux/authReducer";
import { authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getAuthUser()
    .then((response) => {
      if (response.resultCode === 0) {
        this.props.onSetAuthUser(response.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const mapDispatchToProps = {
  onSetAuthUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
