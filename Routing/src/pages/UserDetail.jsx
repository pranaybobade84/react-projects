import { useParams } from "react-router-dom";
import useGetUserDetail from "../hooks/useGetUserDetail";

const UserDetail = () => {
  const { id } = useParams();

  const user = useGetUserDetail(id);

  return user.length === 0 ? (
    <div className="h-[90vh] flex justify-center items-center text-2xl font-bold tracking-wider">
      Loading...
    </div>
  ) : (
    <div className="w-full h-screen">
      <h1 className="text-center my-5 font-bold text-2xl">User Details</h1>
      {
        <div className="mx-auto my-10 border-2 w-[20%] p-5 flex flex-col gap-6 justify-center items-center">
          <h2 className="text-red-500 font-bold underline underline-offset-4 text-lg">
            Address
          </h2>
          <p
            className={` font-semibold`}
          >{`Street : ${user?.address?.street}`}</p>
          <p className={` font-semibold`}>{`City : ${user?.address?.city}`}</p>
          <p
            className={` font-semibold`}
          >{`Zip Code : ${user?.address?.zipcode}`}</p>
        </div>
      }
    </div>
  );
};

export default UserDetail;
