import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

import { Switch, Route, Link, Redirect } from "react-router-dom"
import Manage from "./pages/manage/Manage";
import Upload from "./pages/upload/Upload";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/register" />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/watch">
        <Watch />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/manage">
        <Manage />
      </Route>
      <Route path="/movies">
        <Home type="movies" />
      </Route>
      <Route path="/series">
        <Home type="series" />
      </Route>
      <Route path="/upload">
        <Upload />
      </Route>
    </Switch>
  )
};

export default App;