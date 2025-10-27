import React from "react";
import LearningIndex from "../components/LearningIndex/LearningIndex";
import HomeHeader from "../components/home/HomeHeader";
import HomeBanner from "../components/home/HomeBanner";
import Footer from "../components/home/Footer";
import DotBackground from "../components/DotBackground";
import CalendarGrid from "../components/LearningIndex/CalendarGrid";

const page = () => {
  const currentDate = new Date();
  const offerExpirationDate = new Date(
    currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );

  return (
    <div>
              <DotBackground />
        
      <div className="relative z-10 overflow-x-hidden">
        {/* <HomeBanner offerExpirationDate={offerExpirationDate} /> */}
        <div className="w-[97%]  mx-auto ">
          <HomeHeader />
          <LearningIndex />
        {/* <Footer /> */}
        <div className=" w-full ">
          <div
              className="text-center uppercase text-black dark:text-brand mt-4 mb-8! font-nb-architekt"
              style={{
                  fontSize: "clamp(24px, 5vw, 56px)",
                lineHeight: "clamp(32px, 5vw, 56px)",
                wordBreak: "break-word",
              }}
            >
              DAILY RECAP
            </div>
        </div>
        <CalendarGrid />
        </div>

      </div>
    </div>
  );
};

export default page;
