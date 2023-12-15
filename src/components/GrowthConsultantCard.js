import { FiArrowRight } from "react-icons/fi";

const GrowthConsultantCard = () => {
  return (
    <div className="bg-[#EEEEEE] rounded-2xl md:col-span-1 flex flex-col items-start justify-between overflow-hidden">
      <div className="p-6">
        <h2 className="text-3xl font-bold text-left bg-gradient-to-r from-blue-400 via-rose-300 to-indigo-300 to-60% bg-clip-text text-transparent">
          Book a Session
        </h2>
        <p className="text-2xl text-black font-semibold text-left py-5">
          Book a call with one of our Growth Consultants, no strings attached.
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex items-start py-8 px-6">
          <img className="w-16 object-cover" src="/ellipse-1@2x.png" alt="" />
          <img
            className="w-16 object-cover -ml-3"
            src="/ellipse-2@2x.png"
            alt=""
          />
          <img
            className="w-16 object-cover -ml-3"
            src="/ellipse-3@2x.png"
            alt=""
          />
          <img
            className="w-16 object-cover -ml-3"
            src="/ellipse-4@2x.png"
            alt=""
          />
          <img
            className="w-16 object-cover -ml-3"
            src="/ellipse-5@2x.png"
            alt=""
          />
        </div>
        <div className="bg-black w-full flex justify-center items-center">
          <p className="text-md font-semibold py-3">Schedule a Session</p>
          <FiArrowRight className="mt-[3px] ml-2" size={20} />
        </div>
      </div>
    </div>
  );
};

export default GrowthConsultantCard;
