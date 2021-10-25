import React, { useState } from "react";

// Styles
import { Wrapper, Content, Form, Input } from "./Auth.styles";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
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
            <div className="submit_button_form">
              <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
            </div>
          </form>
          <div className="auth_form_conditions">
            <p>
              {isSignUp ? "Already have an accont" : "Don't have an account"}
              <em onClick={switchMode}>{isSignUp ? "Sign In" : "Sign Up"}</em>
            </p>
          </div>
        </Form>
        <div className="auth_form_container_image">
            <img alt="sign in"/>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Auth;
