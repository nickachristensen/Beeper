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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

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
        setError(true);
      }
    });
  };

  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome to Beeper!</h2>
          <em>Login to Beep!</em>
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
            <span>{error ? "* Invalid username or password!" : null}</span>
            <Button>
              <button type="submit">Sign In</button>
            </Button>
          </form>
          <Account>
            <p>Don't have an account?</p>
            <Link to="/signup">
              <em>Sign Up</em>
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

export default Login;
