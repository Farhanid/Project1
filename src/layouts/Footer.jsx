import { NavLink } from 'react-router-dom'
import {FaLinkedinIn, FaYoutube, FaFacebookF, FaInstagram, FaTwitter,FaGoogle } from 'react-icons/fa';
import {   motion } from 'framer-motion'
const Footer = () => {
  const year = new Date().getFullYear();
   const link = [
    {
      id:1,
      tit: "Home",
      lik: "/"
    },
     {
      id:2,
      tit: "About Us",
      lik: "/about"
    },
     {
      id:3,
      tit: "Services",
      lik: "/contact"
    },
     {
      id:4,
      tit: "Terms of service",
       lik: "/project"

      
    },
     {
      id:5,
      tit: "Blog",
       lik: "/project"
    },
   ];
   const lnk = [
    {
      id:1,
      tit: "Web Design",
    },
     {
      id:2,
      tit: "Web Development",
    },
     {
      id:3,
      tit: "Product Management",
    },
     {
      id:4,
      tit: "App Development",
    },
     {
      id:5,
      tit: "UI/UX Design",
    },
     {
      id:6,
      tit: "Graphics Design",
    },
     {
      id:7,
      tit: "SEO Service",
    },
     {
      id:8,
      tit: "Digital Marketing",
    },
   ]
  return (
    <div>
      
    <footer className="bg-gray-800 text-white  px-6 lg:px-20 py-6 lg:py-10 mt-4">
<div className='max-w-7xl mx-auto' >

<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

<div>
  <motion.div
    className='md:mx-auto space-y-4 md:space-y-6'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h1 className='font-bold text-2xl text-white'>Mercury Softech</h1>
    <p className='font-medium text-md text-gray-400'>
      3rd Floor, GrandTowers, Cheran Salai LIC Colony, Ayyappa Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021
    </p>
    <div className='flex flex-col space-y-8'>
    <a href='tel:+91 6382694426'  className='text-sm uppercase tracking-widest text-white'>Phone: <span className='hover:text-gray-400'>+91 6382694426</span> </a>
    <a href='tel: +91 4313582328' className='text-sm uppercase  tracking-widest text-white'>Tel: <span className='hover:text-gray-400'> +91 4313582328</span></a>
    <a href="mailto:summamailid123@gmail.com"  className='font-normal  text-md text-white'>Email:hr@mercurysoftech.com</a>
    </div>
  </motion.div>
</div>

<div className='sm:flex justify-between'>
  <motion.div
    className='space-y-4 md:space-y-6'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <h1 className='font-bold text-2xl '>Links</h1>
    <ul className="space-y-4 md:space-y-6 ">
      {link.map((li) => (
        <li key={li.id}>
          <NavLink to={li.lik} className='hover:text-gray-500'>{li.tit}</NavLink>
        </li>
      ))}
    </ul>
  </motion.div>
  <motion.div
    className='space-y-4 md:space-y-6'
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.4 }}
    viewport={{ once: true }}
  >
    <h1 className='font-bold text-2xl'>Our Services</h1>
    <ul className="space-y-4  md:space-y-6">
      {lnk.map((li) => (
        <li key={li.id} className='' >
          <NavLink to="" className='hover:text-gray-500'>{li.tit}</NavLink>
        </li>
      ))}
    </ul>
  </motion.div>
</div>


<div>
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="flex flex-col items-center text-center space-y-4 mt-6 md:mt-10"
>
  <h1 className="font-extrabold text-3xl bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text ">Follow Us</h1>

  <p className="text-gray-400 text-md md:mt-4">
    Stay connected with us on social media.
  </p>

  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
    className="flex gap-8  md:mt-8">
      
    <a href="https://facebook.com" className="text-xl hover:text-blue-500">
      <FaFacebookF />
    </a>
    <a href="https://instagram.com" className="text-xl hover:text-pink-500">
      <FaInstagram />
    </a>
    <a href="https://twitter.com" className="text-xl hover:text-sky-500">
      <FaTwitter />
    </a>
     <a href="https://youtube.com" className="hover:text-red-500 text-xl transition">
                 <FaYoutube />
                </a>
             <a href="https://google.com" className="hover:text-red-400 text-xl transition">
                   <FaGoogle />
               </a>
               <a href="https://linkedin.com" className="hover:text-blue-400 text-xl transition">
    <FaLinkedinIn />
  </a>
  </motion.div>
</motion.div>
</div>



</div>








    <div className="text-sm text-center text-gray-400 mt-10 pt-6 border-t border-gray-700">
  © {year} Mercury Softech All rights reserved.
</div>
</div>
    </footer>


    </div>
  )
}

export default Footer