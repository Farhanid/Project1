import React, { useEffect } from 'react'
import { useState } from 'react';


const Ap = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName ] =useState("");
    const [newEmail, setNewEmail ] =useState("");
    const [newWebsite, setNewWebsite ] =useState("");
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json() )
        .then((json) => setUsers(json))
    },[])


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // Create user data to send
    const userData = {
      name: name,
      email: email
    };

    // POST request using fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // tells API we're sending JSON
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => {
      console.log('User Added:', data);
      alert('User added successfully!');
      // Clear inputs
      setName('');
      setEmail('');
    })
    .catch(err => {
      console.error('Error:', err);
    });
  };


    /*
    function addUsers() {
        const name = newName.trim();
        const email = newEmail.trim();
        const website = newWebsite.trim();

        if(name && email && website) {
             fetch('https://jsonplaceholder.typicode.com/users' , {
                method: "POST",
                body:JSON.stringify({
                    name,
                    email,
                    website
                }),
                headers:{
                    "Content-Type": "application/json; charset=UFT-8"
                }
             }).then((response) => response.json())
             .then(data => {
                setUsers([...users, data]);
                console.log("Sucessfully")
             })
        }


    } */
  return (
    <div>
        <h1>Lorem, ipsum dolor.</h1>

      <table className='space-x-40' >
        <thead  className='border-white border-2'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
        </thead>
        <tbody className='border-white border-2 '>
            {users.map(user => 
            <tr key={user.id}  className='border-white border-2'>
                 <td>{user.id}</td>
                 <td>{user.name}</td>
                 <td>{user.username}</td>
                 <td > <input type="text" value={user.email}  />
                    </td>
                  <td>{user.website}</td>
                  <td>
                    <button className='px-3 py-2 hover:bg-blue-800 bg-blue-600 text-white rounded-lg' >Update</button>
                     <button  className='px-3 py-2 hover:bg-red-800 bg-red-600 text-white rounded-lg'>Delete</button>
                  </td>
                 <td>Edit Delete</td>
            </tr>
            )}
        </tbody>
        <tfoot>
            <tr className=''>
                <td>
                    <input type="text " placeholder='Enter name..' className='text-white border-1 border-gray-500  py-2 px-10' value={newName} onChange={(e) => setNewName(e.target.value) } />
                </td>
                <td>
                    <input type="text " placeholder='Enter email' className='text-white border-1 border-gray-500 py-2 px-10' value={newEmail} onChange={(e) => setNewEmail(e.target.value) } />
                </td>
                 <td>
                    <input type="text " placeholder='Enter website' className='text-white border-1 border-gray-500 py-2 px-10' value={newWebsite} onChange={(e) => setNewWebsite(e.target.value) } />
                </td>
                <td>
                    <button  className='bg-green-500 px-3 py-2 '>Add User</button>
                </td>
            </tr>
        </tfoot>
      </table>

      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-3 py-2"
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <input
          className="w-full border px-3 py-2"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default Ap