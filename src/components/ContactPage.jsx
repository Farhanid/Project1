import React, { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sending data to backend or email service
    console.log(form);
    alert("Message Sent!");
  };

  return (
    <div className="max-w-xl mx-auto p-2">
      <h1 className="text-5xl text-center font-bold mb-4">Contact Us</h1>
      <p className=" text-center mb-6 text-gray-200">We'd love to hear from you. Fill out the form below.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white flex  px-6 py-2 rounded hover:bg-blue-900"
        >
          Send Message
        </button>
      </form>

      <div className="mt-8 flex flex-col space-y-4">
        <p><strong>Email:</strong> <a href="mailto:hr@mercurysoftech.com" className="text-blue-600">hr@mercurysoftech.com</a></p>
        <p><strong>Phone:</strong>  +91 4313582328</p>
        <p><strong>Address: </strong> 3rd Floor, GrandTowers, Cheran Salai LIC Colony, Ayyappa Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021
</p>
      </div>
    </div>
  );
}

export default ContactPage;
