import React from "react";
import { withRouter } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import "./header.css";
import Login from "../loginComponents/login";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { getUser, logOut } from "../../services/StorageService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = props => {
  // const {user} = props;
  const [open, setOpen] = React.useState(false);
  const user = getUser();
  // console.log(user);

  //function click open modal Login
  // function handleClickOpen() {
  //   if (user === null) {
  //     setOpen(true);
  //   } else {
  //     props.logOut();
  //     props.history.push("/");
  //   }
  // }

  //function click open page Login
  function handleClickOpen() {
    if (user === null) {
      props.history.push("/login-temp");
    } else {
      logOut();
      props.history.push("/login-temp");
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="nav-header">
      <ul className="nav justify-content-end">
        <li className="items-header">
          <Button className="btnLogin" onClick={handleClickOpen}>
            {user === null ? "Login" : "Logout"}
          </Button>
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
};

Header.defaultProps = {
  user: null
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logOut }
  )(Header)
);
