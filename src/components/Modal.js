import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

export default Modal;

function Modal({ children, onClose }) {
  const backdropRef = React.useRef();

  /* disable page scrolling while modal is open */
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleClose(event) {
    if (event.target === backdropRef.current) {
      onClose();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  return createPortal(
    <Backdrop ref={backdropRef} onClick={handleClose} onKeyDown={handleKeyDown}>
      <ModalContainer>{children}</ModalContainer>
    </Backdrop>,
    document.body
  );
}

const ModalContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 600px;
`;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
