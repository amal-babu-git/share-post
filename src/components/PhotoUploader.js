import {
  Box,
  Grid,
  makeStyles,
  Card,
  TextField,
  Button,
} from "@material-ui/core";

const PhotoUploader = () => {
  const classes = useStyle();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.photoUploader}
    >
      <Box
        component={Grid}
        item
        className={classes.photoUploader__box}
        xl={12}
        lg={12}
        xs={12}

        // display={{ xs: "none", lg: "block" }}
      >
        <Card className={classes.photoUploader__card}>
          <Grid>
            <TextField
              id="standard-multiline-static"
              label="Enter Caption"
              color="secondary"
              multiline
              rows={4}
              variant="filled"
            />
          </Grid>
          <Button variant="text" color="secondary" component="label">
            Choose Image
            <input type="file" hidden />
          </Button>
          <Button variant="text" color="secondary">
            Post
          </Button>
        </Card>
      </Box>
    </Grid>
  );
};

const useStyle = makeStyles({
  photoUploader: {
    marginTop: "80px",
    padding: "10px",
    maxWidth: "300px",
  },
  photoUploader__box: {
    //padding: "5px",
    textAlign: "center",
    //  display: "flex",
    //  flexDirection:"Row"
  },
  photoUploader__card: {
    padding: "5px",
  },
});

export default PhotoUploader;
