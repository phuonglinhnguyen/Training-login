import React, { Component } from "react";
import { connect } from "react-redux";
import "./userDetail.css";

const users = {
  username: "linh",
  email: "abc@gmail.com",
  address: "asdassfff"
};

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { user } = this.props;

    if (user === null) {
      return <div>Not log in</div>;
    }

    return (
      <div className="app-details">
        <div className="info-details">
          <h3>Hello {user.username}</h3>
          <span>User name is {user.username}</span>
          <br />
          <span>Email: {user.email}</span>
          <br />
        </div>
      </div>
    );
  }
}

UserDetails.defaultProps = {
  user: null
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(UserDetails);
