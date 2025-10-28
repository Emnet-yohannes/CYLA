import React from "react";
import { TextScramble } from "./TextScramble";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import HeroComponent from "./HeroComponent";
import ProductSuite from "./ProductSuite";
import TwoCirclesBar from "./TwoCirclesBar";

const HomeComponent = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/*  Hero section with video background */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/videos/home_bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Overlay to improve readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* 🌟 Foreground content */}
        <div className="relative z-10 w-11/12  mx-auto">
          <HomeHeader />
          <HeroComponent />
        </div>
      </section>

      {/* 💡 Rest of page scrolls normally */}
      <main className="relative z-10 w-11/12 mx-auto ">
        <TwoCirclesBar />
        <ProductSuite />
        <div className="mt-24!">
          <TwoCirclesBar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomeComponent;
