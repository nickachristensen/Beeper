import React, { useEffect, useRef } from "react";

import { Background, Content, HeaderRow } from "./Modal.styles";




const Modal = ({ isOpen, close, children }) => {
    
    git const contentRef = useRef();

    useEffect(() => {
        if(!isOpen) return

        function listener(event) {
            if(!contentRef.current.contains(event.target)) {
                close();
            }
        }
        window.addEventListener("click", listener);
        return () => {
            window.removeEventListener("click", listener);
        }
    }, [isOpen]);

    if (!isOpen) return null;
    return <Background>
        <Content ref={contentRef}>
            {children}
        </Content>
    </Background>
};

export default Modal;