import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { DeleteSharp } from "@material-ui/icons";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../features/userSlice";
import { useState, useEffect } from "react";

const Post = ({ userName, imageUrl, caption, avatarUrl, date, id, email }) => {
  const classes = useStyle();
  const userEmail = useSelector(selectUserEmail);
  const [activeDeleteButton, setActiveDeleteButton] = useState(false);

  useEffect(() => {
    if (userEmail === email) {
      setActiveDeleteButton(true);
    }
  }, []);

  const deletePostHandler = () => {
      db.collection("posts").doc(id).delete();
  };

  return (
    <Grid item xl={3} lg={3} sm={4} xs={12} className={classes.post__cardGrid}>
      <Card className={classes.post__card}>
        <CardHeader
          textalign="center"
          titleTypographyProps={{ variant: "subtitle2" }}
          avatar={<Avatar className={classes.avatar} src={avatarUrl}></Avatar>}
          className={classes.header}
          title={userName}
          subheader={date}
        />

        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {caption}
          </Typography>
        </CardContent>
        {activeDeleteButton && <DeleteSharp onClick={deletePostHandler} />}
      </Card>
    </Grid>
  );
};

const useStyle = makeStyles({
  post__cardGrid: {
    margin: "2px",
    padding: "10px",
  },
  post__card: {
    padding: "5px",
    textAlign: "center",
    maxWidth: "500px",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  avatar: {
    backgroundColor: "red",
  },
  header: {
    color: "Black",
    marginRight: "5rem",
    fontStyle: "",
    fontWeight: "bolder",
  },
});

export default Post;
