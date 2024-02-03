import React from "react";
import CountUp from "countup";
import { FiMessageSquare } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero img.png";

const Home = () => {
  return (
    <>
      <section id="home" className="justify-center items-center  md:mx-12 pt-4">
        <div className="container flex flex-col gap-8 md:flex-row justify-center">
          <div className="md:flex justify-between items-center sm:flex-col md:flex-row">
            {/* ========== left content =========  */}
            <div className="w-full flex flex-col">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[16px]"
              >
                Hello welcome
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800] text-[1.8rem] 
          sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
              >
                I'm Aniket <br /> Software Developer
              </h1>
              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                className="text-[17px] py-4 text-headingColor"
              >
                Versatile professional skilled in both UI/UX design and
                full-stack web development and many more in our digital world.
                With a keen eye for user-centered design principles, I bring
                creativity to crafting visually appealing interfaces. My
                integrated skill set allows me to seamlessly bridge the gap
                between design and development, resulting in engaging and
                functional digital experiences.
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
               <Link
               to={"https://wa.me/message/D4G74O727FY4H1 "} target="_whatsapp">
               <button
                  className="bg-btnColor text-white font-[500] hover:font-[500] hover:text-white
               gap-2 py-2 px-6 rounded-[8px] hover:bg-headingColor ease-in duration-300
              "
                >
                  <Link 
                  to={"https://wa.me/message/D4G74O727FY4H1 "} 
                  target="_whatsapp" className="flex items-center gap-2">
                    <FiMessageSquare />
                    Hire me
                  </Link>
                </button>
               </Link>
                <Link
                  to={"https://drive.google.com/file/d/1wGGBlD1xuN8vzTrRKFW0COUBZRz6fs7w/view"}
                  target="_Download CV"
                  className="text-headingColor font-[500] text-[16px] border-b           
              border-solid border-headingColor"
                >
                  Download CV
                </Link>
              </div>

              {/*========== Social media icon ===========  */}
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
            </div>
          </div>

          {/* ========== right content ======== */}
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="flex md:flex md:flex-row justify-center items-center h-full my-4"
          >
            <img width={1200} src={heroImg} alt="Hero images" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
