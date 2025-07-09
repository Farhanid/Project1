import { motion } from 'framer-motion';
import img from '../assets/manimg.webp'; 
import StatsSection from './StatsSection';
import { NavLink } from 'react-router-dom';
import Test from './Test';
import Testimonial from './Testimonial';
import Gallery from './Gallery';
import Tavbar from './Tavbar';
import Slider from './Slider';
import SubscribeForm from './SubscribeForm';

const Home = () => {
  return (
    <div>
     <section className="relative bg-gray-100/10 text-black py-24 px-6 lg:px-20 overflow-hidden">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 relative">
    
  
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <span className="text-sm uppercase tracking-widest text-blue-400 mb-2 inline-block">
        Grow Everyday one step 
      </span>
      <h1 className="text-4xl text-blue-300  md:text-5xl font-bold leading-tight">
        Discover Premium <br />
        <span className="text-blue-800">Animals & Tech</span> Gear
      </h1>
      <p className="mt-6 text-lg text-white/80 max-w-md">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut perspiciatis quia blanditiis quae similique expedita atque magnam est, incidunt consequatur!
      </p>

      <div className="mt-8 flex gap-4 flex-wrap">
      
<motion.a
  
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.1, ease: 'linear' }}
  className="bg-gradient-to-r from-blue-500 to-sky-500 font-bold hover:from-sky-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
  
>
  <NavLink to="/project" > Visit</NavLink>
</motion.a>


<motion.a
  
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.1, ease: 'linear'}}
  className="border border-black bg-blue-400 hover:border-blue-400 text-black-200 hover:text-black hover:bg-blue-500 px-6 py-3 rounded-lg transition duration-300"
>
  <NavLink to="/about" >  Browse Categories</NavLink>
</motion.a>

        
      </div>
    </motion.div>

    
    <motion.div
      className="flex justify-center relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
 
      <div className="relative group rounded-xl p-2 bg-gradient-to-br from-blue-600 to-sky-500 shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          src={img}
          alt="Hero Product"
          className="rounded-xl object-cover w-full h-auto"
        />
    
       
      </div>
    </motion.div>
  </div>


  <div className="absolute w-80 h-80 bg-blue-600 rounded-full blur-[150px] opacity-20 top-0 -left-10 z-0"></div>
  <div className="absolute w-60 h-60 bg-sky-500 rounded-full blur-[120px] opacity-20 bottom-0 -right-10 z-0"></div>
</section>

  <StatsSection />
    <Test />
    <Gallery />
    <div className='bg-white p-8'>
                <h1 className="text-center mb-3 md:mb-8 text-4xl font-extrabold text-black">Slider Carosel</h1>
      
    <Slider />
     <div className=" bg-gray-100  text-black flex items-center justify-center">
      
      <SubscribeForm />
    </div>
    </div>
  
   <div className="min-h-screen max-w-7xl mx-auto px-6 md:px-8 py-12 bg-black">
  <div className="text-white max-w-7xl mx-auto px-6 md:px-8 space-y-6">
    
    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-100 to-blue-700 text-transparent bg-clip-text">
      About Mercury Softech 
    </h1>
    <span className='font-bold text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-100 to-blue-700 text-transparent bg-clip-text'>Expertise That Adapts to Your Business</span>
    <p className="text-base md:text-lg leading-relaxed mt-4 md:mt-8">
      At Mercury, we pride ourselves on our flexible approach to IT. Our dynamic solutions adapt to your evolving requirements, ensuring you receive the perfect fit for your business. 
    </p>
       <span className='text-3xl font-medium text-gray-100' >Whether you need:</span>
    <ul className=" space-y-1 text-base md:text-lg md:mt-6">
      <li>Comprehensive IT infrastructure support</li>
      
      <li>Strategic consultancy</li>
      <li>Custom software development</li>
    </ul>
    
  </div>
</div>

    </div>
  );
};

export default Home;
