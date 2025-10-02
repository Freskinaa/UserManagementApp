import React from "react";
import "../style/userDetails.css";

const UserDetail = ({ type, label, value }) => {
  return (
    <div className="user_detail">
      <span className="detail_label">{label}:</span>
      {type === "link" ? (
        <a className="detail_value" href={`https://${value}`} target="_blank">
          {value}
        </a>
      ) : type === "company" ? (
        <div className="detail_company">
          <span className="company_name">{value.name}</span>
          <span className="company_desc">{value.catchPhrase}</span>
        </div>
      ) : (
        <span className="detail_value">{value}</span>
      )}
    </div>
  );
};

export default UserDetail;
