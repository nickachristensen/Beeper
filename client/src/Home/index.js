import React from "react";
import Navbar from "../Navbar";
import "../App";

// Style
import { Wrapper, Content } from "./Home.styles";

//Component
import PostContainer from "../PostContainer";

const Home = ({ handleLogout }) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Wrapper>
        <Content>
          <PostContainer />
        </Content>
      </Wrapper>
      <div className="copywrite">
        <em>@Oct 30, 2022</em>
      </div>
    </div>
  );
};

export default Home;
