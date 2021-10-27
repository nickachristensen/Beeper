import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateMeow from "../CreateMeow";
import Modal from "../Modal"; 

// Styles
import { Wrapper, Content, LogoImg } from "./Navbar.styles";
import catLogo from "../images/catlogo.png";

const Navbar = ({ handleLogout }) => {
  const [isOpen, setOpen] = useState(false);
  console.log("isOpen", isOpen);

return (

  <Wrapper>
    <Content>
      <LogoImg src={catLogo} alt="catlogo" />
    </Content>
    <Content>
    <button onClick={() => setOpen(isOpen => !isOpen)}>Open the Modal!</button>
    <Modal isOpen={isOpen} close={() => setOpen(false)}>
      <h2>Hello from the Modal</h2>
      <p>Im the modal!</p>
    </Modal>
      <p>PROFILE</p>
      <p onClick={handleLogout}>LOGOUT</p>
    </Content>
  </Wrapper>
);
}
export default Navbar;
