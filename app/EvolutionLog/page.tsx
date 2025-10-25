"use client";
import React from "react";
import Image from "next/image";
import EvolutionLog from "../components/EvolutionLog/EvolutionLog";
import HomeBanner from "../components/home/HomeBanner";
import HomeHeader from "../components/home/HomeHeader";
import LearningIndex from "../components/LearningIndex/LearningIndex";
import Footer from "../components/home/Footer";
import DotBackground from "../components/DotBackground";

const Page = () => {
  const currentDate = new Date();
  const offerExpirationDate = new Date(
    currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image (sticky + covers screen) */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/cyla_evolution_bg.png"
          alt="Cyla Evolution Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dot background overlay */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <DotBackground bg={false} />
      </div>

      {/* Content */}
      <div className="relative z-20 overflow-x-hidden">
        <HomeBanner offerExpirationDate={offerExpirationDate} />
        <div className="w-[97%] mx-auto">
          <HomeHeader />
          <div className="!mt-20 !md:mt-0">

          <EvolutionLog />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
