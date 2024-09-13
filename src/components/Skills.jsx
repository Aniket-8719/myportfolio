import React from 'react'
import reactImg from '../assets/React.webp'
import expressImg from '../assets/expressjs.png'
import mongoDBIMg from '../assets/mongodb_logo_icon_170943.png'
import nodeImg from '../assets/node.png'
import reduxImg from '../assets/reduxImg.png'
import postmanImg from '../assets/postman-logo_brandlogos.net_dsr1l-512x510.png'
import CImg from '../assets/c--logo-icon-0.png'
import gitImg from '../assets/gitImg.png'
import gitHubImg from '../assets/github_PNG80.png'
import htmlImg from '../assets/html5-icon-13.jpg'
import cssImg from '../assets/cssImg.png'
import javascriptImg from '../assets/javascript-logo-javascript-icon-transparent-free-png.webp'
import bootstrapImg from '../assets/bootstrap-logo-shadow.png'
import tailwindcssImg from '../assets/Tailwind_CSS_Logo.svg.webp'
import jiraImg from '../assets/jira-logo-gradient-blue@2x-300x177.webp'
import trelloImg from '../assets/trello-icon-png-5.jpg'

const Skills = () => {
  return (
    <>
    <section id="skills" className='max-w-[700px] mx-8 md:mx-24 md:max-w-[1400px] mt-8 mb-2'>
        <p className='text-headingColor font-[800] text-[2.4rem] p-2 md:p-4'>Skills</p>
    </section>
    <div className=' max-w-[1400px]  mx-8 md:mx-24 px-2  grid grid-cols-4  sm:grid-cols-6 md:grid-cols-12 gap-2'>
        
        <div className='flex justify-center items-center p-4 border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
               <img  src={reactImg}></img>
        </div>
        <div className='flex justify-center items-center p-4 border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={expressImg}></img>
        </div>
        <div className='flex justify-center items-center p-4 border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={mongoDBIMg}></img>
        </div>
        <div className='flex justify-center items-center p-4 border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={nodeImg}></img>
        </div>
        
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={reduxImg}></img>
        </div>
        
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={postmanImg}></img>
        </div>
        
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={CImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={gitImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={gitHubImg}></img>
        </div>
        <div className='flex justify-center items-center p-4 border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={htmlImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={cssImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={javascriptImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={tailwindcssImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={bootstrapImg}></img>
        </div>
        <div className='flex justify-center items-center p-4  border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={trelloImg}></img>
        </div>
        <div className='flex justify-center items-center p-4   border border-opacity-30 md:border-opacity-40 border-cardBorder rounded-3xl  w-full'>
        <img src={jiraImg}></img>
        </div>
       
        
    
    </div>
    
      
    </>
  )
}

export default Skills
