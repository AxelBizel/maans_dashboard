import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import Nav from "./components/Nav";
import Contents from "./pages/Contents";
import Contract from "./pages/Contract";
import Customization from "./pages/Customization";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./stylesheets/main.scss";
import Error404 from "./pages/Error404";

function App() {
  const [cookies] = useCookies(["login"]);
  const [loggedIn, setLoggedIn] = useState(cookies.login ? true : false);

  useEffect(() => {
    if (cookies.login === "true" && !loggedIn) {
      setLoggedIn(true);
    }

    if (cookies.login === "false" && loggedIn) {
      setLoggedIn(false);
    }
  }, [cookies.login, loggedIn]);

  return (
    <Router>
      <div className="App">
        {loggedIn ? (
          <>
            <Nav />
            <div id="Pages">
              <Switch>
                <Route path="/maans_dashboard/contents">
                  <Contents />
                </Route>
                <Route path="/maans_dashboard/contract">
                  <Contract />
                </Route>
                <Route path="/maans_dashboard/custom">
                  <Customization />
                </Route>
                <Route path="/maans_dashboard/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/maans_dashboard/help">
                  <Help />
                </Route>
                <Route path="/maans_dashboard/login">
                  <Login />
                </Route>
                <Route path="/maans_dashboard/home">
                  <Home />
                </Route>
                <Route exact path="/maans_dashboard">
                  <Redirect to="/maans_dashboard/home" />
                </Route>
                <Route>
                  <Error404 />
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <div id="Pages" className="fullWidth">
            <Switch>
              <Route path="/maans_dashboard/login">
                <Login />
              </Route>
              <Route>
                <Redirect to="/maans_dashboard/login" />
              </Route>
            </Switch>
          </div>
        )}
      </div>
    </Router>
  );
}

export default withCookies(App);
