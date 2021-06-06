import {
  Box,
  Grid,
  makeStyles,
  Card,
  TextField,
  Button,
  CircularProgress,
  Typography,
  Avatar,
} from "@material-ui/core";
import { useState } from "react";
import { db, storage } from "../firebase/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectProfileUrl, selectUserEmail, selectUserName } from "../features/userSlice";

const PhotoUploader = () => {
  const classes = useStyle();
  const [image, setImage] = useState(null);
  const [activePostButon, setActivePostButon] = useState(true);
  const [progress, setProgress] = useState(0);
  const [circularProgress, setCircularProgress] = useState(false);
  const [caption, setcaption] = useState("");
  const userName = useSelector(selectUserName);
  const userEmail=useSelector(selectUserEmail)
  const profileUrl = useSelector(selectProfileUrl);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setActivePostButon(false);
      //set the image that selected ,files[0] means the first file
      setImage(e.target.files[0]);
    } else {
      alert("Select an image from your gallary");
    }
  };
  const handleUpload = () => {
    setActivePostButon(true);
    setCircularProgress(true);

    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    // this is the main function for get status of uploading image
    //this have 4 argument functions
    //first one is "state_changed" ,second function for get the progress of uploading
    //thired is for error handling
    //last one is the complete function
    uploadTask.on(
      //this execute while uploading

      "state_changed",
      (snapshot) => {
        //progress function,for calculation progress of uploading
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setProgress(progress);
        // console.log("progress" , progress)
      },
      (error) => {
        //if any error while uploading
        console.log("uploader", error);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            //post image inside db
            db.collection("posts").add({
              timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
              //dateTime:Date.now(),
              caption: caption,
              imageUrl: url,
              userEmail:userEmail,
              profileUrl: profileUrl,
              userName: userName,
            });
          })
          .then(
            () => {
              setProgress(0);
              setImage(null);
              setcaption("");
              setCircularProgress(false);
            }
            //all done
          );
      }
    );
  };

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
          <Typography variant="h6">Upload a new photo</Typography>

          {circularProgress && (
            <CircularProgress
              variant="determinate"
              max={100}
              color="secondary"
              size={100}
              disableShrink={true}
              thickness={4.6}
              value={progress}
            />
          )}

          <Box
           // component={Grid}
            // item
            className={classes.photoUploader__box}
           // xl={12}
            //lg={12}
           // xs={3}
            display={{ xs: "none", lg: "flex" }}
          >
            <Typography variant="h6">{"Welcome  " + userName}</Typography>
            
          </Box>

          <div>
            <TextField
              id="standard-multiline-static"
              label="Enter Caption"
              color="secondary"
              multiline
              rows={4}
              variant="filled"
              onChange={(e) => setcaption(e.target.value)}
            />
          </div>

          <div>
            <Button variant="text" color="secondary" component="label">
              Choose Image
              <input type="file" hidden onChange={handleChange} />
            </Button>

            <Button
              variant="text"
              color="secondary"
              disabled={activePostButon}
              onClick={handleUpload}
            >
              Post
            </Button>
          </div>
        </Card>
      </Box>
    </Grid>
  );
};

const useStyle = makeStyles({
  photoUploader: {
    marginTop: "80px",
    padding: "10px",
    // maxWidth: "320px",
  },
  photoUploader__box: {
    //padding: "5px",
    textAlign: "center",
    //  display: "flex",
    //  flexDirection:"Row"
  },
  photoUploader__card: {
    padding: "10px",
  },
});

export default PhotoUploader;
