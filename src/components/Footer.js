import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 p-8 h-full w-full rounded-t-2xl rounded-b-none bg-black overflow-hidden">
      <div className="flex flex-col items-start md:col-span-2 px-8">
        <h1 className="text-6xl text-white text-left">
          We would love to hear from you.
        </h1>
        <p className="text-gray-400 text-left py-8">
          Feel free to reach out if you want to collaborate with us, or simply
          have a chat.
        </p>

        <button className="flex justify-center items-center px-6 py-3 outline-none bg-white text-black font-bold rounded-full">
          Get Membership <FiArrowRight className="mt-[3px] ml-2" size={20} />
        </button>

        <p className="text-gray-400 text-left pt-8">
          Don't like the forms? Drop us a line via email.
        </p>
        <Link className="text-gray-50 text-left font-medium py-0 cursor-pointer hover:underline">
          info@acm.com
        </Link>

        <p className="py-8 text-gray-400">
          © ACM 2015. All rights reserved.{" "}
          <span className="text-white font-medium">• </span>
          <span className="text-white font-medium underline cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>

      <div className="flex flex-col items-start md:col-span-1 px-8">
        <h1 className="uppercase text-white text-lg font-semibold">
          Contact Us
        </h1>
        <p className="text-gray-400 text-left pt-8">Our Email</p>
        <Link className="text-gray-50 text-left font-medium py-0 cursor-pointer hover:underline">
          info@acm.com
        </Link>
        <p className="text-gray-400 text-left pt-8">Our Phone</p>
        <p className="text-gray-50 text-left font-medium py-0 cursor-pointer hover:underline">
          +971 (17) 101 3457
        </p>

        <p className="text-gray-400 text-left pt-8">
          Villa no. 3 - Street # 17- Al Barsha 2 - Dubai - United Arab Emirates
        </p>

        <h1 className="uppercase text-white text-lg font-semibold mt-8 py-3">
          Follow Us
        </h1>

        <div className="flex gap-8 py-4">
          <img className="" src="/dribbble.svg" alt="" />
          <img className="" src="/behance.svg" alt="" />
          <img className="" src="/insta.svg" alt="" />
          <img className="h-8" src="/twitter-x@2x.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer