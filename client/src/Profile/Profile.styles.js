import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px;
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

export const Content = styled.div`
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

export const Avatar = styled.div``;

export const Header = styled.div`
  align-items: center;
  padding-right: 8px;
  padding-left: 8px;
  padding-bottom: 5px;

  em {
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

export const Input = styled.div``;

export const Header2 = styled.div``;
