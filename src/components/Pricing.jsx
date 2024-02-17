import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";

const Pricing = ({ pricing }) => {
  return (
    <>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-28">
        {/* Pricing Card */}
        {pricing.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl border  border-cardBorder  border-opacity-25 h-[600px] w-[auto] min-w-[300px] shadow-lg overflow-hidden"
          >
            <div className="w-full px-8 bg-btnColor text-white py-6">
              <div className="flex-col items-center justify-center">
                <h1 className="text-center text-[33px] md:text-[40px] font-bold">
                  {item.title}
                </h1>
                <p className=" mt-2 text-[12px]">{item.para}</p>
              </div>
            </div>
            <div className="w-full h-[370px]">
              <div className="flex-col justify-center items-center mt-4 mx-4">
                <h2 className="text-[22px] font-semibold text-center">
                  Features
                </h2>
                <ul className="mt-4 px-8">
                  {item.list.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="flex justify-start items-center my-4 gap-4"
                    >
                      <div className="text-[12px] rounded-full bg-facheck p-1 text-white">
                        <FaCheck />
                      </div>

                      <span className="text-[16px]">{listItem.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full  mt-auto">
              <div className="flex justify-between items-center px-8">
                <Link to="/" className="text-primarycolor">
                  Learn more
                </Link>
                <button className="bg-btnColor text-white px-4 py-2 rounded-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
