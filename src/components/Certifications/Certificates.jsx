// Certificates.js
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-scroll";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="max-w-[700px] mx-8 md:mx-24 md:max-w-[1400px] mt-8 mb-2"
    >
      <div className="container mx-auto">
        <h2 className="text-headingColor font-[800] text-[2.4rem] p-2 md:p-4">
          My Certificates
        </h2>

        <div className="flex flex-col justify-center items-center mt-8 md:mt-0">
          <div>
            <Player
              autoplay
              loop
              src="https://lottie.host/18b727e2-574c-4aa5-9024-de5d707ec6f6/xErL7RkJd2.json"
              className="w-[200px] h-[100px] md:w-[300px] md:h-[200px]"
            ></Player>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1Z2493E74rriCeso4jNC3KXkjs5tguAcW?usp=sharing"
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security attribute
            className="cursor-pointer"
          >
            <p className="text-xl text-center mt-4 md:mt-0 text-linkdinColor">
             <u> View all certificates</u>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
