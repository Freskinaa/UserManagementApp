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
  userDetails?.username && { type: "string", label: "Username", value: userDetails.username },
  userDetails?.email && { type: "string", label: "Email", value: userDetails.email },
  userDetails?.phone && { type: "string", label: "Phone number", value: userDetails.phone },
  userDetails?.website && { type: "link", label: "Website", value: userDetails.website },
  userDetails?.company && { type: "company", label: "Company", value: userDetails.company },
].filter(Boolean);


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
    </div>
  );
};

export default UserDetails;
