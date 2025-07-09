import React from "react";
import { motion } from "framer-motion";
import { FaSmile, FaFolderOpen, FaHeadset, FaBullseye } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      icon: <FaSmile className="text-4xl" />,
      number: "232",
      label: "Happy Clients",
      color: "text-black",
    },
    {
      id: 2,
      icon: <FaFolderOpen className="text-4xl" />,
      number: "521",
      label: "Projects",
      color: "text-black",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl" />,
      number: "1463",
      label: "Hours Of Support",
      color: "text-red-500",
    },
    {
      id: 4,
      icon: <FaBullseye className="text-4xl" />,
      number: "100",
      label: "Results Guaranteed",
      color: "text-red-500",
    },
  ];

  return (
    <section className=" py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Moving icon animation */}
            <motion.div
              className={`mb-4 ${stat.color}`}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              {stat.icon}
            </motion.div>

            <h2 className="text-3xl font-bold text-blue-800">{stat.number}</h2>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
