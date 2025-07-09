import React from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const links = ["Home", "About", "Services", "Contact"];

export default function Tavbar() {
  return (
    <motion.nav
      className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.h1
          className="text-xl font-bold text-blue-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          MyLogo
        </motion.h1>

        <ul className="flex gap-8 text-gray-700 font-medium">
          {links.map((link, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="hover:text-blue-600 cursor-pointer transition-colors"
            >
              {link}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
