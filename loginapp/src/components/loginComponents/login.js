import React, { Component } from "react";
import "./login.css";
import iconUser from "./user.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "input",
      name: false,
      password: true,
      err: []
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }
  validate = (name, password) => {
    const err = [];
    if (name.length === 0) {
      err.push("Name can't be empty");
    }
    if (password.length < 6) {
      err.push("Password should be at least 6 characters long");
    }
    return err;
  };

  render() {
    return (
      <div className="Login">
        <form className="loginform">
          <h3>Login</h3>
          <img className="iconUser" src={iconUser} alt="icon user" />
          <div className="input-login">
            <input className="input-items" type="text" placeholder="username" />
            <div className="pwd-items">
              <input
                id="pwd"
                className="input-items"
                type={this.state.type}
                placeholder="password"
              />
              <span className="show" onClick={this.showHide}>
                {this.state.type === "input" ? "Hide" : "Show"}
              </span>
            </div>

            <button className="btnLogin" type="submit" onClick>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
