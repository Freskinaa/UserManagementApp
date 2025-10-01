import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/userSlice";
import "../style/users.css";
import UserCard from "../components/UserCard";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [users]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="users_container">
      <div className="user_cards_wrapper">
        {users?.map((user) => (
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
