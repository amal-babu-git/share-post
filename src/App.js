import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          {" "}
          <Login />{" "}
        </Route>
        <Route path="/layout">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
