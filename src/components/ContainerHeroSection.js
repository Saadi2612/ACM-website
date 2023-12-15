import { useRef } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const ContainerHeroSection = () => {
  return (
    <div
      id="about"
      className="bg-whitesmoke-100 w-full text-gray-300 font-inter"
    >
      {/* <img
        className="absolute top-[593px] left-[15px] w-[1250px] h-[239px] object-cover"
        alt=""
        src="/image@2x.png"
      /> */}
      <nav className="fixed w-[90vw] lg:w-[50vw] h-14 top-3 left-[50%] -translate-x-2/4 rounded-full bg-black flex flex-row items-center justify-center p-1.5 z-20 md:text-base sm:text-sm text-xs">
        <div className="grid grid-cols-3 w-full items-center justify-evenly">
          <a href="/#about">
            <p className="cursor-pointer font-medium font-inter text-white px-1 ">
              About Us
            </p>
          </a>
          <a href="/#services">
            <p className="cursor-pointer font-medium font-inter text-gray-300 px-1 ">
              Services
            </p>
          </a>
          <a href="/#contact">
            <p className="cursor-pointer font-medium font-inter text-gray-300 px-1 ">
              Contact Us
            </p>
          </a>
        </div>
        <div className="rounded-full ml-1 w-[50%] md:w-[40%] h-full bg-gray-100 flex items-center justify-center py-1 hover:bg-gradient-to-r hover:from-[#FEAEBA] hover:to-[#B5DAFE] ease-in duration-300">
          <p className="cursor-pointer font-bold font-inter text-black">
            Get Membership
          </p>
        </div>
      </nav>
      <div className="flex flex-col items-center xl:py-20 py-16 px-6 md:px-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.2, 0.71, 0.2, 1.01],
          }}
          className="font-sf-pro-display text-9xl md:text-[200px] font-bold bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent"
        >
          ACM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            ease: [0.2, 0.71, 0.2, 1.01],
          }}
          className="text-xl md:text-2xl lg:w-[80%] font-semibold font-inter text-center text-gray-400"
        >
          ACM (Association for Computing Machinery) Student Chapters are
          university-based organisations that aim to foster interest and
          involvement in computer science and related fields among students.
        </motion.p>
      </div>

      <div className="relative w-full py-10">
        <img src="/image@2x.png" alt="" />
        <div className="cursor-pointer absolute -top-3 right-10 md:right-20 bg-[#222222] md:w-40 md:h-40 w-24 h-24 rounded-full p-2">
          <img
            className="btn-surrounding_img"
            src="/linked-path-group-1@2x.png"
            alt=""
          />

          <a href="/#services" className="">
            <img
              className="absolute top-[37%] left-[33%] -translate-x-2/4 -translate-y-2/4 h-8 md:h-14 animate-bounce"
              src="/vector@2x.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContainerHeroSection;
