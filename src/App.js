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
import { auth } from "./firebase/firebase";
import { useEffect } from "react";
import { setActiveUser,setUserLogOut } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  //const userEmail = useSelector(selectUserEmail);
  //const profileUrl = useSelector(selectProfileUrl);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user logged in
        //  console.log(authUser)
        dispatch(
          setActiveUser({
            userName: authUser.displayName,
            userEmail: authUser.email,
            profileUrl: authUser.photoURL,
          })
        );
      } else {
        //user logout
        dispatch(setUserLogOut());
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
