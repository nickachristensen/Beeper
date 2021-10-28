import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";

// Styles
import {
  Wrapper,
  Content,
  LogoImg,
  Form,
  Input,
  Button,
} from "./Navbar.styles";
import catLogo from "../images/Meow.png";

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
          setContent([...content, data]);
          setContent([]);
          window.location.reload();
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
        <Button>
          <button onClick={() => setOpen((isOpen) => !isOpen)}>
            Now Meow!
          </button>
        </Button>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
          <Form>
            <form onSubmit={handleCreate}>
              <Input>
                <label htmlFor="createmeow">Meow about it!</label>
                <textarea
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                  wrap="soft"
                  placeholder="What's happening?"
                />
              </Input>
              <Button>
                <button type="submit">MEOW!</button>
              </Button>
            </form>
          </Form>
        </Modal>
        <p>PROFILE</p>
        <p onClick={handleLogout}>LOGOUT</p>
      </Content>
    </Wrapper>
  );
};
export default Navbar;
