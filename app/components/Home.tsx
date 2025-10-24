import React from "react";
import { TextScramble } from "./TextScramble";
import { ScrollDirectionContent } from "./ScrollDirection";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import HeroComponent from "./HeroComponent";
import ProductSuite from "./ProductSuite";
import TwoCirclesBar from "./TwoCirclesBar";

const HomeComponent = () => {
  return (
    <div className="relative h-screen w-11/12 mx-auto">
      <HomeHeader />
      <main className="relative overflow-hidden">
        <HeroComponent />

        <TwoCirclesBar />

        <ProductSuite />

        <TwoCirclesBar />

        <div className=" w-full">
          <div className="w-full flex flex-col items-start sm:grid justify-items-start sm:grid-cols-4 sm:grid-rows-4 sm:gap-x-4 sm:gap-y-8 gap-y-4">
            <p
              className="text-xs text-brand sm:justify-self-end"
              style={{ gridArea: "1 / 1" }}
            >
              &lt;h3&gt;
            </p>
            <div
              className="sm:mt-4 sm:pl-0 pl-4"
              style={{ gridArea: "1 / 2 / 2 / 5" }}
            >
              <p
                className="uppercase text-black dark:text-brand font-nb-architekt"
                style={{
                  fontSize: "clamp(14px, 5vw, 56px)",
                  lineHeight: "clamp(32px, 5vw, 56px)",
                }}
              >
                Drop into our dms.
              </p>
            </div>
            <p
              className="text-xs text-brand sm:justify-self-end"
              style={{ gridArea: "2 / 1" }}
            >
              &lt;p&gt;
            </p>
            <div
              className="sm:mt-4 sm:pl-0 pl-4 max-w-[400px]"
              style={{ gridArea: "2 / 2 / 3 / 4" }}
            >
              <p
                style={{ color: "#FF7A00" }}
                className="font-at-hauss-aero-semibold "
              >
                We look forward to hearing about what you&apos;re working
                towards - a world of web3.ai-enabled possibilities awaits.
                Ready?
              </p>
            </div>
            <p
              className="text-xs text-brand sm:justify-self-end"
              style={{ gridArea: "3 / 1" }}
            >
              &lt;a&gt;
            </p>
            <div
              className="sm:mt-4 sm:pl-0 pl-4 flex items-center"
              style={{ gridArea: "3 / 2 / 4 / 5" }}
            >
              <a href="/contact">
                <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand h-10 px-4 py-2">
                  LET&apos;S GO
                </button>
              </a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-brand/80 ml-8"
              >
                <path
                  d="M2 14H4V16H2V19H3V21H5V22H8V20H10V22H8V24H5V23H3V24H0V21H1V19H0V16H2V14Z"
                  fill="currentColor"
                ></path>
                <path d="M4 20V18H6V20H4Z" fill="currentColor"></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0H14V2H12V4H5V6H3V8H1V9H0V11H3V12H7V13H9V15H7V17H9V15H11V17H12V21H13V24H15V23H16V21H18V19H20V12H22V10H24V0ZM16 16H13V15H11V13H13V11H11V13H9V11H8V8H10V6H12V4H14V2H22V10H20V12H18V14H16V16ZM16 16V18H14V21H16V19H18V16H16ZM8 8H6V10H3V8H5V6H8V8ZM16 4V5H15V6H14V8H15V9H16V10H18V9H19V8H20V6H19V5H18V4H16Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <p
              className="text-xs text-brand sm:justify-self-end sm:mt-0 mt-16"
              style={{ gridArea: "4 / 1" }}
            >
              &lt;input&gt;
            </p>
            <div
              className="sm:mt-4 sm:pl-0 pl-4"
              style={{ gridArea: "4 / 2 / 5 / 5" }}
            >
              <p
                className="uppercase text-black dark:text-brand mb-4 font-nb-architekt"
                style={{
                  fontSize: "clamp(20px, 5vw, 32px)",
                  lineHeight: "clamp(20px, 5vw, 32px)",
                }}
              >
                &gt;Join the community_
              </p>
              <form className="flex flex-col md:flex-row w-full">
                <div className="space-y-2">
                  <div className="relative inline-block md:min-w-[300px] md:w-fit w-full">
                    <div className="absolute inset-y-0 text-sm left-0 pl-2 flex items-center pointer-events-none dark:text-brand/100 text-black/60">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <input
                      autoComplete="off"
                      // onChange={()=>console.log('onchange')}
                      className="flex h-10 rounded-md border dark:border-brand/70 border-brand/80 px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-brand/50 placeholder:text-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black bg-white w-full"
                      placeholder="Email address"
                      id=":r0:-form-item"
                      aria-describedby=":r0:-form-item-description"
                      aria-invalid="false"
                      value=""
                      name="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-1">
                    <input
                      autoComplete="off"
                      className="flex h-10 rounded-md border dark:border-brand/70 border-brand/80 px-3 py-2 undefined text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium dark:placeholder:text-brand/50 placeholder:text-black/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black bg-white w-full"
                      placeholder="Name"
                      id=":r1:-form-item"
                      aria-describedby=":r1:-form-item-description"
                      aria-invalid="false"
                      value=""
                      name="name"
                    />
                  </div>
                </div>
                <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand h-10 px-4 py-2 w-fit md:ml-4 mt-4 md:mt-0 ml-0">
                  <div style={{ position: "relative" }}>
                    <div
                      className="text-sm sm:text-base"
                      style={{ position: "absolute" }}
                    >
                      <TextScramble>
                        <div>SUBSCRIBE</div>
                      </TextScramble>
                    </div>
                    <div
                      className="text-sm sm:text-base"
                      style={{ visibility: "hidden" }}
                    >
                      <TextScramble>
                        <div>SUBSCRIBE</div>
                      </TextScramble>
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeComponent;
