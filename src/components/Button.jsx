import React from "react";
import "../style/button.css";

const Button = ({ title, onClick, children }) => {
  return (
    <button className="custom_button" onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
