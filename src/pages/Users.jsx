import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/userSlice";
import UserCard from "../components/UserCard";
import SearchInput from "../components/SearchInput";
import SortUsers from "../components/SortUsers";
import "../style/users.css";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);

  const filteredAndSortedUsers = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return [...users]
      .filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      )
      .sort((a, b) =>
        sortOrder === "desc"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      );
  }, [users, searchQuery, sortOrder]);

  return (
    <div className="users_container">
      <div className="users_controls">
        <SearchInput
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <SortUsers sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <div className="user_cards_wrapper">
        {filteredAndSortedUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
