import React from "react";
import GrowthConsultantCard from "./GrowthConsultantCard";

import { FiArrowRight } from "react-icons/fi";

const ConnectForm = () => {
  return (
    <div id="contact" className="grid md:grid-cols-3 gap-4 px-8 py-6 w-[100vw]">
      <div className="flex flex-col md:col-span-2 text-black font-sf-pro-display relative rounded-xl">
        <img
          className="absolute h-full w-full rounded-xl object-cover z-0"
          alt=""
          src="/bg@2x.png"
        />
        {/* <div className="absolute top-[0px] left-[0px] w-full rounded-xl h-full z-0 bg-white/20" /> */}

        <div className="flex flex-col items-start w-full p-6 z-10">
          <h2 className="text-2xl font-semibold text-black">Let's Connect</h2>

          <div className="w-full">
            <form
              className="flex flex-col gap-3 w-full md:py-4 py-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                  type="text"
                  placeholder="Name*"
                />
                <input
                  className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                  type="text"
                  placeholder="Phone Number"
                />
                <input
                  className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                  type="text"
                  placeholder="Company Name"
                />
              </div>
              <input
                className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                type="text"
                placeholder="Subject*"
              />
              <textarea
                className="bg-white/50 px-5 py-3 rounded-lg outline-none"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="md:w-1/3 w-full py-4 px-3 rounded-lg bg-rose-300 text-gray-700 font-semibold tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <GrowthConsultantCard />
    </div>
  );
};

export default ConnectForm;
