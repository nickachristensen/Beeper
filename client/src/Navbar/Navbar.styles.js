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
  max-width: 1280px;
  padding-left: 200px;
  margin: 0 auto;
  p{
      padding: 8px;
      color: white;
      padding-top: 25px;
  }
  p:hover {
    cursor: pointer;
    border-bottom: 2px solid white;
  }
`;


export const LogoImg = styled.img`
  width: 130px;
  height: 80px;

  @media screen and (max-width: 400px) {
    width: 150px;
  }
`;
