import React from "react";
import Navbar from "../Navbar";

// Style
import { Wrapper, Content } from "./Home.styles";

//Component
import PostContainer from "../PostContainer";
import Post from "../Post";


const Home = ({ handleLogout }) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Wrapper>
        <Content>
          <PostContainer />
        </Content>
      </Wrapper>
    </div>
  );
};

export default Home;
