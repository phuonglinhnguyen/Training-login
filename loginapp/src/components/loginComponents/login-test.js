import React, { Component } from "react";
import {connect} from 're'
import "./login.css";
import iconUser from "./user.png";

class LoginTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {}

  handleSubmit(e) {}

  render() {
    return (
      <div className="Login">
        <form className="loginform">
          <h3>Login</h3>
          <img className="iconUser" src={iconUser} alt="icon user" />
          <div className="input-login">
            <input
              id="inputUsername"
              onChange={this.handlerUsername}
              className="input-items"
              type="text"
              value={this.state.name}
              placeholder="username"
              required
            />
            <div className="pwd-items">
              <input
                id="inputPassword"
                onChange={this.handlerPassword}
                className="input-items"
                type={this.state.type}
                value={this.state.password}
                placeholder="password"
                required
              />
              <span className="show" onClick={this.showHide}>
                {this.state.type === "input" ? "Hide" : "Show"}
              </span>
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

export default LoginTest;
