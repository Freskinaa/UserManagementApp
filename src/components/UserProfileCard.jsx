import React from "react";
import "../style/userDetails.css";

const UserProfileCard = ({ name }) => {
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <div className="user_profile_card">
      <span>{initials}</span>
    </div>
  );
};

export default UserProfileCard;
