import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import {
  Wrapper,
  Content,
  Form,
  Input,
  Button,
  Account,
  Image,
} from "./Signup.styles";
import LoginImage from "../images/login4.png";

const Signup = ({ authCheck, setAuthCheck, setCurrentUser }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        username,
        password,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((data) => {
          setErrorUsername(data.username);
          setErrorPassword(data.password);
        });
      }
    });
  };

  

  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome to Beeper!</h2>
          <em>Sign up to beep!</em>
          <form onSubmit={handleSubmit}>
            <Input>
              <label htmlFor="fullname">FULLNAME:</label>
              <input
                name="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </Input>
            <Input>
              <label htmlFor="username">USERNAME:</label>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Input>
            <Input>
              <label htmlFor="password">PASSWORD:</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Input>
            {errorUsername && <span>* Username {errorUsername}</span>}
            {errorPassword && <span>* Password {errorPassword}</span>}
            <Button>
              <button type="submit">Sign Up</button>
            </Button>
          </form>
          <Account>
            <p>Already have an account?</p>
            <Link to="/login">
              <em>Log In</em>
            </Link>
          </Account>
        </Form>
      </Content>
      <Image>
        <img src={LoginImage} alt="sign in" />
      </Image>
    </Wrapper>
  );
};

export default Signup;
