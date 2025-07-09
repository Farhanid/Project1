
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegCalendarAlt } from 'react-icons/fa';
import {NavLink } from 'react-router-dom'
import LoginForm from './LoginForm';
import UserList from './UserList';
import LoginModal from './LoginModal';
import { motion } from "framer-motion";
import { FaSmile, FaFolderOpen, FaHeadset, FaBullseye } from "react-icons/fa";
import Ap from './Ap';
import Log from './Log';




const Contact = () => {
   const stats = [
    {
      id: 1,
      icon: <FaSmile className="text-4xl text-black" />,
      number: "232",
      label: "Happy Clients",
    },
    {
      id: 2,
      icon: <FaFolderOpen className="text-4xl text-black" />,
      number: "521",
      label: "Projects",
    },
    {
      id: 3,
      icon: <FaHeadset className="text-4xl text-red-500" />,
      number: "1463",
      label: "Hours Of Support",
    },
    {
      id: 4,
      icon: <FaBullseye className="text-4xl text-red-500" />,
      number: "100",
      label: "Results Guaranteed",
    },
  ];
  return (
  <>
  <div className='max-w-7xl mx-auto px-6 md:px-20 ' >
    <div className='grid grid-cols-1 md:grid-cols-4 md:mt-10 gap-6' >
     <div className='border-2 border-gray-500 flex flex-col justify-center items-center py-8 ' >
       <div className='bg-blue-200  rounded-full w-20 h-20 flex items-center justify-center' >
         <FaMapMarkerAlt className='text-blue-800  text-5xl' />
       </div>
       <h2 className='mt-2 text-lg font-medium flex items-center ' > Location</h2>
       <p className='md:px-4 text-center mt-2 text-md font-light' >3rd Floor, GrandTowers, Cheran Salai, LIC Colony, Ayyappa Nagar, K K Nagar, Tiruchirappalli, Tamil Nadu 620021</p>
      </div>

      <div className='border-2 flex flex-col items-center  border-gray-500  ' >
       <div className='bg-blue-200 rounded-full mt-8 w-20 h-20 flex items-center justify-center' >
         <FaEnvelope className='text-blue-800  text-5xl' />
       </div>
       <div className='mt-2 text-lg font-medium flex items-center '  >Email</div>
       <p className='mt-5 text-lg font-light' >hr@mercurysoftech.com</p>
       <p  className='mt-2 text-md font-light'>admin@mercurysoftech.com</p>
      </div>

        <div className='border-2 flex flex-col items-center border-gray-500' >
      <div className='bg-blue-200 mt-8 rounded-full w-20 h-20 flex items-center justify-center' >
         <FaPhoneAlt className='text-blue-800  text-5xl' />
       </div>
       <h1 className='mt-3 text-md font-medium'>Contact</h1>
       <p className='mt-2 text-xl font-light'>+91 6382694426</p>
       <p className='mt-2 text-xl font-light'>+91 4313582328</p>
      </div>   


       <div className='border-2  flex flex-col items-center border-gray-500' >
      <div className='bg-blue-200 mt-8 rounded-full w-20 h-20 flex items-center justify-center' >
         <FaRegCalendarAlt className='text-blue-800  text-5xl' />
       </div>  
       <h1 className='mt-2 text-md font-medium'>Visit Between</h1> 
       <p className='mt-2 text-md font-light flex  text-center '> Mon - Sat: 10.00 AM - 7.00 PM  Sunday : Closed</p>
        </div>
  
</div>
 
   
    <UserList />

    <Ap />
      <Log />
      <div className="min-h-screen bg-gray-100 p-6">
      <Cart />
    </div>

    
   

 
    </div>

 
  </>
  )
}

export default Contact
