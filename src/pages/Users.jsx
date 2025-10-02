import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addLocalUser } from "../store/slices/userSlice";
import UserCard from "../components/UserCard";
import SearchInput from "../components/SearchInput";
import Button from "../components/Button";
import { FaPlus, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import CustomModal from "../components/CustomModal";
import "../style/users.css";
import AddUser from "../components/AddUser";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!users.length) dispatch(fetchUsers());
  }, [users, dispatch]);

  const filteredUsers = useMemo(() => {
    const query = searchQuery.toLowerCase();

    let filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query)
    );

    if (sortOrder) {
      filtered.sort((a, b) =>
        sortOrder === "desc"
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      );
    }

    return filtered;
  }, [users, searchQuery, sortOrder]);

  const handleAddUser = (newUser) => {
    dispatch(addLocalUser(newUser));
  };

  return (
    <div className="users_container">
      <div className="users_controls">
        <SearchInput
          value={searchQuery}
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          title={"Sort"}
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? <FaSortAlphaDown /> : <FaSortAlphaUp />}
        </Button>
        <Button title={"Add User"} onClick={() => setIsModalOpen(true)}>
          <FaPlus />
        </Button>
      </div>

      <div className="user_cards_wrapper">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            company={user.company}
          />
        ))}
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={"Add User"}
        width="50%"
      >
        <AddUser
          newId={users.length + 1}
          onAddUser={handleAddUser}
          onClose={() => setIsModalOpen(false)}
        />
      </CustomModal>

      {/* <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        newId={users.length + 1}
        onAddUser={handleAddUser}
      /> */}
    </div>
  );
};

export default Users;
