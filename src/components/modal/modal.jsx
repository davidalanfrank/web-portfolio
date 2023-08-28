import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  console.log("title", title);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        <div
          className="modal-content-style"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
