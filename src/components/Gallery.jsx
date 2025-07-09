import React from "react";
import { motion } from "framer-motion";

const images = [

     "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
     "https://images.unsplash.com/photo-1522199710521-72d69614c702",
     "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
     "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
     "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
     "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
];

const galleryVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function Gallery() {
  return (
    <section className="bg-blue-100 py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl text-black font-bold mb-10"> Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={galleryVariants} 
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <motion.img
                whileHover={{ scale: 1.7 }}
                src={src}
                alt='photo not'
                className="w-full h-60 object-cover transition-transform duration-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
