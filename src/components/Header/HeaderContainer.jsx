import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserThunkCreator } from "./../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserThunkCreator();
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
  getAuthUserThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
