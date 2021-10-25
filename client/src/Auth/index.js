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

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: ""
  });

  function switchMode() {
    setIsSignUp(!isSignUp);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
      fullname: formData.fullname,
      username: formData.username,
      password: formData.password,
    };

    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  }

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
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </Input>
            )}
            <Input>
              <label htmlFor="username">USERNAME:</label>
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Input>
            <Input>
              <label htmlFor="password">PASSWORD:</label>
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
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
