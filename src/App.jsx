import { Route, RouterProvider, createRoutesFromElements , createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Home from './components/Home';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';



function App() {
  const [homeKey, setHomeKey] = useState(0);

  const router = createBrowserRouter(createRoutesFromElements(
    
    <Route path="/" element={<MainLayout onHomeClick={() => setHomeKey(prev => prev + 1)} />} >
      <Route index element={<Home key={homeKey} />}      />
      <Route path="about" element={<About />}            />
      <Route path="contact" element={<Contact />}        />
      <Route path="project" element={<Project />}        />
      <Route path="login" element={<LoginForm />}        />
      <Route path="*"  element={<NotFound />}          />
      
     

    </Route>
  ));

  return <RouterProvider router={router} />;
}

export default App;
