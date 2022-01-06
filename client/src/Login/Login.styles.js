import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 2rem;
  background: linear-gradient(#e4e5f1, #383a6b);
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  padding: 2rem;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: 0.8s ease;
  border: 1px solid #5c80bc;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(218, 31, 31, 0.685);
  }

  p {
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #05245a;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  span {
    color: #4d5061;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  label {
    margin-bottom: 0.45rem;
    color: #ffffff;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.7px;
    line-height: 1.3;
  }

  input {
    padding: 0.55rem 0.4rem;
    border: 1px solid rgb(184, 196, 194);
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    transition: all 150ms ease-in-out 0s;
    width: 85%;
    background: #fff;
  }

  input::placeholder {
    color: #b1b1b1;
    width: 100%;
    font-weight: unset;
    font-family: Arial, Helvetica, sans-serif;
  }

  input:hover {
    border-color: #dcdddd;
  }
`;

export const Button = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;

  button {
    border-radius: 4px;
    background: #ef8181;
    border: 1px solid #e63f3f;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding: 0.7rem 1.2rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    letter-spacing: 0.7px;
    margin-top: 1rem;
  }

  button:hover {
    background: #e53838;
  }
`;

export const Account = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0.2rem;

  p {
    font-size: 16px;
    color: #000;
    font-weight: 500;
  }

  span {
    color: #05245a;
    cursor: pointer;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const Image = styled.div`
  flex: 3;
  display: flex;
  box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.05);

  img {
    width: clamp(450px, 100%, 1200px);
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    display: none;
  }

`;
