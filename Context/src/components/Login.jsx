import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length <= 3 && password.length <= 3) {
      return;
    }
    setUser({ userName, password });
  };
  return (
    <div className="flex justify-center items-center gap-4 h-screen flex-col">
      <input
        type="text"
        placeholder="username"
        className="px-5 py-2 border border-black text-sm font-bold"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        className="px-5 py-2 border border-black text-sm font-bold"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-500 hover:text-white px-4 py-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
