import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      setStatus('Invalid email format');
      return;
    }

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('Subscribed successfully!');
        setEmail('');
      } else {
        setStatus('Something went wrong.');
      }
    } catch (error) {
      setStatus('Network error. Try again.');
    }
  };

  
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
        
      <h2 className="text-2xl font-bold mb-4 text-center">Subscribe Email</h2>
      <form onSubmit={handleSubmit} className="flex flex-row gap-4">
        <input
          type="email"
          className="border border-gray-300 p-2 rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-all"
        >
          Subscribe
        </button>
      
      </form>
        {status && (
          <p className={`text-sm ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
    </div>
  );
};

export default SubscribeForm;
