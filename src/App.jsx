import React from 'react'
// import {Route, Routes } from 'react-router-dom'
import Aos from 'aos'
import "aos/dist/aos.css";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Project from './components/Project'
import Numbers from './components/Numbers';
import Footer from './components/Footer';


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
     <div className='mx-[30px] md:mx-[5px] lg:mx-[0px]'>
      <Home/>
      {/* <Numbers/> */}
      <Service/>
      <Project/>
      <Contact/>
     </div>
      <Footer/>
     </main>
     </div>
    </>
  )
}

export default App
