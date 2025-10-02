import React from "react";
import Modal from "react-modal";
import "../style/customModal.css";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onClose, title, children, width = "450px" }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title || "Modal"}
      style={{
        content: {
          maxWidth: width,
          margin: "auto",
          padding: "2rem",
          borderRadius: "8px",
          background: "var(--white)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1000,
        },
      }}
    >
      {title && <h2 className="modal_header">{title}</h2>}
      <div className="modal_content">{children}</div>
    </Modal>
  );
};

export default CustomModal;
