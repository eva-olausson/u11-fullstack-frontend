import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/Profile/NotFound";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Main from "./components/Layout/Main";
import Users from "./components/Admin/Users";

import "./App.css";
import "./app.scss";

import store from "./store";

import setAuthHeader from "./utils/setAuthHeader";
import { logoutUser, getCurrentUser } from "./actions/authActions";

if (localStorage.getItem("jwtToken")) {
  const currentTime = Date.now() / 1000;
  const decode = jwt_decode(localStorage.getItem("jwtToken"));

  // If current time is later than expiration time for token, logout user (remove token from localhost).
  // If not add token to request header. Then user do not have to login everytime the app is started.

  if (currentTime > decode.exp) {
    store.dispatch(logoutUser());
    window.location.href = "/";
  } else {
    setAuthHeader(localStorage.getItem("jwtToken"));
    store.dispatch(getCurrentUser());
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/users" component={Users} />
              <Route path="/register" component={Register} />
              <Route path="/profile/:userId" component={Profile} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
