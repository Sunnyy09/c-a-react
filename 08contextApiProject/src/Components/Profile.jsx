import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <p>Please Login</p>;

  return <h3>Welcome {user.username}</h3>;
}

export default Profile;
