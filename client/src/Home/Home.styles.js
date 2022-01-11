import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const Content = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-decoration: none;
    border: 2px solid #010100;
    padding: 15px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
  }
  p::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -2px;
    width: calc(100% + 6px);
    /*100% plus double the times left values*/
    height: calc(100% - 10px);
    background-color: #ffffff;
    transition: all 0.5s ease-in-out;
    transform: scaleY(1);
  }
  p:hover::before {
    transform: scaleY(0);
  }
  p::after {
    content: "";
    position: absolute;
    left: 5px;
    top: -5px;
    width: calc(100% - 10px);
    /*100% plus double the times left values*/
    height: calc(100% + 10px);
    background-color: #ffffff;
    transition: all 0.5s ease-in-out;
    transform: scaleX(1);
  }
  p:hover::after {
    transform: scaleX(0);
  }
`;
