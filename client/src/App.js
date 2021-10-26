import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./Auth";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authCheck, setAuthCheck] = useState(false);

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthCheck(true);
        });
      } else {
        setAuthCheck(true);
      }
    });
  }, []);
  if (!authCheck) {
    return <div></div>;
  }
  return (
    <Router>
      {currentUser ? (
        <AuthenticatedApp currentUser={currentUser} setCurrentUser={setCurrentUser} />
      ) : (
        <UnauthenticatedApp setCurrentUser={setCurrentUser} />
      )}
    </Router>
  );
}

export default App;
