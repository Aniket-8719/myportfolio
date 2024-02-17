import React from 'react'
// import {Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";
import Navbar from './components/Navbar'
import Home from './components/Home'
// import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  Aos.init({
    duration: 1500,
    offset: 100,
  });

  return (
    <>
    
    <div className="overflow-hidden">
     <Navbar/>
     {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes> */}
     <main>
      <Home/>
      <Service/>
      <Pricing pricing={pricing}/>
      <Project/>
      <Contact/>
      <Footer/>
     </main>
     </div>
    </>
  )
}

export default App
