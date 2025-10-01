import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails, resetUserDetails, setUserDetails } from "../store/slices/userSlice";

const UserDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users, userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(setUserDetails(Number(id)));
    } else {
      dispatch(fetchUserDetails(Number(id)));
    }

    return () => {
      dispatch(resetUserDetails());
    };
  }, [id, users, dispatch]);

  return <div>UserDetails</div>;
};

export default UserDetails;
