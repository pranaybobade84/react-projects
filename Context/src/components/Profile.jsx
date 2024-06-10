import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  console.log("userrrrrr", user);
  if (!user)
    return (
      <h1 className="absolute top-[25%] left-[45%] text-2xl font-bold ">
        Please Login
      </h1>
    );
  return (
    <div className="absolute top-[25%] left-[43%] text-2xl font-bold ">
      Welcome {user?.userName}
    </div>
  );
};

export default Profile;
