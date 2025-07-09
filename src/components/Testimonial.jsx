import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    message: "This platform transformed the way our team works. The UI is intuitive and the support is amazing!",
  },
  {
    id: 2,
    name: "John Doe",
    position: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    message: "Superb performance and reliability. I highly recommend it to anyone looking for a professional solution.",
  },
  {
    id: 3,
    name: "Ava Brown",
    position: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    message: "Clean design and smooth functionality. I love working with this tool every day!",
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(({ id, name, position, image, message }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-500 mb-3">{position}</p>
              <p className="text-gray-700 italic">"{message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
