import React, { useState } from "react";

// Styles
import {
  Wrapper,
  Content,
  Form,
  Input,
  Button,
  Account,
  Image,
} from "./Auth.styles";
import LoginImage from "../images/login.jpeg";

const Auth = ({ authCheck, setAuthCheck, setCurrentUser }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function switchMode() {
    setIsSignUp(!isSignUp);
  }

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
          <h2>Welcome!</h2>
          <em>Meow!</em>
          <form onSubmit={handleSubmit}>
            {isSignUp && (
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
            )}
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
              <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
            </Button>
          </form>
          <Account>
            <p>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchMode}>
                {isSignUp ? "Sign In" : "Sign Up"}
              </span>
            </p>
          </Account>
        </Form>
      </Content>
      <Image>
        <img src={LoginImage} alt="sign in" />
      </Image>
    </Wrapper>
  );
};

export default Auth;
