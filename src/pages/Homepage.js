import React from "react";

import ContainerHeroSection from "../components/ContainerHeroSection";
import SeminarsContainer from "../components/SeminarsContainer";
import ConnectForm from "../components/ConnectForm";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden text-center text-gray-100">
      <ContainerHeroSection />
      <h2 className="text-3xl md:text-6xl sm:text-4xl text-black font-semibold">
        Student platform for Technical Talk
      </h2>
      <SeminarsContainer />
      <ConnectForm />
      <Footer />
    </div>
  );
};

export default Homepage;
