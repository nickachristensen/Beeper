import React, { useState } from "react";
import { Link } from "react-router-dom";
import CreateMeow from "../CreateMeow";
import Modal from "../Modal"; 

// Styles
import { Wrapper, Content, LogoImg, Form, Input, Button } from "./Navbar.styles";
import catLogo from "../images/catlogo.png";

const Navbar = ({ handleLogout }) => {
  const [isOpen, setOpen] = useState(false);
  const [content, setContent] = useState([]);

  function handleCreate(event) {
    event.preventDefault();
    fetch(`/posts`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setContent(data);
          setContent([]);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  }

return (

  <Wrapper>
    <Content>
      <LogoImg src={catLogo} alt="catlogo" />
    </Content>
    <Content>
    <button onClick={() => setOpen(isOpen => !isOpen)}>Post Meow!</button>
    <Modal isOpen={isOpen} close={() => setOpen(false)}>
      <Form>
        <form onSubmit={handleCreate}>
          <Input>
            <label htmlFor="createmeow">CREATE MEOW:</label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              name="content"
              />
          </Input>
          <Button>
            <button type="submit">✅</button>
          </Button>
        </form>
      </Form>
    </Modal>
      <p>PROFILE</p>
      <p onClick={handleLogout}>LOGOUT</p>
    </Content>
  </Wrapper>
);
}
export default Navbar;
