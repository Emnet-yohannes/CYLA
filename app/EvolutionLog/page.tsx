import React from "react";
import EvolutionLog from "../components/EvolutionLog/EvolutionLog";
import HomeBanner from "../components/home/HomeBanner";
import HomeHeader from "../components/home/HomeHeader";
import LearningIndex from "../components/LearningIndex/LearningIndex";
import Footer from "../components/home/Footer";
import DotBackground from "../components/DotBackground";

const page = () => {
  const currentDate = new Date();
  const offerExpirationDate = new Date(
    currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );
  return (
    <div
      className="bg-cover bg-center min-h-screen relative !z-20" // add min-h-screen
      style={{
        backgroundImage: "url('/images/cyla_evolution_bg.png')",
      }}
    >
      <DotBackground />

      <div className="relative z-10">
        <HomeBanner offerExpirationDate={offerExpirationDate} />
        <div className="w-[97%] mx-auto">
          <HomeHeader />
          <EvolutionLog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
