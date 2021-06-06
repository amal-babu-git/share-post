import { Button, Typography, Grid, Card, } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { useDispatch } from "react-redux";
import { setActiveUser } from "../features/userSlice";
import { auth, provider } from "../firebase/firebase";

const Login = () => {

  const classes = useStyle();

  const dispatch = useDispatch()



  const signInHandler = () => {

    auth.signInWithPopup(provider).then((result) => {
      dispatch(setActiveUser({
        userName: result.user.displayName,
        userEmail: result.user.userEmail,
        profileUrl: result.user.photoURL
      }))
    }).catch = (err) => alert(err.message)

  }




  return (

    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item alignContent="center">
        <Card className={classes.LoginCard}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h4"
                color="textPrimary"
                className={classes.AppTitle}
              >
                Share Posts
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.LoginImage}
                src="/images/login-p.png"
                alt=""
              />
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                className={classes.googleButton}
                onClick={signInHandler}
              >
                <img
                  className={classes.googleSvg}
                  src="/images/google.svg"
                  alt=""
                />
                <span>Sign in with google</span>
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

const useStyle = makeStyles({

  googleButton: {
    borderRadius: "30px",
    padding: "10px",
    marginBottom: "5px",

  },
  googleSvg: {

    padding: "1px",
    marginRight: "5px",
  },
  AppTitle: {
    fontFamily: "Roboto",
    fontWeight: "600",
    padding: "10px",


  },
  LoginImage: {

    padding: "5px",

  },
  LoginCard: {
    margin: "30px 10px 10px ",
    padding: "5px",
    maxWidth: "700px",

  }

})

export default Login
