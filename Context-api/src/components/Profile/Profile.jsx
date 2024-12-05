import React, { useContext } from "react";
import UserContext from "../../context/context";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Loging</div>;
  return <div>Welcome {user.username}</div>;
};

export default Profile;
