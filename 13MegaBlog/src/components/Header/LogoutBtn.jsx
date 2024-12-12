import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import logout from "../../features/authSlice/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-block bg-blue-100 rounded-full"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
