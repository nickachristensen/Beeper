import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentUser={setCurrentUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default UnauthenticatedApp;
