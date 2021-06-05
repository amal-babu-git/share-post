import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import Login from "./components/Login"
import { useDispatch, useSelector } from "react-redux";
import {
  selectProfileUrl,
  selectUserEmail,
  selectUserName,
} from "./features/userSlice";

function App() {
 // const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  //const userEmail = useSelector(selectUserEmail);
  //const profileUrl = useSelector(selectProfileUrl);

  return (
    <div className="app">
      <CssBaseline />

      {

        userName ? (<Home/>) : (<Login/>)

      }

      
    </div>
  );
}

export default App;
