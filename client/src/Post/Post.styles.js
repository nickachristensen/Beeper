import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: all 0.3s ease;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
    z-index: -1;
    transition: all 0.3s ease;
  }
`;

export const Avatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;

  h3 {
    font-family: "Courier New";
    margin: 0;
    padding-top: 5px;
    color: grey;
    color: #5f599b;
  }
`;

export const Content = styled.div``;

export const Header = styled.div`
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  p {
    font-family: "Courier New";
  }
`;

export const Wrapper2 = styled.div``;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: transparent;
  padding: 2rem;
  box-shadow: 0px 1px 5px rgb(0 0 0 / 10%);
  border-radius: 5px;
  transition: 0.8s ease;
  width: 500px;
  margin: 25px;
`;

export const Body2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  h3 {
    font-family: "Courier New";
    margin: 0;
    padding-top: 5px;
    color: #5f599b;
    font-style: italic;
  }
`;

export const Header2 = styled.div`
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  p {
    font-family: "Courier New";
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

export const Form = styled.div``;

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
