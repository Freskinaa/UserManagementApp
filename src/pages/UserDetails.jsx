import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLocalUser,
  editLocalUser,
  fetchUserDetails,
  resetUserDetails,
  setUserDetails,
} from "../store/slices/userSlice";
import UserProfileCard from "../components/UserProfileCard";
import UserDetail from "../components/UserDetail";
import Button from "../components/Button";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import CustomModal from "../components/CustomModal";
import UserForm from "../components/UserForm";
import DeleteUserForm from "../components/DeleteUserFrom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { users, userDetails } = useSelector((state) => state.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    if (!id) return;

    const userId = Number(id);
    const userFromStore = users.find((u) => u.id === userId);

    if (userFromStore) {
      dispatch(setUserDetails(userId));
    } else {
      dispatch(fetchUserDetails(userId));
    }

    return () => {
      dispatch(resetUserDetails());
    };
  }, [id, users, dispatch]);

  const allUserDetails = [
    userDetails?.username && {
      type: "string",
      label: "Username",
      value: userDetails.username,
    },
    userDetails?.email && {
      type: "string",
      label: "Email",
      value: userDetails.email,
    },
    userDetails?.phone && {
      type: "string",
      label: "Phone number",
      value: userDetails.phone,
    },
    userDetails?.website && {
      type: "link",
      label: "Website",
      value: userDetails.website,
    },
    userDetails?.company && {
      type: "company",
      label: "Company",
      value: userDetails.company,
    },
  ].filter(Boolean);

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const onEditUser = (user) => {
    dispatch(editLocalUser(user));
  };

  const onDeleteUser = (userId) => {
    dispatch(deleteLocalUser(userId));
    navigate("/");
  };

  if (userDetails === null) {
    return <></>;
  }

  return (
    <div className="user_details_container">
      <div className="user_details_header">
        <div className="left_details">
          <UserProfileCard name={userDetails.name} />
          <span className="name_detail">{userDetails.name}</span>
          <div className="action_buttons">
            <Button
              title={"Edit User"}
              onClick={() => {
                setIsModalOpen(true);
                setModalContent("Edit User");
              }}
            >
              <MdOutlineEdit />
            </Button>
            <Button
              title={"Delete User"}
              onClick={() => {
                setIsModalOpen(true);
                setModalContent("Delete User");
              }}
            >
              <FaRegTrashCan />
            </Button>
          </div>
        </div>
        <div className="line_divider"></div>
        <div className="right_details">
          {allUserDetails.map((detail, index) => (
            <UserDetail
              key={index}
              type={detail.type}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
      </div>
      <div className="user_address_detail">
        {userDetails.address && (
          <div className="address_detail_text">
            <span>
              {userDetails.address.street}, {userDetails.address.suite},{" "}
              {userDetails.address.city}, {userDetails.address.zipcode}
            </span>
          </div>
        )}
        {userDetails?.address && userDetails?.address.geo && (
          <iframe
            title="user-location"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${userDetails.address.geo.lat},${userDetails.address.geo.lng}&z=15&output=embed`}
          ></iframe>
        )}
      </div>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent}
        width="50%"
      >
        {modalContent === "Edit User" && (
          <UserForm
            user={userDetails}
            onConfirm={onEditUser}
            onClose={closeModal}
          />
        )}
        {modalContent === "Delete User" && (
          <DeleteUserForm
            user={userDetails}
            onConfirm={onDeleteUser}
            onClose={closeModal}
          />
        )}
      </CustomModal>
    </div>
  );
};

export default UserDetails;
