import React from "react";

import { Background, Content, HeaderRow } from "./Modal.styles";



const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return <Background>
        <Content>
            <HeaderRow>
                {/* <img src={closeIcon} alt="close icon" /> */}
            </HeaderRow>
            {children}</Content>
    </Background>
};

export default Modal;