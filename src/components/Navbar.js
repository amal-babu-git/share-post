import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProfileUrl,
  selectUserName,
  setUserLogOut,
} from "../features/userSlice";
import { auth } from "../firebase/firebase";

function Navbar() {
  const classes = useStyles();

  const userName = useSelector(selectUserName);
  const profileUrl = useSelector(selectProfileUrl);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogOut());
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar>
          <Typography variant="h6" color="secondary" className={classes.title}>
            Posts
          </Typography>
          <Avatar
            className={classes.avatar}
            title={userName}
            src={profileUrl}
            variant="circle"
          />
          <Button onClick={signOutHandler} color="secondary" variant="outlined">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: "5px",
  },
}));

export default Navbar;
