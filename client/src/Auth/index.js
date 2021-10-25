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
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  function switchMode() {
    setIsSignUp(!isSignUp);
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <Content>
        <Form>
          <h2>Welcome!</h2>
          <em>Meow!</em>
          <form onSubmit={() => {}}>
            {isSignUp && (
              <Input>
                <label htmlFor="fullName">FULLNAME:</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </Input>
            )}
            <Input>
              <label htmlFor="userName">USERNAME:</label>
              <input
                name="userName"
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
            {isSignUp && (
              <Input>
                <label htmlFor="confirmPassword">CONFIRM PASSWORD:</label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Input>
            )}
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
