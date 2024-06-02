import { Outlet, useNavigate } from "react-router-dom";
import Shimmer from "../components/Shimmer";
import useGetUsers from "../hooks/useGetUsers";

const Users = () => {
  const naviget = useNavigate();
  const user = useGetUsers();

  return user.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <section className="w-screen">
        <div className="container mx-auto my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 gap-5">
          {user.map((user) => {
            return (
              <div
                key={user?.id}
                className="text-sm font-bold font-sans border-2 leading-6 px-3 py-4 flex flex-col gap-3 items-center "
              >
                <h1>{`Name: ${user?.name}`}</h1>
                <h3>{`User Name: ${user?.username}`}</h3>
                <h4>{`Email: ${user?.email}`}</h4>

                <button
                  onClick={() => naviget(`/users/${user?.id}`)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2 rounded-full"
                >
                  GET ALL DETAILS
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Users;
