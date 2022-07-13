import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import "./modal.scss";

const Modal = ({ open, children, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (modalRef.current && !modalRef.current?.contains(event.target)) {
        // eslint-disable-next-line
        if (confirm("Are you sure you want to close without saving?")) {
          onClose();
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <div className="modal-content__button">
          <ButtonIcon func={onClose} iconType="close" />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
