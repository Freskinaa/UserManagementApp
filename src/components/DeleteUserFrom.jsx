import React from "react";
import "../style/userForm.css";
import "../style/customModal.css";

const DeleteUserForm = ({ user, onConfirm, onClose }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    if (onConfirm) {
      onConfirm(user.id);
    }
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleDelete} className="user_form">
      <p>Are you sure you want to delete {user?.name || "this user"}?</p>

      <div className="modal_buttons">
        <button type="submit" className="danger">
          Delete
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default DeleteUserForm;
