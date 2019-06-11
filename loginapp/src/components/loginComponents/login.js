import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./css/login.css";
import iconUser from "./img/user.png";
import {checkAuth} from './../../reduxStore/userReducer'

// 16.8.6 - hooks
class Login extends Component {
  state = {
    type: "input",
    username: "",
    password: "",
    err: []
  };

  showHide = e => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  };

  _onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  logIn = () => {
    const { username, password } = this.state;
    // const { history, setOpen } = this.props;
    const { history, setOpen, user } = this.props;

    // ---------- check username, password khac rong
    this.props.checkAuth(username, password, history, setOpen)
  };

  render() {
    console.log(this.props.user)
    return (
      <div className="Login">
        <form className="loginform">
          <h3>Login</h3>
          <img className="iconUser" src={iconUser} alt="icon user" />
          <div className="input-login">
            <TextField
              label="User name"
              name="username"
              onChange={this._onChangeInput}
              className="input-items"
              type="text"
              value={this.state.name}
              variant="outlined"
              required
            />
            <div className="pwd-items">
              <TextField
                label="Password"
                variant="outlined"
                name="password"
                onChange={this._onChangeInput}
                className="input-items"
                type={this.state.type}
                value={this.state.password}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="Toggle password visibility"
                        onClick={this.showHide}
                      >
                        {this.state.type === "input" ? (
                          <VisibilityOff />
                        ) : (
                            <Visibility />
                          )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </div>

            <button className="btnLogin" type="button" onClick={this.logIn}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Login.defaultProps = {
  user: null
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

export default withRouter(connect(mapStateToProps, {checkAuth})(Login));
