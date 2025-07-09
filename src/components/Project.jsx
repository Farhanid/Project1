
import { Product } from '../datas/Product'
import { motion } from 'framer-motion';
import ContactPage from './ContactPage';


const Project = () => {
  return (
   <section className="relative bg-neutral-900 text-white py-24 px-6 lg:px-20 overflow-hidden">
         <ContactPage />
          
  <div className="max-w-7xl mx-auto   z-10 relative">
      <h1 className='text-4xl font-bold text-center mb-14 ' >Lorem ipsum dolor sit.</h1>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-7' >
      {Product.map((nav)=> (
       
        <div key={nav.id} className='border border-gray-700 text-center pt-4'  >
               <p className='font-bold text-3xl leading-tight' >{nav.bat}</p>
               <p className='font-medium text-md text-gray-400' >{nav.par}</p>
            <h1 className='text-sm uppercase tracking-widest text-white'>{nav.title}</h1>
             <motion.img
      src={nav.img}
      
      className="p-4 rounded-xl mx-auto object-cover w-full aspect-square"
      whileHover={{ scale: 0.8 }}
      whileTap={{ scale: 0.2 }}
      transition={{ type: 'spring', stiffness: 200 }}
    />
            <div className='flex gap-2 items-center justify-center pb-6' >
              <motion.a
             
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.1 }}
                transition={{ duration: 0.1, ease: 'linear' }}
                className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-sky-600 hover:to-blue-600 text-white px-3 py-1 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Click
              </motion.a>
              <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.5}}
      transition={{ type: 'spring', stiffness: 300 }}
      className='bg-red-500 rounded-md hover:bg-red-900 font-bold transition px-3 py-1'
    >
      Details
    </motion.button>
     <motion.button
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 0.5}}
      transition={{ type: 'spring', stiffness: 300 }}
       className='bg-blue-500 rounded-md hover:bg-blue-900 transition px-3 py-1'
    >
      Info
    </motion.button>
              
              
              
             
            </div>
             <p className='text-[15px] text-gray-400 hover:text-white'>click here to know more</p>
        </div>
       
      ))}
      </div>
</div>


      </section>
   
  )
}

export default Project