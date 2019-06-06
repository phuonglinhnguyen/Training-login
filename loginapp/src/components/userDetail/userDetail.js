import React, { Component } from "react";
import "./userDetail.css";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="info-details">
        <h3>User Details</h3>
        <span>User name</span>
        <span>Password</span>
      </div>
    );
  }
}

export default UserDetails;
