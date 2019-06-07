import React, { Component } from "react";
import "./userDetail.css";

const users = {
  username: 'linh',
  email:'abc@gmail.com',
  address:'asdassfff'
}

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="info-details">
        <h3>Hello {users.username}</h3>
        <span>User name is {users.username}</span><br/>
        <span>Email: {users.email}</span><br/>
        <span>Address: {users.address}</span><br/>
      </div>
    );
  }
}

export default UserDetails;
