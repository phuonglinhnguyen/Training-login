// import React, { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import "./header.css";
import Login from "../loginComponents/login";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="nav-header">
      <ul className="nav justify-content-end">
        <li className="items-header">
          <Button className="btnLogin" onClick={handleClickOpen}>Login</Button>
        </li>

        <li className="items-header">
          <Link to="/manage-users/"><i className="fa fa-user-circle-o des" aria-hidden="true"></i></Link>
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
        <Login />
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
}

export default Header;
