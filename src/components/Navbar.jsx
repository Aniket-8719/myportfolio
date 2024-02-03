import React from 'react'
import { useState } from 'react';
import { Link } from 'react-scroll'
import { FiHome } from "react-icons/fi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { MdShare } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import Model from './Model'



const Navbar = () => {
  let [open, setOpen]  = useState(false);
  return (
   
 <>
    {/* <div  className='bg-navblue shadow-lg px-4  pb-8 mt-2 rounded-full md:flex md:justify-between mx-8 md:pt-0 md:pb-0  mb-12  w-full fixed z-50 '> */}
    <div className=' bg-navblue shadow-md pb-[70px]  md:pb-0  rounded-full mx-4 fixed top-2 left-0 right-0 z-50'>

      <nav className=' px-8 ml-60  md:mx-8  md:flex md:justify-between '>

      <div classNazme='md:flex  md:justify-between md:items-center  hover:text-primarycolor '><Link className='flex flex-col justify-center items-center hover:text-primarycolor' to="/">
        <h1 className='list-none text-xl md:relative  md:left-8 md:top-6  top-6 absolute left-12'>Portfolio</h1></Link>
        </div>
        <div className='text-4xl absolute  right-6 top-4  cursor-pointer md:hidden ' onClick={()=>setOpen(!open)}>{open ? <VscClose />: <CgMenuRight />}</div>

      <div className={`md:flex mt-20 md:items-center md:py-0 md:gap-16 md:my-0 my-12 bg-navblue  rounded-full px-2.5 py-6 absolute right-2   shadow-lg md:shadow-none md:static  transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>

      <div  className='md:flex md:flex-col md:justify-center md:items-center  hover:text-primarycolor  my-4 cursor-pointer' 
      >
        <Link className=' flex flex-col justify-center items-center hover:text-primarycolor '
        onClick={()=>setOpen(!open)}
        to="home"
        smooth={true} 
        offset={-120} 
        duration={500}>
        <div className='text-2xl'><FiHome /></div>
        <h1 className='list-none text-md'>Home</h1></Link>
        </div>
        <div className='md:flex md:flex-col md:justify-center md:items-center hover:text-primarycolor my-4 cursor-pointer' 
         >
          <Link className='flex flex-col justify-center items-center hover:text-primarycolor' 
          onClick={()=>setOpen(!open)}
          to="project"
          smooth={true} 
          offset={-120} 
          duration={500}>
        <div className='text-2xl'><AiOutlineFundProjectionScreen /></div>
        <h1 className='list-none text-md'>Project</h1></Link>
        </div>
        <div className='md:flex md:flex-col md:justify-center md:items-center hover:text-primarycolor my-4 cursor-pointer' 
        >
          <Link className='flex flex-col justify-center items-center hover:text-primarycolor' 
          onClick={()=>setOpen(!open)}
          to="service" 
          smooth={true} 
          offset={-120} 
          duration={500}>
        <div className='text-2xl'><MdMiscellaneousServices /></div>
        <h1 className=' list-none text-md'>Service</h1></Link>
        </div>
        <div className='md:flex md:flex-col md:justify-center  md:items-center hover:text-primarycolor my-4 cursor-pointer' 
        >
          <Link className='flex flex-col justify-center items-center hover:text-primarycolor' 
          onClick={()=>setOpen(!open)}
          to="contact" smooth={true} 
          offset={-120} 
          duration={500} >
        <div className='text-2xl '><RiContactsFill /></div>
        <h1 className='list-none text-md'>Contact</h1></Link>
        </div>
      </div>
      </nav>

    </div>
    
 </>

  )
}

export default Navbar
