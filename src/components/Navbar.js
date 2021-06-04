import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="fixed">
        <Toolbar >
          <Typography variant="h6" color="secondary" className={classes.title}>
            Post Share
          </Typography>
                  <Avatar
                      className={classes.avatar}
                      src=""
                      variant="circle"
                  />
          <Button color="secondary" variant="outlined">
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
        
  }
}));

export default Navbar;
