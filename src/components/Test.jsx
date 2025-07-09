import React from 'react'
import { motion } from "framer-motion";
import img1 from '../assets/man1.jpg'

const Test = () => {
    const testimonials = [
  {
    id: 1,
    name: "Vasa",
    title: "CEO, TechCorp",
    image: img1,
    message:
      "Mercury Softech exceeded our expectations with their flexible and professional service. Highly recommended!",
  },
  {
    id: 2,
    name: "Siva Subramanian",
    title: "Marketing Lead, Creative Inc",
    image: img1,
    message:
      "Their team truly understands how to deliver results. The communication was flawless and support was top-notch.",
  },
  {
    id: 3,
    name: "Kamal",
    title: "Founder, StartupPro",
    image: img1,
    message:
      "Thanks to Mercury Softech, our product launched on time with zero issues. A professional experience all around.",
  },
  {
    id: 4,
    name: "Mani",
    title: "HR Manager, FinSolutions",
    image: img1,
    message:
      "Reliable, knowledgeable, and very easy to work with. We'll definitely continue partnering with them.",
  },
  {
    id: 5,
    name: "Mani",
    title: "HR Manager, FinSolutions",
    image: img1,
    message:
      "Reliable, knowledgeable, and very easy to work with. We'll definitely continue partnering with them.",
  },
  {
    id: 6,
    name: "Mani",
    title: "HR Manager, FinSolutions",
    image: img1,
    message:
      "Reliable, knowledgeable, and very easy to work with. We'll definitely continue partnering with them.",
  },
];
  return (
    <div>
        <section className="bg-black py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real feedback from our trusted partners who have experienced success through our services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-800"
              />
              <div className="ml-4 text-left">
                <h4 className="font-semibold text-lg text-blue-800">{t.name}</h4>
                <p className="text-md text-gray-600">{t.title}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{t.message}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Test