// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import "./header.css";
import Login from "../loginComponents/login";
import { connect } from "react-redux";
import { logOut } from "../../reduxStore/userReducer"
import { withRouter } from 'react-router-dom'
// import withLoader from "../LoaderComponent/LoaderHOC.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = props => {
  const { user } = props;
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    if (user === null) {
      setOpen(true);
    } else {
      props.logOut()
      props.history.push("/");
    }
  }

  function handleClose() {
    setOpen(false);
  }
  console.log(user);
  
  return (
    <div className="nav-header">
      <ul className="nav justify-content-end">
        <li className="items-header">
          <Button className="btnLogin" onClick={handleClickOpen}>
            {user === null ? "Login" : "Logout"}

          </Button>
        </li>
        <li className="items-header">
          <Link to="/login-temp/">
            Login-temp
          </Link>
        </li>
      </ul>
      <Dialog
        className="login-dialog"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <Login setOpen={setOpen} />
      </Dialog>
    </div>
  );

  // render() {
  //   return (
  //     <div className="">
  //       <nav className="nav-header">
  // <ul className="nav justify-content-end">
  //   <li className="items">
  //     {/* <Link to="/">Login</Link> */}
  //     <button >dd</button>
  //   </li>

  //   <li className="items">
  //     <Link to="/manage-users/">Manage Users</Link>
  //   </li>
  // </ul>
  //       </nav>

  //     </div>
  //   );
  // }
};

Header.defaultProps = {
  user: null
};
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};
// const ContactListWithLoadIndicator = withLoader("loginuser")(Header);

export default withRouter(connect(
  mapStateToProps,
  { logOut }
)(Header));
