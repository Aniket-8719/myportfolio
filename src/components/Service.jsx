import React from "react";
import { LuCode2 } from "react-icons/lu";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Service = () => {
  return (
    <>
      <section className="mt-12" id="service">
        <div className="mx-8 md:mx-12">
          <div className="text-center  md:mx-8">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            What do I help
            </h2>
            <p className=" lg:max-w-[800px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            As a seasoned professional with a diverse skill set, I am confident in my ability to bring value across multiple roles within your dynamic startup. My background spans [3 years of experiences, in <span className="font-[700] mx-1">UI/UX design, web development, business analytics</span>], and I am eager to leverage this expertise to contribute to your ongoing success. and also helping organizations make informed decisions 
            that drive efficiency and growth. 
  
            </p>
          </div>

          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-grey-700 antialiased text-sm font-semibold">
                {/* ============ vertical line running through the middle ======== */}
                <div
                  className="hidden absolute w-1  sm:block bg-btnColor h-full left-1/2 transform
              -translate-x-1/2"
                ></div>

                {/* ==== left card ========== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                        data-aos="fade-right"
                        data-aos-duration='1200'
                          className="bg-white p-4 rounded shadow group hover:bg-btnColor cursor-pointer
                      ease-in duration-150"
                        >
                          <h3
                            className="text-btnColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                          >
                            Frontend Development
                          </h3>

                          <p
                            className="text-[12px] text-headingColor group-hover:text-white 
                        group-hover:font-[500] leading-7"
                          >
                             I bring a solid foundation in <span className="font-[700] mx-0.5">HTML, CSS [Tailwind CSS],</span> and 
                             <span className="font-[700] mx-0.5">JavaScript,</span>  
                             coupled with expertise in modern frontend frameworks such as <span className="font-[700] mx-0.5">React.js. </span>
                             My skill set extends to optimizing website performance, implementing 
                             interactive features, and troubleshooting complex issues to deliver
                             smooth and engaging web applications.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="absolute  flex justify-center items-center rounded-full shadow-lg h-10 w-10 border-white bg-btnColor
                      border-4 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  "
                      >
                        <div className="text-xl">
                          <LuCode2 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== right card ======== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration='1300'
                          className="bg-white p-4 rounded shadow group hover:bg-btnColor cursor-pointer
                      ease-in duration-150"
                        >
                          <h3
                            className="text-btnColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                          >
                            Backend Devlopment
                          </h3>

                          <p
                            className="text-[12px] text-headingColor group-hover:text-white 
                        group-hover:font-[500] leading-7"
                          >
                             I specialize in languages such as <span className="font-[700] mx-0.5">Express.js</span> and <span className="font-[700] mx-0.5">Node.js </span> and have a 
                             strong command of relational and <span className="font-[700] mx-0.5">NoSQL databases</span>, including <span className="font-[700] mx-0.5">MySQL</span>and 
                             <span className="font-[700] mx-0.5">MongoDB.</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                    <div className="absolute  flex justify-center items-center rounded-full shadow-lg h-10 w-10 border-white bg-btnColor
                      border-4 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  "
                      >
                        <div className="text-xl"><MdOutlineDeveloperMode /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==== left card ========== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                         data-aos="fade-right"
                         data-aos-delay="100"
                         data-aos-duration='1400'
                          className="bg-white p-4 rounded shadow group hover:bg-btnColor cursor-pointer
                      ease-in duration-150"
                        >
                          <h3
                            className="text-btnColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                          >
                            UI/UX Designer
                          </h3>

                          <p
                            className="text-[12px] text-headingColor group-hover:text-white 
                        group-hover:font-[500] leading-7"
                          >
                            As a seasoned <span className="font-[700] mx-0.5">UI/UX Designer</span> with [1 year] of experience, 
                            I bring a passion for creating intuitive and visually appealing 
                            digital experiences. I have honed my skills in user research,
                             wireframing, prototyping, and visual design. I've successfully 
                             led the design process for diverse projects, from mobile apps 
                             to responsive web interfaces.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="absolute  flex justify-center items-center rounded-full shadow-lg h-10 w-10 border-white bg-btnColor
                      border-4 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  "
                      >
                        <div className="text-xl">
                        <FiFigma />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ===== right card ======== */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                         data-aos="fade-left"
                         data-aos-duration='1500'
                          className="bg-white p-4 rounded shadow group hover:bg-btnColor cursor-pointer
                      ease-in duration-150"
                        >
                          <h3
                            className="text-btnColor font-[700] mb-3 group-hover:text-white
                        group-hover:font-[600] text-xl"
                          >
                           Business Analytics
                          </h3>

                          <p
                            className="text-[12px] text-headingColor group-hover:text-white 
                        group-hover:font-[500] leading-7"
                          >
                            I am passionate about helping organizations make informed decisions 
                            that drive efficiency and growth. With a collaborative approach and 
                            excellent communication skills, I excel in translating data findings 
                            into compelling narratives for stakeholders. Ready to contribute analytical 
                            expertise to drive business success.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                    <div className="absolute  flex justify-center items-center rounded-full shadow-lg h-10 w-10 border-white bg-btnColor
                      border-4 left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0  "
                      >
                        <div className="text-xl"><FaBusinessTime /></div>
                      </div>
                    </div>
                  </div>
                </div>


                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
