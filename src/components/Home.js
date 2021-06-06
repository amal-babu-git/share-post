import Navbar from "./Navbar";
import Post from "./post";
import { Grid } from "@material-ui/core";
import PhotoUploader from "./PhotoUploader";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectUserEmail } from "../features/userSlice";
//import { useDispatch, useSelector } from "react-redux";
//import { selectId, selectPosts, setPost } from "../features/postsSlice";

function Home() {
  const [postsArray, setPostsArray] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snap) => {
        setPostsArray(
          snap.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div>
      <Navbar />
      <PhotoUploader />
      <Grid
        container
        direction="row"
        justify="space-between"
        style={{ marginTop: "60px" }}
      >
        {postsArray.map(({ id, post }) => (
          <Post
            key={id}
            id={id}
            userName={post.userName}
            caption={post.caption}
            imageUrl={post.imageUrl}
            avatarUrl={post.profileUrl}
            email={post.userEmail}
            //  date={post.timeStamp().date().toString}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
