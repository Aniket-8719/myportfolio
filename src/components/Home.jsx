import React from "react";
import CountUp from "countup";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import develperIMG from "../assets/images/image 23.png"
import SocialMedia from "./SocialMedia";

const Home = () => {
  return (
    <>
    <section id="home">
      <div className="md:pt-12 md:flex md:flex-row flex flex-col basis-1/2 justify-center items-center gap-8 mx-8 md:mx-24">
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
                I'm <span className="text-btnColor">Aniket</span>
                <h1 className="">Software Developer</h1>
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
              <SocialMedia/>
            
            </div>
        <div
        data-aos="fade-left"
        data-aos-duration="1500"
         className="flex justify-center items-center">
          <img src={develperIMG} alt="develper image"></img>
        </div>
      </div>
    </section>
     
    </>
  );
};

export default Home;
