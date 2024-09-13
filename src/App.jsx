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
import Skills from './components/Skills';
import Education from './components/Education/Education';
import Problemsolving from './components/Problem Solving section/Problemsolving';
import Certificates from './components/Certifications/Certificates';

function App() {
  Aos.init({
    duration: 1500,
    offset: 100,
  });

  return (
    <>
    <div className="overflow-hidden">
     <Navbar/>
     <main>
      <Home/>
      {/* <Education/> */}
      <Problemsolving/>
      <Skills/>
      {/* <Service/> */}
      <Project/>
      <Certificates/>
      <Contact/>
      <Footer/>
     </main>
     </div>
    </>
  )
}

export default App
