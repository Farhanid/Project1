// src/components/LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import StatsSection from "./StatsSection";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("loginData")) || {}
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        email,
        password,
      });
     
      setMessage("Login successful!");
      const dataToSave = { email, password };
      localStorage.setItem("loginData", JSON.stringify(dataToSave));
      setSavedData(dataToSave);
    } catch (error) {
      setMessage("Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="max-w-lg md:mx-auto mt-10 p-6 border mx-4 rounded-lg shadow-md">

    
      <h2 className="text-4xl  font-extrabold text-center mb-4">Login Form</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            className="w-full border p-2 rounded"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            className="w-full border p-2 rounded"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}

      {savedData.email && (
        <div className="mt-4 p-3 bg-gray-800 rounded">
          <h3 className="font-semibold">Saved Login Info:</h3>
          <p>Email: {savedData.email}</p>
         <p>Password: {savedData.password}</p>
        </div>
      )}
      
 
      
    </div>
  );
};

export default LoginForm;


/*   {savedData.email && (
        <div className="mt-4 p-3 bg-gray-800 rounded">
          <h3 className="font-semibold">Saved Login Info:</h3>
          <p>Email: {savedData.email}</p>
         <p>Password: {savedData.password}</p>
        </div>
      )}     */

