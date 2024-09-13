import React from "react";
import HeroImg from "../assets/Hero.png";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import SocialMedia from "./SocialMedia";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex flex-col md:flex-row justify-center items-center max-w-[700px] md:max-w-[1400px] md:-mt-8 mx-8 md:mx-24 "
      >
        <div className="flex flex-col p-2 justify-center items-center   w-full  ">
          <div className="flex justify-center items-center gap-4   w-full  ">
            <div className="">
              <div className="text-headingColor font-[600] text-[10px]  md:text-[16px]  ">
                Hello,Welcome
              </div>
              <div className="text-[35px]  md:text-[50px] text-headingColor font-[900]     ">
                I'm
              </div>
            </div>
            <div className="w-full text-[60px] md:text-[80px] text-btnColor font-[900]     ">
              Aniket
            </div>
          </div>
          <div className="  w-full  text-[35px] md:text-[50px] text-headingColor font-[900]  -mt-4">
            Software Deveoper
          </div>
          <div className="w-full      mt-2">
            Versatile professional skilled in both UI/UX design and full-stack
            web development and many more in our digital world. With a keen eye
            for user-centered design principles, I bring creativity to crafting
            visually appealing interfaces. My integrated skill
          </div>
          <div className="w-full mt-8">
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6"
            >
              <Link
                to={"https://wa.me/message/D4G74O727FY4H1 "}
                target="_whatsapp"
              >
                <button
                  className="bg-btnColor text-white font-[500] hover:font-[500]  hover:text-white
               gap-2 py-2 px-6 rounded-[8px] hover:bg-headingColor ease-in duration-300
              "
                >
                  <Link
                    to={"https://wa.me/message/D4G74O727FY4H1 "}
                    target="_whatsapp"
                    className="flex items-center gap-2 "
                  >
                    <FiMessageSquare />
                    Hire me
                  </Link>
                </button>
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1wGGBlD1xuN8vzTrRKFW0COUBZRz6fs7w/view"
                }
                target="_Download CV"
                className="text-headingColor text-[16px] flex justify-center items-center border border-headingColor
                  font-[500] hover:font-[500] hover:text-white
               gap-2 py-2 px-4 rounded-[8px] hover:bg-headingColor ease-in duration-300"
              >
                Download CV
                <FiDownload />
              </Link>
            </div>
          </div>
          <div className="w-full  pt-16">
            <SocialMedia />
          </div>
        </div>
        <div className="flex w-full text-[50px] justify-center p-4">
          <Player
            autoplay
            loop
            src="https://lottie.host/f2aa30fa-e891-4527-b98f-97ee3f44eaf0/tWideSA7nD.json"
            className="w-[350px] h-[350px] md:w-[600px] md:h-[600px]"
          >
          </Player>
        </div>
      </section>
    </>
  );
};

export default Home;
