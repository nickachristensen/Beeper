import React, { useState, useEffect } from "react";
import "./App.css";
import Auth from "./Auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authCheck, setAuthCheck] = useState(false);
  if (!authCheck) {
    <Auth />;
  }
  return (
    <div className="App">
      <Auth authCheck={authCheck} setAuthCheck={setAuthCheck}/>
    </div>
  );
}

export default App;
