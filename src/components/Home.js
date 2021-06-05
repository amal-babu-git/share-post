import Navbar from "./Navbar"
import Post from "./post"
import { Grid } from "@material-ui/core"
import PhotoUploader from "./PhotoUploader";

function Home() {


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
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Post
            userName="Lussy Vincent"
            imageUrl="https://material-ui.com/static/images/avatar/3.jpg"
            caption="Hellow new image"
            avatarUrl="https://material-ui.com/static/images/avatar/3.jpg"
          />
        </Grid>
      </div>
    );
}

export default Home
