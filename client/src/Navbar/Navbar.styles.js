import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  background: #4da6d2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  margin: 2px;
  p {
    padding: 8px;
    color: white;
    font-size: 17px;
    
  }
  p:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;

export const LogoImg = styled.img`
  width: 120px;
  height: 100px;

  @media screen and (max-width: 400px) {
    width: 150px;
  }
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

  p {
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #05245a;
    font-weight: 900;
    margin-bottom: 1rem;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 1rem 0rem;

  label {
    margin-bottom: 0.45rem;
    color: #000000;
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
  button {
    border-radius: 4px;
    background: #ef8181;
    border: 1px solid #e63f3f;
    filter: drop-shadow(0px 2px 2px #000);
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
    padding: 0.7rem 1.2rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease;
    letter-spacing: 0.7px;
    margin-top: 1rem;
    box-shadow: ;
  }

  button:hover {
    background: #e53838;
  }
`;
