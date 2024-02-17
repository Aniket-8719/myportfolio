import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <>
      <div className="mt-20 justify-center items-center">
                <div className="flex gap-4 items-center justify-center mb-6 md:gap-8">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="100"
                    className="flex flex-col justify-center items-center gap-4 relative z-2 group"
                  >
                    <div
                      className='absolute top-0 px-4 py-2.5 rounded-full shadow-lg bg-instaColor
                invisible 
                group-hover:-top-[55px]  group-hover:visible group-hover:text-white group-hover:pointer-events-auto 
                transition-all duration-200 ease-in
                before:absolute before:content-[" "]  before:bg-instaColor before:h-4 before:w-4 before:-bottom-[6px] before:left-[30%] 
                before:transform before:translate-x-[50%] before:rotate-[45deg]
                text-[12px]'
                    >
                      Instagram
                    </div>
                    <span
                      className="text-xl p-4 rounded-full shadow-lg relative z-2  
                hover:bg-instaColor hover:text-white"
                    >
                      <Link to={"https://www.instagram.com/aniket07013?igsh=OGhtdmo1cG42b3Zv"} target="_instagram">
                        <FaInstagram />
                      </Link>
                    </span>
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="200"
                    className="flex flex-col justify-center items-center gap-4 relative z-2 group"
                  >
                    <div
                      className='absolute top-0 px-4 py-2.5 rounded-full shadow-lg bg-twitterColor
                invisible 
                group-hover:-top-[55px]  group-hover:visible group-hover:text-white group-hover:pointer-events-auto 
                transition-all duration-200 ease-in
                before:absolute before:content-[" "]  before:bg-twitterColor before:h-4 before:w-4 before:-bottom-[6px] before:left-[30%] 
                before:transform before:translate-x-[50%] before:rotate-[45deg]
                text-[12px]'
                    >
                      Twitter
                    </div>
                    <span
                      className="text-xl p-4 rounded-full shadow-lg relative z-2  
                hover:bg-twitterColor hover:text-white"
                    >
                      <Link to={"https://twitter.com/Aniket_07013"} target="_twitter">
                        <BsTwitterX />
                      </Link>
                    </span>
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="300"
                    className="flex flex-col justify-center items-center gap-4 relative z-2 group"
                  >
                    <div
                      className='absolute top-0 px-4 py-2.5 rounded-full shadow-lg bg-githubColor
                invisible 
                group-hover:-top-[55px]  group-hover:visible group-hover:text-white group-hover:pointer-events-auto 
                transition-all duration-200 ease-in
                before:absolute before:content-[" "]  before:bg-githubColor before:h-4 before:w-4 before:-bottom-[6px] before:left-[30%] 
                before:transform before:translate-x-[50%] before:rotate-[45deg]
                text-[12px]'
                    >
                      Github
                    </div>
                    <span
                      className="text-xl p-4 rounded-full shadow-lg relative z-2  
                hover:bg-githubColor hover:text-white"
                    >
                      <Link to={"https://github.com/Aniket-8719"} target="_github">
                        <FaGithub />
                      </Link>
                    </span>
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-delay="400"
                    className="flex flex-col justify-center items-center gap-4 relative z-2 group"
                  >
                    <div
                      className='absolute top-0 px-4 py-2.5 rounded-full shadow-lg bg-linkdinColor
                invisible 
                group-hover:-top-[55px]  group-hover:visible group-hover:text-white group-hover:pointer-events-auto 
                transition-all duration-200 ease-in
                before:absolute before:content-[" "]  before:bg-linkdinColor before:h-4 before:w-4 before:-bottom-[6px] before:left-[30%] 
                before:transform before:translate-x-[50%] before:rotate-[45deg]
                text-[12px]'
                    >
                      Linkedin
                    </div>
                    <span
                      className="text-xl p-4 rounded-full shadow-lg relative z-2  
                hover:bg-linkdinColor hover:text-white"
                    >
                      <Link to={"https://www.linkedin.com/in/aniket-savita-bb295a230/"} target="_linkedin">
                        <FaLinkedin />
                      </Link>
                    </span>
                  </div>
                </div>
                <p className="text-[16px] font-[600] text-center underline">
                  Follow me
                </p>
              </div>
      
    </>
  )
}

export default SocialMedia
