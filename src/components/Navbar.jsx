import React, { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ onHomeClick }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      onHomeClick(); // Re-render Home
    } else {
      navigate('/');
    }
  };
  const navLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
   
    { id: 3, name: 'Project', href: '/project' },
     { id: 4, name: 'Login', href: '/login' },
  ];
  return (
    

    <header className="w-full fixed z-50 bg-white/4 backdrop-blur border-b border-white/20 ">
      
  <div className="max-w-7xl mx-auto px-6 lg:px-18">
   



    <nav className="py-4 flex justify-between items-center text-white">
      <a className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-red-500 text-transparent bg-clip-text">
        MyBrand
      </a>

      <ul className="hidden  md:flex gap-8 text-lg">
        <li><button onClick={handleHomeClick} className="hover:text-blue-400 transition-colors duration-200">Home</button></li>
        <li><NavLink to="/about" className="hover:text-blue-400">About</NavLink></li>
        <li><NavLink to="/project" className="hover:text-blue-400">Project</NavLink></li>
        <li><NavLink to="/login" className="hover:text-blue-400">Login</NavLink></li>
      </ul>

      <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
        {open ? <BiX /> : <BiMenu />}
      </button>
    </nav>
   
  </div>


  {open && (
    <div className="md:hidden bg-black text-white px-4 py-8 space-y-4 text-center absolute w-full top-[68px] left-0 z-40">
      {navLinks.map(link => (
        <NavLink
          key={link.id}
          to={link.href}
          className="block text-lg hover:text-blue-400"
          onClick={() => {
            if (link.href === '/') handleHomeClick();
            setOpen(false);
          }}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  )}
</header>

 
  );
};

export default Navbar;
