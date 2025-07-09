import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Slider() {
  const [[currentIndex, direction], setIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    setIndex([
      (currentIndex + newDirection + images.length) % images.length,
      newDirection,
    ]);
  };


  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full mt-10 max-w-4xl mx-auto h-100  overflow-hidden rounded-xl shadow-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={`${images[currentIndex]}?auto=format&fit=crop&w=800&q=80`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

   
    </div>
  );
}
