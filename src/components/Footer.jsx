import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="bg-footerColor pt-12 px-8">
        {/* ========= footer top ======== */}
        <div className="container md:mx-28 ">
          <div className="sm:flex items-center justify-between md:gap-8">
            <div className="w-full sm:w-1/2">
              <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
                Do you want to make beautiful products?
              </h2>
              <Link 
              to="https://wa.me/message/D4G74O727FY4H1 " 
              target="_whatsApp">
                <button
                  className="bg-btnColor text-white font-[500] hover:font-[500] hover:text-white
               gap-2 py-2 px-6 rounded-[8px] hover:bg-headingColor ease-in duration-300
              "
                >
                  <Link 
                  to="https://wa.me/message/D4G74O727FY4H1 " 
                  target="_whatsApp"
                  className="flex items-center gap-2">
                    <FiMessageSquare />
                    Hire me
                  </Link>
                </button>
              </Link>
            </div>

            <div className="w-full sm:w-1/2  md:mr-52">
              <p className="text-gray leading-7 mt-4 sm:mt-0 ">
              Versatile professional skilled in both UI/UX design and 
              full-stack web development and many more in our digital world. 
              With a keen eye for user-centered design principles, I bring creativity 
              to crafting visually appealing interfaces. My integrated skill set allows 
              me to seamlessly bridge the gap between design and development, resulting 
              in engaging and functional digital experiences.
              </p>

              <div className="mt-8 justify-center items-center">
                <div className="flex gap-4 items-center justify-center mb-4 md:gap-8">
                  <div className="flex flex-col justify-center items-center gap-4 relative z-2 group">
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
                      className="text-[15px] p-4 rounded-full shadow-lg relative z-2  
                hover:bg-instaColor hover:text-white text-white bg-gray"
                    >
                      <Link to={"https://www.instagram.com/aniket07013?igsh=OGhtdmo1cG42b3Zv"} target="_instagram">
                        <FaInstagram />
                      </Link>
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 relative z-2 group">
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
                      className="text-[15px] p-4 rounded-full shadow-lg relative z-2  
                hover:bg-twitterColor hover:text-white text-white bg-gray"
                    >
                      <Link to={"https://twitter.com/Aniket_07013"} target="_twitter">
                        <BsTwitterX />
                      </Link>
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 relative z-2 group">
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
                      className="text-[15px] p-4 rounded-full shadow-lg relative z-2  
                hover:bg-githubColor hover:text-white text-white bg-gray"
                    >
                      <Link to={"https://github.com/Aniket-8719"} target="_github">
                        <FaGithub />
                      </Link>
                    </span>
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 relative z-2 group">
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
                      className="text-[15px] p-4 rounded-full shadow-lg relative z-2  
                hover:bg-linkdinColor hover:text-white text-white bg-gray"
                    >
                     <Link to={"https://www.linkedin.com/in/aniket-savita-bb295a230/"} target="_linkedin">
                        <FaLinkedin />
                      </Link>
                    </span>
                  </div>
                </div>
                <p
                  className="text-[16px] font-[600] 
            text-gray text-center underline"
                >
                  Follow me
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ====== footer top end  ====== */}
        <div className=" flex justify-center items-center py-4 pt-28 text-gray">
          <h2 className="text-[12px]  md:text-[12px]">
            <span>&copy;</span> copyrights 2024 developed by Aniket - All rights
            resserved
          </h2>
        </div>
      </section>
    </>
  );
};

export default Footer;
