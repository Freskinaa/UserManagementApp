import React from "react";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import "../style/sortUsers.css";

const SortUsers = ({ sortOrder, setSortOrder }) => {
  return (
    <div className="sorting_controls">
      <button
        className="sort_toggle_btn"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        <div className="sort_icon_wrapper">
          {sortOrder === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </div>
      </button>
    </div>
  );
};

export default SortUsers;
