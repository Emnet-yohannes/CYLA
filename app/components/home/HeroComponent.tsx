import React from "react";
import { ScrollDirectionContent } from "./ScrollDirection";
import { TextScramble } from "./TextScramble";

const HeroComponent = () => {
  return (
    <div
      className="flex flex-col w-full pb-24 lg:pb-10 justify-center relative"
      style={{ minHeight: "calc(-166px + 100vh)" }}
    >
      <div className="font-nb-architekt px-5 flex flex-col">
        <div className="w-max self-start">
          <ScrollDirectionContent>
            <div
              className=""
              style={{
                willChange: "transform",
                transform: "translate3d(0%, 0px, 0px)",
                transition: "transform 0.05s ease-out",
              }}
            >
              <div className="flex justify-center">
                <div
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 dark:text-white text-black text-center sm:text-left"
                  style={{
                    visibility: "visible",
                    fontSize: "clamp(10px, 8vw, 75px)",
                    lineHeight: "clamp(36px, 8vw, 100px)",
                  }}
                >
                  ADAPTIVE WEB3 INTELLIGENCE
                </div>
              </div>
            </div>
          </ScrollDirectionContent>
        </div>
        <div className="w-max self-end">
          <ScrollDirectionContent reverse>
            <div
              className=""
              style={{
                willChange: "transform",
                transform: "translate3d(0%, 0px, 0px)",
                transition: "transform 0.05s ease-out",
              }}
            >
              <div className="flex justify-center">
                <div
                  className="w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-brand text-center sm:text-right"
                  style={{
                    visibility: "visible",
                    fontSize: "clamp(10px, 8vw, 75px)",
                    lineHeight: "clamp(36px, 8vw, 100px)",
                  }}
                >
                  LEARNING THROUGH SOLANA
                </div>
              </div>
            </div>
          </ScrollDirectionContent>
        </div>

        <div className="flex justify-center md:justify-end ">
          <div className="flex flex-col font-light pt-8 w-auto sm:w-[480px] items-end md:items-end space-y-4 group px-4 sm:px-0">
            <a
              href="https://app.CYLA.ai"
              target="_blank"
              rel="noreferrer noopener"
            >
              <TextScramble>
                <button className=" font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand px-4 py-2 space-x-2 gap-x-6 h-[46px] !text-base">
                  <div style={{ position: "relative" }}>
                    <div style={{ position: "absolute" }}>
                      <div>LAUNCH </div>
                    </div>
                    <div style={{ visibility: "hidden" }}>
                      <div> CYLA </div>
                    </div>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-brand animate-pulse w-4 group-hover:!text-black mb-0.5"
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
                </button>
              </TextScramble>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center text-brand space-y-1">
          <p className="text-sm sm:text-base md:text-lg lowercase">
            View products
          </p>
          <svg
            width="24"
            height="41"
            viewBox="0 0 24 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 "
            style={{ rotate: "90deg" }}
          >
            <g clipPath="url(#clip0_202_3947)">
              <path
                d="M12.2593 11.9844H17.9001V17.6252H12.2593V11.9844Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.61768 6.34375H12.2585V11.9845H6.61768V6.34375Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.977051 0.703125H6.61786V6.34393H0.977051V0.703125Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.977051 34.5469H6.61786V40.1877H0.977051V34.5469Z"
                fill="currentColor"
              ></path>
              <path
                d="M6.61768 28.9062H12.2585V34.5471H6.61768V28.9062Z"
                fill="currentColor"
              ></path>
              <path
                d="M12.2593 23.2656H17.9001V28.9064H12.2593V23.2656Z"
                fill="currentColor"
              ></path>
              <path
                d="M17.8999 17.625H23.5407V23.2658H17.8999V17.625Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_202_3947">
                <rect
                  width="23.125"
                  height="40"
                  fill="currentColor"
                  transform="translate(0.875 0.5)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
