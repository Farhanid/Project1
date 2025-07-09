import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const Log = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return alert("Please fill in all fields");

    // Simulated login
    dispatch(login({ username }));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md p-6 rounded-md w-80 space-y-4"
      >
        <h2 className="text-xl font-bold">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Log;
