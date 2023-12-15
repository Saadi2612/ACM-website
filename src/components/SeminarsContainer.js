import { useRef } from "react";

const SeminarsContainer = () => {
  return (
    <div id="services" className="flex flex-col py-16 px-8 font-sf-pro-display">
      <h2 className="text-xl md:text-2xl text-left text-gray-500">
        Our Services
      </h2>
      <p className="text-xl md:text-3xl py-3 text-left text-gray-500">
        We, as a cohesive student platform, to engage in growth programs.
      </p>
      <div className="grid sm:grid-cols-3 sm:grid-rows-5 h-[200vh] gap-4">
        <div className="relative sm:col-span-1 sm:row-span-2 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="w-full h-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsluisquintero2774556-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300  bg-clip-text text-transparent">
              Seminars
            </h1>
            <h3 className="text-lg">inquisitive Benefits</h3>
          </div>
        </div>

        <div className="relative sm:col-span-2 sm:row-span-2 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="h-full w-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsairamdatoon15189553-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
              Workshops
            </h1>
            <h3 className="text-lg">Learning Peaks</h3>
          </div>
        </div>

        <div className="relative sm:col-span-2 sm:row-span-3 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="w-full h-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsmatheusbertelli2608517-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
              Conference
            </h1>
            <h3 className="text-lg">Innovative Ideas</h3>
          </div>
        </div>

        <div className="relative sm:col-span-1 sm:row-span-2 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="h-full w-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsluisquintero2774556-12@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
              Comps
            </h1>
            <h3 className="text-lg">Skill Advantages</h3>
          </div>
        </div>

        <div className="relative sm:col-span-1 sm:row-span-3 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="h-full w-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsmatheusbertelli2608517-11@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
              Meetings
            </h1>
            <h3 className="text-lg">Sharing Goals</h3>
          </div>
        </div>

        <div className="relative sm:col-span-2 sm:row-span-2 rounded-xl bg-whitesmoke-200 w-full overflow-hidden group">
          <img
            className="h-full w-full object-cover group-hover:scale-110 ease-in duration-500"
            alt=""
            src="/pexelsluisquintero2774556-11@2x.png"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden object-cover"
            alt=""
            src="/gradient@2x.png"
          />
          <div className="cursor-pointer absolute bottom-6 right-6 rounded-full w-11 h-11 overflow-hidden bg-[url('/public/button.svg')] bg-cover bg-no-repeat bg-[top] hover:scale-110 ease-in duration-200" />

          <div className="flex flex-col items-start absolute top-16 w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2 px-8">
            <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-rose-200 to-indigo-300 bg-clip-text text-transparent">
              Talks
            </h1>
            <h3 className="text-lg">Powerful Discussions</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeminarsContainer;
