import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class CustomizedDialogs extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Fab color="primary" aria-label="Add" onClick={this.handleClickOpen}>
          <AddIcon />
        </Fab>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Add Users
          </DialogTitle>

          <DialogContent dividers>
            <TextField
              id="outlined-dense"
              label="User name"
              // className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
            <br />
            <TextField
              id="outlined-dense"
              label="Password"
              // className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-dense"
              label="Email"
              // className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
            <TextField
              id="outlined-dense"
              label="Address"
              // className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
            />
            
          </DialogContent>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedDialogs;
