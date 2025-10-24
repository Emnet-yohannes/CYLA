"use client";

import { useEffect, useState } from "react";

type Props = {
  offerExpirationDate?: Date
}

const HomeBanner = (props: Props) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const offerExpirationDate = props.offerExpirationDate || new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);;

      const timeDifference = offerExpirationDate.getTime() - now.getTime();
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0049FF] relative z-10 px-4 flex flex-col md:flex-row items-center gap-4 justify-between md:py-2 py-4">
      <img
        alt="republic logo"
        loading="lazy"
        width="100"
        height="28"
        decoding="async"
        data-nimg="1"
        className="object-contain h-7!"
        src="/republic_logo.png"
      />
      <div className="flex flex-col items-center md:gap-0 gap-2">
        <p className="md:text-sm text-xs font-at-hauss-aero text-center max-w-sm md:max-w-md lg:max-w-full">
          $WAYE pre-sale: 20% below TGE +25% more tokens. Republic Verified
          Exclusive for Reg D/S. Terms apply.
        </p>
        <span className="inline text-xs md:text-sm font-at-hauss-aero text-white">
          {time}
        </span>
      </div>
      <button className="font-nb-architekt inline-flex items-center justify-center text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border text-white hover:text-black! dark:text-brand h-9 rounded-md px-3  border-white/50 hover:border-white hover:bg-[#d1d1d1]! group">
        <p className="text-xs text-white group-hover:text-black transition-colors duration-300">View Offer</p>
      </button>
    </div>
  );
};

export default HomeBanner;
