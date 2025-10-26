import React from "react";

const BannerAutoScroll = () => {
  return (
    <div>
      <div className="absolute bottom-0 sm:bottom-24! left-0 right-0 overflow-hidden py-4 space-y-8">
        <p
          className="text-white max-w-[550px] text-center px-4 font-nb-architekt mx-auto"
          style={{
            fontSize:
              "clamp(16px, 2vw, 18px); line-height: clamp(16px, 2vw, 18px);",
          }}
        >
          Access elite-level predictions, win more consistently, and join the
          future of betting
        </p>
        <div className="flex whitespace-nowrap space-x-4">
          <div className="animate-ticker flex gap-4">
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The casual</p>
              <p className="text-lg sm:text-2xl">bettor</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The crypto</p>
              <p className="text-lg sm:text-2xl">enthusiast</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The trader</p>
              <p className="text-lg sm:text-2xl">extraordinaire</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The prediction</p>
              <p className="text-lg sm:text-2xl">powerhouse</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The social</p>
              <p className="text-lg sm:text-2xl">expert</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The analytics</p>
              <p className="text-lg sm:text-2xl">guru</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The price</p>
              <p className="text-lg sm:text-2xl">oracle</p>
            </div>
          </div>
          <div className="animate-ticker flex gap-4">
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The casual</p>
              <p className="text-lg sm:text-2xl">bettor</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The crypto</p>
              <p className="text-lg sm:text-2xl">enthusiast</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The trader</p>
              <p className="text-lg sm:text-2xl">extraordinaire</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The prediction</p>
              <p className="text-lg sm:text-2xl">powerhouse</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The social</p>
              <p className="text-lg sm:text-2xl">expert</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The analytics</p>
              <p className="text-lg sm:text-2xl">guru</p>
            </div>
            <div className="space-y-1 flex-shrink-0 min-w-[250px] flex-col flex items-center justify-center border-primary text-primary border backdrop-blur-sm px-6 py-2 font-nb-architekt">
              <p className="text-xs">The price</p>
              <p className="text-lg sm:text-2xl">oracle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAutoScroll;
