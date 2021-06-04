import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          {" "}
          <Login />{" "}
        </Route>
        <Route path="/layout">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
