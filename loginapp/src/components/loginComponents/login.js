import React, { Component } from "react";
import "./login.css";
import iconUser from "./user.png";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "input",
      username: '',
      password: '',
      err: []
    };

    this.showHide = this.showHide.bind(this);
    this.handlerPassword = this.handlerPassword.bind(this);
    this.handlerUsername = this.handlerUsername.bind(this);
  }


  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  // validate = (name, password) => {
  //   const err = [];
  //   if (name.length === 0) {
  //     err.push("Name can't be empty");
  //   }
  //   if (password.length < 6) {
  //     err.push("Password should be at least 6 characters long");
  //   }
  //   return err;
  // };

  handlerUsername(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlerPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  logIn() {
    console.log("sdsds");
    // console.log(this.state.name);
  }

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

export default Login;
