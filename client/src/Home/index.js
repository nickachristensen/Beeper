import React from "react";
import Navbar from "../Navbar";

const Home = ({ handleLogout }) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
    </div>
  );
};

export default Home;
