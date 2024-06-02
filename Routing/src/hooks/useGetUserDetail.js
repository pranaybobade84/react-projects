import {useEffect, useState} from 'react';

const useGetUserDetail = id => {
  const [user, setUser] = useState ([]);
  useEffect (
    () => {
      const getUser = async () => {
        const user = await fetch (
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const userData = await user.json ();
        setUser (userData);
      };
      getUser ();
    },
    [id]
  );

  return user;
};

export default useGetUserDetail;
