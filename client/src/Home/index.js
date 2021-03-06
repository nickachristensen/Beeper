import React, { useState } from "react";
import Navbar from "../Navbar";
import "../App";

// Style
import { Wrapper, Content, Button } from "./Home.styles";

//Component
import PostContainer from "../PostContainer";

const Home = ({ handleLogout }) => {
  const [visible, setVisible] = useState(10);
  const showMoreItem = () => {
    setVisible((prev) => prev + 10);
  };
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Wrapper>
        <Content>
          <PostContainer visible={visible} />
          <Button onClick={showMoreItem}>
            <p>LoadMore</p>
          </Button>
        </Content>
      </Wrapper>

      <div className="copywrite">
        <em>@Oct 29, 2021</em>
        <em>v0.2</em>
      </div>
    </div>
  );
};

export default Home;
