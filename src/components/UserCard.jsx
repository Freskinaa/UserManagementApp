import React from "react";
import "../style/users.css";
import { MdEmail } from "react-icons/md";
import { IoBagRemove } from "react-icons/io5";
import { Link } from "react-router-dom";

const UserCard = ({ id, name, email, company }) => {
  return (
    <Link to={`/${id}`}>
      <div className="user_card">
        <div className="user_card_header">
          <h3 className="user_card_name">{name}</h3>
        </div>
        <div className="user_card_content">
          <div className="user_card_item">
            <div className="icon_wrapper">
              <MdEmail />
            </div>
            <div className="item_right">
              <span className="user_card_email">{email}</span>
            </div>
          </div>
          <div className="user_card_item">
            <div className="icon_wrapper">
              <IoBagRemove />
            </div>
            <div className="item_right">
              <h5 className="user_card_company_name">{company.name}</h5>
              <span className="user_card_company_desc">
                {company.catchPhrase}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
