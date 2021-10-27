import React from "react";
import { Link } from "react-router-dom";
import CreateMeov from "../CreateMeow";

// Styles
import { Wrapper, Content, LogoImg } from "./Navbar.styles";
import catLogo from "../images/catlogo.png";

const Navbar = ({ handleLogout }) => (
  <Wrapper>
    <Content>
      <LogoImg src={catLogo} alt="catlogo" />
    </Content>
    <Content>
      <CreateMeov />
      <p>PROFILE</p>
      <p onClick={handleLogout}>LOGOUT</p>
    </Content>
  </Wrapper>
);

export default Navbar;
