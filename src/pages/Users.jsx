import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/userSlice";
import UserCard from "../components/UserCard";
import SearchInput from "../components/SearchInput";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [users, dispatch]);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  return (
    <div className="users_container">
      <SearchInput
        value={searchQuery}
        placeholder="Search users by name or email"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="user_cards_wrapper">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
