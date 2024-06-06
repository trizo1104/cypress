import React from "react";
import "./Modal.css";

export default function Modal({ message, closeModal, color }) {
  const myStyle = {
    color: color,
  };
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <h1 style={myStyle}>{message}</h1>
        <button
          className="btn"
          onClick={() => {
            closeModal();
          }}
          name="ok"
        >
          OK
        </button>
      </div>
    </div>
  );
}
