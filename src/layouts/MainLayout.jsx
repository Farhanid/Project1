import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTopButton from '../components/ScrolltoTopButton'

const MainLayout = ({ onHomeClick }) => {
  return (
    <div className=' w-full bg-neutral-950 text-white'>
    
      <Navbar onHomeClick={onHomeClick} />
     
      <main className="pt-[60px]">
        <Outlet />
      </main>

      <ScrollToTopButton />
      <Footer />
      
    </div>
  )
}

export default MainLayout;
