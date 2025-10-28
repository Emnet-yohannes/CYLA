"use client";

import React from "react";
import { TextScramble } from "./TextScramble";
import Link from "next/link";
import RealTimeClock from "./RealTimeClock";
import { useState } from "react";
import { useRouter } from 'next/navigation';
const HomeHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const handleGoHome = () => {
    router.push('/'); // Navigates to the home page
  };
  return (
    <header className="w-full">
      <div>
        <div className="flex justify-center items-center min-w-full  ">
          <div className="relative w-full overflow-hidden">
            <div className=" flex   py-4 w-full justify-between items-center z-10">
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
                onClick={handleGoHome}
                className="cursor-pointer font-nb-architekt text-base font-normal text-[#FF7A00]"
              >
                CYLA
                <div>{`//online`}</div>
              </div>
              <div className="flex space-x-4 sm:space-x-0 items-center ">
                <div className="space-x-6 sm:flex hidden items-center"></div>
                <div className="space-x-4">
                  <Link
                    href="/EvolutionLog"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hidden sm:inline-block group"
                  >
                    <TextScramble>
                      <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand h-10 px-4 py-2 space-x-2 min-h-[46px]">
                        <div style={{ position: "relative" }}>
                          <div
                            style={{ position: "absolute" }}
                            className="text-base"
                          >
                            <div>OPEN </div>
                          </div>
                          <div
                            className="text-base"
                            style={{ visibility: "hidden" }}
                          >
                            <div>EVOLUTION LOG </div>
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-brand animate-pulse w-4 group-hover:!text-black mb-0.5 flex-shrink-0"
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
                  </Link>
                  <Link
                    href="/LearningIndex"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group"
                  >
                    <TextScramble>
                      <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand h-10 py-2 space-x-2 sm:px-4 px-2 sm:min-h-[46px] min-h-[36px]">
                        <div style={{ position: "relative" }}>
                          <div
                            style={{ position: "absolute" }}
                            className="text-xs sm:text-base"
                          >
                            <div>OPEN </div>
                          </div>
                          <div
                            className="text-xs sm:text-base"
                            style={{ visibility: "hidden" }}
                          >
                            <div>LEARNING INDEX </div>
                          </div>
                        </div>
                        <svg
                          width="169"
                          height="124"
                          viewBox="0 0 169 124"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-brand animate-pulse w-4 group-hover:!text-black mb-0.5 flex-shrink-0"
                        >
                          <g clipPath="url(#clip0_4506_20800)">
                            <path
                              d="M67.9337 47.7109H54.9492V60.6837H67.9337V47.7109Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M114.592 47.7109H101.607V60.6837H114.592V47.7109Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M162.08 5.78015C158.259 5.78015 155.16 8.87619 155.16 12.6939C155.16 15.8861 157.324 18.569 160.267 19.3671C160.267 19.4689 160.264 19.568 160.264 19.6699C160.264 24.7073 160.264 29.7447 160.264 34.7822C160.264 35.4529 160.338 36.1519 159.582 36.5283C158.225 35.9934 156.979 35.1557 155.44 35.1076C154.112 35.0652 153.71 34.1256 153.557 32.9908C152.455 24.8714 148.855 17.9436 143.215 12.1024C135.845 4.46985 126.698 0.671971 116.147 0.137098C115.623 -0.0610035 115.079 0.0154069 114.541 0.0154069C94.7525 0.0125769 74.9641 0.0125769 55.1729 0.0154069C54.6376 0.0154069 54.0909 -0.0638336 53.5669 0.137098C51.5557 0.338029 49.5191 0.391799 47.542 0.765361C38.6533 2.44356 31.1527 6.51029 25.1363 13.4127C20.5588 18.6652 17.6639 24.6224 16.3213 31.3777C15.8823 33.5851 15.5735 35.518 12.5172 35.2689C11.4776 35.184 10.3559 36.0896 9.18604 36.5764C9.18604 31.5107 9.20021 26.5751 9.17755 21.6396C9.17472 20.8104 9.10107 19.9614 9.23703 19.2057C11.9195 18.2549 13.84 15.6965 13.84 12.6911C13.84 8.87336 10.7411 5.77732 6.91998 5.77732C3.09884 5.77732 0 8.87619 0 12.6939C0 16.0022 2.32555 18.7643 5.43005 19.4463C5.45554 19.8821 5.38756 20.3264 5.38756 20.7594C5.40172 36.316 5.39606 51.8755 5.40456 67.4321C5.40456 68.1707 5.28275 68.9207 5.52919 69.648C6.00506 74.3543 10.0245 77.8352 14.4716 78.138C15.3951 78.2003 15.6868 78.339 15.8709 79.4681C16.5309 83.4811 17.545 87.4516 19.4258 91.0938C22.5473 97.1303 26.918 102.139 32.5038 106.019C37.4268 109.441 42.922 111.391 48.8648 112.322C51.4339 112.724 53.9889 112.619 56.6175 113.745C64.8008 117.249 73.2787 120.068 81.5754 123.319C83.9547 124.25 86.082 124.188 88.4302 123.384C97.129 120.416 105.482 116.567 114.099 113.392C114.969 113.072 115.77 112.639 116.705 112.642C121.45 112.656 126.041 111.572 130.256 109.63C143.099 103.716 151.217 93.9465 153.588 79.7653C153.704 79.0776 153.71 78.2852 154.911 78.1069C160.627 77.2607 164.029 72.8402 164.015 66.733C163.981 51.1708 164.085 35.6085 164.1 20.0463C164.1 19.7746 164.108 19.5284 164.136 19.2991C166.955 18.4247 169 15.7984 169 12.6939C169 8.87619 165.901 5.78015 162.08 5.78015ZM4.46697 15.1447V10.2403H9.37583V15.1447H4.46697ZM109.309 87.1233C99.5169 87.8988 89.685 87.3044 79.8702 87.378C78.2811 87.3893 77.0602 87.8025 75.8337 88.793C71.6274 92.1975 67.3417 95.5058 63.073 98.8311C62.6113 99.1905 62.2289 99.7112 61.3366 99.8046C61.3366 96.0294 61.3055 92.3758 61.3564 88.7251C61.3706 87.6639 61.1327 87.2365 59.9486 87.0837C44.3213 85.0659 32.7361 72.2884 32.1497 56.5167C31.5946 41.5799 42.398 27.9137 57.3257 24.6932C59.5153 24.2205 61.7417 24.0621 63.9822 24.0621C77.8619 24.0677 91.7443 23.9941 105.624 24.0819C121.523 24.1809 134.074 34.7171 137.108 50.3359C140.496 67.7858 127.044 85.714 109.309 87.1205V87.1233ZM164.536 15.1447H159.627V10.2403H164.536V15.1447Z"
                              fill="currentColor"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_4506_20800">
                              <rect
                                width="169"
                                height="124"
                                fill="white"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </TextScramble>
                  </Link>
                </div>
                <div className="flex">
                  {/* Mobile Drawer button */}
                  <div className="sm:hidden z-50 drawer-end">
                    <button
                      aria-label="Open navigation drawer"
                      className="drawer-button"
                      onClick={() => setIsDrawerOpen(true)}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cursor-pointer text-brand"
                      >
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Drawer Side: Conditioned on isDrawerOpen */}
          {isDrawerOpen && (
            <div className="fixed inset-0 z-50 bg-black/30">
              <div className="flex flex-col py-4 pb-4 px-4 w-full sm:w-0 sm:hidden h-full shadow bg-white dark:bg-black text-primary border-black dark:border-neutral-400 fixed top-0 overflow-scroll">
                <div className="flex justify-between items-center w-full mb-6">
                  <div>
                    <div>CYLA</div>
                  </div>
                  <div className="flex space-x-4 dark:text-white text-black">
                    <button
                      aria-label="Close navigation drawer"
                      className="focus:outline-none"
                      onClick={() => setIsDrawerOpen(false)}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="fill-current"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        className="w-6 h-6 text-brand"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <hr className="border-brand/80 mb-4" />
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col gap-3 pb-8">
                    <Link href="/">
                      <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt !text-black font-normal bg-brand rounded-md">
                        <p className="text-left text-lg w-full pl-3">
                          HOME
                        </p>
                      </div>
                    </Link>
                    <div data-orientation="vertical">
                      <div
                        data-orientation="vertical"
                        className="border-b border-none !font-nb-architekt hover:bg-brand rounded-md"
                      >
                        <h3
                          data-orientation="vertical"
                          data-state="closed"
                          className="flex"
                        >
                          <button
                            type="button"
                            className="flex flex-1 items-center justify-between transition-all p-0 w-full !no-underline"
                            style={{ cursor: "not-allowed" }}
                            disabled
                          >
                            <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                              <p className="text-left text-lg w-full pl-3">
                                <TextScramble hoveringColor="#FF7A00">
                                  HOMES
                                </TextScramble>
                              </p>
                            </div>
                            <div className="flex items-center pr-2">
                              <svg
                                width="24"
                                height="41"
                                viewBox="0 0 24 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="sm:w-fit w-4 h-4 sm:h-fit rotate-90 transition text-brand"
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
                          </button>
                        </h3>
                      </div>
                    </div>
                    <a href="/LearningIndex">
                      <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                        <p className="text-left text-lg w-full pl-3">
                            <TextScramble hoveringColor="#FF7A00">
                            <div>Learning Index</div>
                          </TextScramble>
                        </p>
                      </div>
                    </a>
                    <a href="/EvolutionLog">
                      <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                        <p className="text-left text-lg w-full pl-3">
                          <TextScramble hoveringColor="#FF7A00">
                            <div>Evolution Log</div>
                          </TextScramble>
                        </p>
                      </div>
                    </a>
                    <a href="/DOCS">
                      <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                        <p className="text-left text-lg w-full pl-3">
                          <TextScramble hoveringColor="#FF7A00">
                            <div>DOCS</div>
                          </TextScramble>
                        </p>
                      </div>
                    </a>
                    <a
                  href="https://x.com/ProjectCyla"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit flex items-center group text-brand"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 group-hover:text-brand transition"
                  >
                    <path
                      d="M3.04428 3L10.0569 12.3765L3 20H4.58822L10.7665 13.3255L15.7584 20H21.1632L13.756 10.0961L20.3245 3H18.7363L13.0464 9.14707L8.44906 3H3.04428ZM5.37988 4.16989H7.86285L18.8272 18.8299H16.3442L5.37988 4.16989Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="w-full fixed bottom-[1.83rem] px-4 z-10">
            <div className="border border-brand/80 hidden sm:flex items-center justify-between px-4 py-2 dark:bg-black bg-white !rounded-md">
              <div className="h-[32px]"></div>
              <div className="flex space-x-6 sm:space-x-14 !text-sm sm:!text-base">
                <div className="cursor-pointer" data-state="closed">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{ position: "absolute" }}
                      className="text-black dark:text-brand"
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>HOME</div>
                      </TextScramble>
                    </div>
                    <div
                      className="text-black dark:text-brand"
                      style={{ visibility: "hidden" }}
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>HOME</div>
                      </TextScramble>
                    </div>
                  </div>
                </div>
                <a href="/LearningIndex">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{ position: "absolute" }}
                      className="text-black dark:text-brand"
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>Learning Index</div>
                      </TextScramble>
                    </div>
                    <div
                      className="text-black dark:text-brand"
                      style={{ visibility: "hidden" }}
                    >
                      Learning Index
                    </div>
                  </div>
                </a>
                <a href="/EvolutionLog">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{ position: "absolute" }}
                      className="text-black dark:text-brand"
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>Evolution Log</div>
                      </TextScramble>
                    </div>
                    <div
                      className="text-black dark:text-brand"
                      style={{ visibility: "hidden" }}
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>Evolution Log</div>
                      </TextScramble>
                    </div>
                  </div>
                </a>
                <a href="/DOCS">
                  <div style={{ position: "relative" }}>
                    <div
                      style={{ position: "absolute" }}
                      className="text-black dark:text-brand"
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>DOCS</div>
                      </TextScramble>
                    </div>
                    <div
                      className="text-black dark:text-brand"
                      style={{ visibility: "hidden" }}
                    >
                      <TextScramble hoveringColor="#FF7A00">
                        <div>DOCS</div>
                      </TextScramble>
                    </div>
                  </div>
                </a>
                <a
                  href="https://x.com/ProjectCyla"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit flex items-center text-brand group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mr-2 group-hover:text-brand transition"
                  >
                    <path
                      d="M3.04428 3L10.0569 12.3765L3 20H4.58822L10.7665 13.3255L15.7584 20H21.1632L13.756 10.0961L20.3245 3H18.7363L13.0464 9.14707L8.44906 3H3.04428ZM5.37988 4.16989H7.86285L18.8272 18.8299H16.3442L5.37988 4.16989Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col  md:flex-row justify-between items-center py-2 px-4 mr-8">
          <div className="Home_welcome__Qxzze text-sm">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute" }} className="min-w-[120px]">
                <TextScramble hoveringColor="#FF7A00">
                  <div>[ connected to devnet ] </div>
                </TextScramble>{" "}
              </div>
              <div className="min-w-[120px]" style={{ visibility: "hidden" }}>
                <TextScramble hoveringColor="#FF7A00">
                  <div>[ connected to devnet ]</div>
                </TextScramble>
              </div>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-y-5">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute" }} className="min-w-[100px]">
                <TextScramble hoveringColor="#FF7A00">
                  <div>{`// time />`}</div>
                </TextScramble>
              </div>
            </div>
            <RealTimeClock />
          </div>
          <div className="Home_welcome__Qxzze text-sm !hidden sm:!inline-block">
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute" }} className="min-w-[120px]">
                <TextScramble hoveringColor="#FF7A00">
                  <div>[ LEARNING SOLANA - V1.0-BETA ]</div>
                </TextScramble>
              </div>
              <div className="min-w-[120px]" style={{ visibility: "hidden" }}>
                <TextScramble>
                  <div>[ LEARNING SOLANA - V1.0-BETA ]</div>
                </TextScramble>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
