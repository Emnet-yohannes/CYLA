import React from "react";
import LearningIndex from "../components/LearningIndex/LearningIndex";
import HomeHeader from "../components/home/HomeHeader";
import HomeBanner from "../components/home/HomeBanner";
import Footer from "../components/home/Footer";

const page = () => {
  const currentDate = new Date();
  const offerExpirationDate = new Date(
    currentDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );

  return (
    <div>
      <div className="relative z-10 ">
        <HomeBanner offerExpirationDate={offerExpirationDate} />
        <div className="w-[97%]  mx-auto ">
          <HomeHeader />
          <LearningIndex />
        <Footer />
        </div>

      </div>
    </div>
  );
};

export default page;
