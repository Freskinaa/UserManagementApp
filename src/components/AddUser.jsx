import React from "react";
import { useState } from "react";
import "../style/addUser.css";
import "../style/customModal.css";

const AddUser = ({ newId, onAddUser, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    const newUser = {
      id: newId,
      name,
      email,
    };

    if (companyName.trim() || catchPhrase.trim()) {
      newUser.company = {
        ...(companyName.trim() && { name: companyName }),
        ...(catchPhrase.trim() && { catchPhrase }),
      };
    }

    onAddUser(newUser);

    setName("");
    setEmail("");
    setCompanyName("");
    setCatchPhrase("");

    if (onClose) {
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add_user_form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company desc"
        value={catchPhrase}
        onChange={(e) => setCatchPhrase(e.target.value)}
      />

      <div className="modal_buttons">
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUser;
