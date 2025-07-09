import React, { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // GET users
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setUsers(res.data.slice(0, 5)))
      .catch((err) => console.error("GET error:", err));
  }, []);

  // POST
  const handleAddUser = async () => {
    if (!name.trim()) return;
    try {
      const res = await axios.post(API_URL, { name });
      setUsers([...users, { ...res.data, id: Date.now() }]);
      setName("");
    } catch (err) {
      console.error("POST error:", err);
    }
  };

  // PUT
  const handleUpdateUser = async () => {
    try {
      const res = await axios.put(`${API_URL}/${editingUser.id}`, {
        ...editingUser,
        name,
      });
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...res.data } : user
        )
      );
      setEditingUser(null);
      setName("");
    } catch (err) {
      console.error("PUT error:", err);
    }
  };

  // DELETE
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("DELETE error:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? handleUpdateUser() : handleAddUser();
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          API 
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter user name"
            className="flex-1 border px-2 md:px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            {editingUser ? "Update" : "Add"}
          </button>
        </form>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-md shadow"
            >
              <span>{user.name}</span>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    setEditingUser(user);
                    setName(user.name);
                  }}
                  className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
