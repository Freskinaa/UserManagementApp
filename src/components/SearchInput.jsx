import React, { useState } from "react";
import "../style/searchInput.css";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const showIcon = !isFocused && value === "";

  return (
    <div className="search_input_wrapper">
      <input
        type="text"
        className="text_input"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className={`search_icon ${showIcon ? "visible" : "hidden"}`}>
        <CiSearch />
      </div>
    </div>
  );
};

export default SearchInput;
