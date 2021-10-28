import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid grey;
  box-shadow: 0px 0px 5px grey;
  border-radius: 5px;
  padding: 10px;
`;

export const Avatar = styled.div``;

export const Body = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  img {
    border-radius: 20px;
  }

  h3 {
    font-size: 15px;
    margin-bottom: 5px;
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: 1280px;
  padding-left: 200px;
  margin: 0 auto;
  p{
      padding: 8px;
      color: black;
      padding-top: 25px;
  }
  p:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;

export const Header = styled.div``;

export const Button = styled.div``;
