import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="">Please Login</div>;
  return <div className="">Welcome  {user.userName}</div>;
}

export default Profile;
