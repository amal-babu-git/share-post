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

const Post = ({ userName, imageUrl, caption, avatarUrl, date }) => {
  const classes = useStyle();

  return (
    <Grid item xl={3} lg={3} sm={4} xs={12} className={classes.post__cardGrid}>
      <Card className={classes.post__card}>
        <CardHeader
          textAlign="center"
          avatar={<Avatar className={classes.avatar} src={avatarUrl}></Avatar>}
          className={classes.header}
          title={userName}
          subheader={date}
        />
        <CardMedia className={classes.media} image={imageUrl} />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            {caption}
          </Typography>
        </CardContent>
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
  },
});

export default Post;
