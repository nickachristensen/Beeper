import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const Content = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    max-width: 90%;
    box-shadow: 0 3px 15px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 600px) {
        width: 300px;
    }
    `;


