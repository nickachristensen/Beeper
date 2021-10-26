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
} from "./Login.styles";
import LoginImage from "../images/login4.png";

const Login = ({ authCheck, setAuthCheck, setCurrentUser }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function switchMode() {
    setIsSignUp(!isSignUp);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
        });
      } else {
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };

  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome to Meower!</h2>
          <em>Login to meow!</em>
          <form onSubmit={handleSubmit}>
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
            <Button>
              <button type="submit">Sign In</button>
            </Button>
          </form>
          <Account>
            <p>Don't have an account?</p>
            <Link to="/signup">Sign Up</Link>
          </Account>
        </Form>
      </Content>
      <Image>
        <img src={LoginImage} alt="sign in" />
      </Image>
    </Wrapper>
  );
};

export default Login;
