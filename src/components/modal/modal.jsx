import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;
  console.log("title", title);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        list
        {/* <p>{{ content }}</p> */}
      </div>
    </div>
  );
};

export default Modal;
