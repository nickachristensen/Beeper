import React from "react";
import Navbar from "../Navbar";
import CreateMeow from "../CreateMeow";

const Home = ({ handleLogout }) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout}/>
      <CreateMeow/>
    </div>
  );
};

export default Home;
