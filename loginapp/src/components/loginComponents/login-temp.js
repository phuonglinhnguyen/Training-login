import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./css/main.css";
import "./css/util.css";
import avt from "./img/avatar-01.jpg";
import { checkAuth } from "./../../reduxStore/userReducer";
import { isEmpty } from "lodash";

class Login_temp extends Component {
  state = {
    type: "input",
    username: "admin",
    password: "admin",
    err: []
  };

  _onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;
    console.log({ username, password });
    if (isEmpty(username) || isEmpty(password)) {
      return alert("Nhap username password");
    }
    // ---------- check username, password khac rong
    this.props.checkAuth(username, password, history);
  };

  // check_empty=()=>{
  //   const { username, password } = this.state;
  //   if (isEmpty(username) || isEmpty(password)) {
  //     return alert("Nhap username password");
  //   }
  // }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-190 p-b-30">
            <form className="login100-form validate-form">
              <div className="login100-form-avatar">
                <img src={avt} alt="AVATAR" />
              </div>
              <span className="login100-form-title p-t-20 p-b-45">Users</span>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Username is required"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={this._onChangeInput}
                  value={this.state.username}
                  required
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this._onChangeInput}
                  value={this.state.password}
                  required
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <div className="container-login100-form-btn p-t-10">
                <button
                  className="login100-form-btn"
                  onClick={this.logIn}
                  type="submit"
                >
                  Login
                </button>
              </div>
              {/* <div className="text-center w-full p-t-25 p-b-230">
                <a href="#" className="txt1">
                  Forgot Username / Password?
                </a>
              </div> */}
              {/* <div className="text-center w-full">
                <a className="txt1" href="#">
                  Create new account
                  <i className="fa fa-long-arrow-right" />
                </a>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login_temp.defaultProps = {
  user: null
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { checkAuth }
  )(Login_temp)
);
