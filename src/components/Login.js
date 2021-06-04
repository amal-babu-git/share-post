import { Button, Typography, Grid, Card , } from "@material-ui/core"
import { makeStyles } from "@material-ui/core"

const Login = () => {

    const classes = useStyle();

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
        marginBottom:"5px",
        
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
