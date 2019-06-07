import React, { Component } from "react";
import "./login.css";
import iconUser from "./user.png";
// 16.8.6 - hooks
class Login extends Component {
  state = {
    type: "input",
    username: '',
    password: '',
    err: []
  };

  showHide = (e) => {
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

  _onChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  logIn = () => {
    const { username, password } = this.state;
    const {history} = this.props;
    console.log("Username:" + this.state.username + "-" + this.state.password);
    // check username, password in backend
    const checkAuth = username === "linh" && password === "123"
    if (checkAuth) {
      // yes - chuyen trang user detail
      history.push('/user-details')//chuyen trang
    } else {
      // no - thong bao username/password k dung
      alert("Sai username password");
    }
  }

  render() {
    console.log(this.props);

    return (
      <div className="Login">
        <form className="loginform">
          <h3>Login</h3>
          <img className="iconUser" src={iconUser} alt="icon user" />
          <div className="input-login">
            <input
              name="username"
              onChange={this._onChangeInput}
              className="input-items"
              type="text"
              value={this.state.name}
              placeholder="username"
              required
            />
            <div className="pwd-items">
              <input
                name="password"
                onChange={this._onChangeInput}
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
