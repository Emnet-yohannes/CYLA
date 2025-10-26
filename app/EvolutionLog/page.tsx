"use client";
import React from "react";
import Image from "next/image";
import EvolutionLog from "../components/EvolutionLog/EvolutionLog";
import HomeBanner from "../components/home/HomeBanner";
import HomeHeader from "../components/home/HomeHeader";
import Footer from "../components/home/Footer";
import DotBackground from "../components/DotBackground";
import BannerAutoScroll from "../components/EvolutionLog/BannerAutoScroll";

const Page = () => {
  const currentDate = new Date();
  const offerExpirationDate = new Date(
    currentDate.getTime() + 14 * 24 * 60 * 60 * 1000 // +14 days
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* ---------- Fixed Background ---------- */}

      {/* ---------- Dot Overlay ---------- */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <DotBackground bg={false} />
      </div>

      <div className="relative overflow-x-hidden  h-screen overflow-y-scroll scroll-smooth">
        {/* ----- Header (Sticky if desired) ----- */}
        <div>
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cyla_evolution_bg.png"
              alt="Cyla Evolution Background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute w-full top-0 z-30 bg-transparent">
            <HomeBanner offerExpirationDate={offerExpirationDate} />
            <div className="w-[97%] mx-auto ">
              <HomeHeader />
            </div>
          </div>

          {/* ----- Home Banner ----- */}

          {/* ----- Section 1: Banner Auto Scroll (Hero) ----- */}
          <section className="h-screen flex items-center justify-center">
            <BannerAutoScroll />
          </section>
        </div>

        {/* ----- Section 2: Evolution Log (scroll-snap starts) ----- */}
        <div className=" snap-y snap-proximity">
          <section className="snap-start h-screen flex items-center justify-center">
            <EvolutionLog />
          </section>
        </div>

        {/* ----- Footer ----- */}
        <Footer />
      </div>
    </div>
  );
};

export default Page;
