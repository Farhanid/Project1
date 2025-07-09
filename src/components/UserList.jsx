// src/components/UserList.jsx
// src/components/UserList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');

  // 👉 GET users
  useEffect(() => {
    axios.get(api)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 👉 POST user
  const handleAddUser = async () => {
  if (newName.trim() === '') return;

  try {
    const res = await axios.post(api, { name: newName });
    setUsers([...users, res.data]);
    setNewName('');
  } catch (error) {
    console.error("Error adding user:", error);
  }
};


  // 👉 PUT update user
 const handleEditUser = async (id) => {
  if (editedName.trim() === '') return;

  try {
    await axios.put(`${api}/${id}`, { name: editedName });

    const updated = users.map(user =>
      user.id === id ? { ...user, name: editedName } : user
    );

    setUsers(updated);
    setEditingId(null);
    setEditedName('');
  } catch (error) {
    console.error("Error editing user:", error);
  }
};

  // 👉 DELETE user
const handleDeleteUser = async (id) => {
  try {
    await axios.delete(`${api}/${id}`);

    const filtered = users.filter(user => user.id !== id);
    setUsers(filtered);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

 


  return (
    <div className="p-6 max-w-xl mt-14 mx-auto bg-white text-black shadow rounded space-y-4">
      <h1 className="text-2xl text-center md:text-4xl font-bold">Api functions</h1>

      {/* Add New User */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Enter user name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleAddUser} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      {/* Show Users */}
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="border p-3 flex justify-between items-center">
            {editingId === user.id ? (
              <input
                className="border p-1 flex-1"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <span>{user.name}</span>
            )}

            <div className="space-x-2">



              
              {editingId === user.id ? (
                <button
                  onClick={() => handleEditUser(user.id)}
                  className="bg-green-600 text-white px-2 py-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingId(user.id);
                    setEditedName(user.name);
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>



      <a href="#" className="group block overflow-hidden">
  <div className="relative h-[350px] sm:h-[450px]">
    <img
      src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
    />

    <img
      src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
      alt=""
      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
    />
  </div>

  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
      Limited Edition Sports Trainer
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
      <p className="tracking-wide">$189.99</p>

      <p className="text-xs tracking-wide uppercase">6 Colors</p>
    </div>
  </div>
</a>
    </div>
  );
};

export default UserList;
