import { useEffect, useState } from "react";

const useGetUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const user = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await user.json();
      setUser(userData);
    };
    getUser();
  });

  return user;
};

export default useGetUsers;
