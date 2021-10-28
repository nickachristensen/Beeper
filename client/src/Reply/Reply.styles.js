import styled from "styled-components";

export const Form = styled.div`
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    margin-bottom: 0.45rem;
    color: #000000;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.7px;
    line-height: 1.2;
  }
  textarea {
    padding: 0.55rem 0.4rem;
    border: 1px solid rgb(184, 196, 194);
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    transition: all 150ms ease-in-out 0s;
    width: 85%;
    background: #fff;
    height: 70px;
  }
  textarea::placeholder {
    color: #b1b1b1;
    width: 100%;
    font-weight: unset;
    font-family: Arial, Helvetica, sans-serif;
  }
  textarea:hover {
    border-color: #dcdddd;
  }
`;

export const Button = styled.div`
  button {
    margin: 2px;
    background-color: white;
    color: black;
    border: 1px solid #4caf50;
    border-radius: 3px;
    filter: drop-shadow(0px 1px 1px #000);
    :hover {
      background-color: #4caf50;
      color: white;
    }
  }
`;