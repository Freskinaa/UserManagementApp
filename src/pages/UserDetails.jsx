import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDetails,
  resetUserDetails,
  setUserDetails,
} from "../store/slices/userSlice";
import UserProfileCard from "../components/UserProfileCard";
import UserDetail from "../components/UserDetail";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, userDetails } = useSelector((state) => state.user);

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
    { type: "string", label: "Username", value: userDetails?.username },
    { type: "string", label: "Email", value: userDetails?.email },
    {
      type: "string",
      label: "Phone number",
      value: userDetails?.phone,
    },
    { type: "link", label: "Website", value: userDetails?.website },
    {
      type: "company",
      label: "Company",
      value: userDetails?.company,
    },
  ];

  if (userDetails === null) {
    return <></>;
  }

  return (
    <div className="user_details_container">
      <div className="user_details_header">
        <div className="left_details">
          <UserProfileCard name={userDetails.name} />
          <span className="name_detail">{userDetails.name}</span>
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
    </div>
  );
};

export default UserDetails;
