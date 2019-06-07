import React, { Component } from "react";
import "./userDetail.css";

const hung = {
  username: 'hung',
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
        <h3>User Details</h3>
        <span>User name is {hung.username}</span>
        <span>Email: {hung.email}</span>
        <span>Address: {hung.address}</span>
      </div>
    );
  }
}

export default UserDetails;
