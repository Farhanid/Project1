import imga from '../assets/off.jpg'
import { motion } from 'framer-motion';
import { FaEye, FaBullseye } from 'react-icons/fa';
import { FaHistory } from 'react-icons/fa';
import img from '../assets/clo.png'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FAQ from './Faq';
import Test from './Test';
import { useState } from 'react';
import Sap from './Sap';


const About = () => {

 const SCROLL_DURATION = 30;

const marqueeVariants = {
  animate: {
    x: ["0", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: SCROLL_DURATION,
        ease: "linear",
      },
    },
  },
};
  
const companyLogos = [
  img,
  img,
  img,
  img,
];
  return (
    <div>
    <section className="min-h-screen max-w-7xl mx-auto px-6 md:px-8 flex flex-col items-center justify-center space-y-6 ">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}

        transition={{ duration: 1 }}
        className="bg- rounded-md text-white-800 text-md md:text-2xl p-4 font-bold"
      >
        Web Design And Development Solution that Drives Business Growth
      </motion.div>

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl  md:text-4xl  font-bold' >About<span className='font-bold text-2xl md:text-4xl text-blue-500' > Mercury</span> 😊</h1>
        <motion.h1
          whileHover={{ scale: 1.1, color: "#facc15" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-2xl font-bold bg-blue-700 p-2 mt-4 md:mt-7 text-white rounded-xl"
        >
          Let's Build Something Amazing Together
        </motion.h1>
        <p className='md:px-12 py-6 font-medium text-lg' >At Mercury Softech, we take pride in delivering tailored IT solutions that perfectly align with your unique needs. Our agile approach empowers us to adapt and evolve our services to meet your changing requirements, ensuring seamless support across comprehensive IT infrastructure, strategic consulting, software development, and more. Whether your needs shift or expand, we're committed to providing dynamic solutions that keep pace with your growth.</p>
      </div>

      <div>
        <img
          src={imga}
          alt="Business Setup"
          className="w-[700px ] rounded-xl h-[500px]  object-cover"
        />

      </div>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col py-8 items-center rounded-2xl border-2 border-gray-500 space-y-2"
        >

          <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform duration-300' >
            <FaEye className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-3xl font-extrabold">Our Vision</h2>
          <p className="text-gray-200 font-light px-8">Our goal is to completely transform the program tech sector and enable companies to prosper in the quickly changing digital landscape. Our goal is to become the go-to trusted partner, providing creative approaches that boost exceptional success, development, and invention.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col py-8 items-center rounded-2xl border-2 border-gray-500 space-y-2"
        >

          <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform duration-300' >
            < FaHistory className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-3xl font-extrabold">Our History</h2>
          <p className="text-gray-200 px-8">Since 2023, we've partnered with esteemed brands to craft cutting-edge software solutions that drive success. As a visionary and reliable partner, we deliver tailored engineering expertise that meets the unique needs of our clients.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center py-8 rounded-2xl border-2 border-gray-500 space-y-2"
        >


          <div className='bg-white w-16 h-16 rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform duration-300' >
            <FaBullseye className="text-4xl text-green-500" />
          </div>
          <h2 className="text-3xl font-extrabold">Our Mission</h2>
          <p className="text-gray-200 px-8">We empower innovative businesses to thrive in a rapidly evolving digital landscape. We deliver tailored software solutions that drive real results, foster meaningful connections, and inspire growth.</p>
        </motion.div>
      </div>

    

      <section className="bg-gray-300 py-12 overflow-hidden w-full">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold mb-8 px-4 text-black">
        We provide our service to all these companies
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 sm:gap-12 md:gap-16 w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company ${index}`}
              className="h-12 sm:h-16 md:h-20 w-auto object-contain"
            />
          ))}
        </motion.div>
      </div>
    </section>
    

    </section>

    <FAQ />
    <Sap />
    
     




    </div>
  );
};

export default About;
