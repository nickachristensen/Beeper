import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./Auth";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/">
        <Auth setCurrentUser={setCurrentUser} />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default UnauthenticatedApp;
