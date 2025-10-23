import React from "react";
import Image from "next/image";
import { TextScramble } from "./TextScramble";
import { ScrollDirectionContent } from "./ScrollDirection";
import RealTimeClock from "./RealTimeClock";

const Home = () => {
  return (
    <div>
      <div>
        <div className="relative h-screen ">
          <div>
            <div className="flex justify-center items-center min-w-full">
              <div className="container flex px-4 py-4 w-full justify-between items-center z-10">
                <div
                  style={{
                    // color: "#FF7A00",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  className="font-nb-architekt text-base font-normal text-[#FF7A00]"
                >
                  CYLA
                  <div>//online</div>
                </div>
                <div className="flex space-x-4 sm:space-x-0 items-center">
                  <div className="space-x-6 sm:flex hidden items-center"></div>
                  <div className="space-x-4">
                    <a
                      href="https://app.CYLA.ai"
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
                              <div>LAUNCH </div>
                            </div>
                            <div
                              className="text-base"
                              style={{ visibility: "hidden" }}
                            >
                              <div>CYLA   </div>
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
                            <path
                              d="M4 20V18H6V20H4Z"
                              fill="currentColor"
                            ></path>
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
                    <a
                      href="https://app.CYLA.ai/CYLAger"
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
                              <div>TALK </div>
                            </div>
                            <div
                              className="text-xs sm:text-base"
                              style={{ visibility: "hidden" }}
                            >
                              <div> TO CYLA   </div>
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
                    </a>
                  </div>
                  <div className="flex">
                    <div className="drawer sm:hidden z-50 drawer-end">
                      <input
                        id="nav-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                      />
                      <div className="drawer-content">
                        <label htmlFor="nav-drawer" className="drawer-button">
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
                        </label>
                      </div>
                      <div className="drawer-side">
                        <label
                          htmlFor="nav-drawer"
                          className="drawer-overlay"
                        ></label>
                        <ul className="flex flex-col py-4 pb-4 px-4 w-full sm:w-0 sm:hidden h-full shadow bg-white dark:bg-black text-primary border-black dark:border-neutral-400 fixed top-0 overflow-scroll">
                          <div className="flex justify-between items-center w-full mb-6">
                            <div>
                              <div>CYLA</div>
                            </div>
                            <div className="flex space-x-4 dark:text-white text-black">
                              <div>
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
                              </div>
                            </div>
                          </div>
                          <hr className="border-brand/80 mb-4" />
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-3 pb-8">
                              <a href="/">
                                <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt !text-black font-normal bg-brand rounded-md">
                                  <p className="text-left text-lg w-full pl-3">
                                    HOME
                                  </p>
                                </div>
                              </a>
                              <div data-orientation="vertical">
                                <div
                                  data-state="closed"
                                  data-orientation="vertical"
                                  className="border-b border-none !font-nb-architekt"
                                >
                                  <h3
                                    data-orientation="vertical"
                                    data-state="closed"
                                    className="flex"
                                  >
                                    <button
                                      type="button"
                                      aria-controls="radix-:Rkuv66fl4q:"
                                      aria-expanded="false"
                                      data-state="closed"
                                      data-orientation="vertical"
                                      id="radix-:R4uv66fl4q:"
                                      className="flex flex-1 items-center justify-between transition-all [&amp;[data-state=open]&gt;div&gt;svg]:rotate-270 p-0 w-full !no-underline"
                                      data-radix-collection-item=""
                                    >
                                      <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                                        <p className="text-left text-lg w-full pl-3">
                                          <TextScramble hoveringColor="#FF7A00">
                                            PRODUCTS
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
                                  <div className="flex flex-col gap-3">
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                    <div
                                      data-state="closed"
                                      id="radix-:Rkuv66fl4q:"
                                      role="region"
                                      aria-labelledby="radix-:R4uv66fl4q:"
                                      data-orientation="vertical"
                                      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                      style={{
                                        ["--radix-accordion-content-height" as any]:
                                          "var(--radix-collapsible-content-height)",
                                        ["--radix-accordion-content-width" as any]:
                                          "var(--radix-collapsible-content-width)",
                                      }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                              <a href="/about">
                                <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                                  <p className="text-left text-lg w-full pl-3">
                                    ABOUT
                                  </p>
                                </div>
                              </a>
                              <a href="/blog">
                                <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                                  <p className="text-left text-lg w-full pl-3">
                                    BLOG
                                  </p>
                                </div>
                              </a>
                              <a href="/faq">
                                <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                                  <p className="text-left text-lg w-full pl-3">
                                    FAQ
                                  </p>
                                </div>
                              </a>
                              <a href="/contact">
                                <div className="p-2 py-3 w-full dark:text-brand text-black !font-nb-architekt">
                                  <p className="text-left text-lg w-full pl-3">
                                    CONTACT
                                  </p>
                                </div>
                              </a>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container fixed bottom-[1.83rem] px-4 z-10">
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
                            <div>PRODUCT</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-black dark:text-brand"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>PRODUCT</div>
                          </TextScramble>
                        </div>
                      </div>
                    </div>
                    <a href="/about">
                      <div style={{ position: "relative" }}>
                        <div
                          style={{ position: "absolute" }}
                          className="text-black dark:text-brand"
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>ABOUT</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-black dark:text-brand"
                          style={{ visibility: "hidden" }}
                        >
                          ABOUT
                        </div>
                      </div>
                    </a>
                    <a href="/blog">
                      <div style={{ position: "relative" }}>
                        <div
                          style={{ position: "absolute" }}
                          className="text-black dark:text-brand"
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>BLOG</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-black dark:text-brand"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>BLOG</div>
                          </TextScramble>
                        </div>
                      </div>
                    </a>
                    <a href="/faq">
                      <div style={{ position: "relative" }}>
                        <div
                          style={{ position: "absolute" }}
                          className="text-black dark:text-brand"
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>FAQ</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-black dark:text-brand"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>F "</div>
                          </TextScramble>
                        </div>
                      </div>
                    </a>
                    <a href="/contact">
                      <div style={{ position: "relative" }}>
                        <div
                          style={{ position: "absolute" }}
                          className="text-black dark:text-brand"
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>CONTACT</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-black dark:text-brand"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>CONTACT</div>
                          </TextScramble>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container Home_header__4gLs1 ">
            <div id="home"></div>
            <div className="Home_headerTop__94npW flex flex-col  md:flex-row justify-between items-center py-2 px-4">
              <div className="Home_welcome__Qxzze text-sm">
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute" }}
                    className="min-w-[120px]"
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      <div>[ connected to devnet ] </div>
                    </TextScramble>{" "}
                  </div>
                  <div
                    className="min-w-[120px]"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      <div>[ connected to devnet ]</div>
                    </TextScramble>
                  </div>
                </div>
              </div>
              <div className="Home_time__8OFG_ text-sm">
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute" }}
                    className="min-w-[100px]"
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      // time /&gt;
                    </TextScramble>
                  </div>
                  <div
                    className="min-w-[100px]"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      // time /&gt;
                    </TextScramble>
                  </div>
                </div>
                <div style={{ position: "relative", width: "20px" }}>
                  <RealTimeClock />
                  <div style={{ visibility: "hidden" }}>
                    <RealTimeClock />
                  </div>
                </div>
              </div>
              <div className="Home_welcome__Qxzze text-sm !hidden sm:!inline-block">
                <div style={{ position: "relative" }}>
                  <div
                    style={{ position: "absolute" }}
                    className="min-w-[120px]"
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      <div>[ learning solana — v1.0-bet ] </div>
                    </TextScramble>
                  </div>
                  <div
                    className="min-w-[120px]"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble>
                      <div>[ learning solana — v1.0-bet ] </div>
                    </TextScramble>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="relative overflow-hidden">
            <div
  className="container flex flex-col w-full pb-24 lg:pb-10 justify-center relative"
  style={{ minHeight: "calc(-166px + 100vh)" }}
>
  <div className="w-full flex flex-col justify-between">
    <div className="font-nb-architekt">
      <ScrollDirectionContent>
        <div
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
                fontSize: "clamp(10px, 8vw, 55px)",
                lineHeight: "clamp(36px, 8vw, 100px)",
              }}
            >
              ADAPTIVE WEB3 INTELLIGENCE
            </div>
          </div>
        </div>
      </ScrollDirectionContent>

      <ScrollDirectionContent reverse>
        <div
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
                fontSize: "clamp(10px, 8vw, 55px)",
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
        <a href="https://app.CYLA.ai" target="_blank" rel="noreferrer noopener">
          <TextScramble>
            <button className=" font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-brand/80 text-black bg-background hover:!bg-brand hover:!text-black dark:text-brand px-4 py-2 space-x-2 h-[46px] !text-base">
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute" }}>
                  <div>LAUNCH </div>
                </div>
                <div style={{ visibility: "hidden" }}>
                  <div> CYLA   </div>
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
      <p className="text-sm sm:text-base md:text-lg lowercase">View products</p>
      <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-3 h-3 sm:w-4 sm:h-4"
>
  <path
    d="M12 16L6 10H18L12 16Z"
    fill="currentColor"
  />
</svg>

    </div>
  </div>
</div>

<div className="relative container z-1">
  <div className="w-full my-10 sm:my-20 md:!mt-0">
    <div className="border-b border-dashed border-brand/30">
      <ScrollDirectionContent>
        <div
          className="absolute -top-3 left-[20%] sm:left-[10%]"
          style={{
            willChange: "transform",
            transform: "translate3d(0%, 0px, 0px)",
            transition: "transform 0.05s ease-out",
          }}
        >
          {/* first svg */}
        </div>
        <div
          className="absolute -top-3 left-[60%] sm:left-[50%]"
          style={{
            willChange: "transform",
            transform: "translate3d(0%, 0px, 0px)",
            transition: "transform 0.05s ease-out",
          }}
        >
          {/* second svg */}
        </div>
      </ScrollDirectionContent>
    </div>
  </div>
</div>

            <div className="relative container z-1">
              <div className="w-full my-20 md:!mt-0 mt-10">
                <div className="border-b border-dashed border-brand/30">
                  <ScrollDirectionContent>
                    <div
                      className="absolute -top-3 left-[10%]"
                      style={{
                        willChange: "transform",
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "transform 0.05s ease-out",
                      }}
                    >
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-brand"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87904 0.000871377H10.3084C10.712 0.000871377 11.039 0.320667 11.039 0.715401V3.88983C11.039 4.28456 10.712 4.60436 10.3084 4.60436H5.87904C5.57253 4.60436 5.31234 4.70892 5.0985 4.91892C4.8998 5.11324 4.8 5.36071 4.8 5.66047V9.84656C4.8 10.2413 4.47299 10.5611 4.06935 10.5611H0.730648C0.327009 10.5611 0 10.2413 0 9.84656V5.66047C0 5.36071 0.106924 5.11411 0.321663 4.91892C0.536402 4.70892 0.796584 4.60436 1.10221 4.60436H3.72007C4.02658 4.60436 4.27874 4.50676 4.47834 4.31245C4.69308 4.10244 4.8 3.848 4.8 3.54912V1.05611C4.8 0.756355 4.8998 0.509756 5.0985 0.314567C5.31324 0.104565 5.57342 0 5.87904 0V0.000871377ZM0.730648 12.4398C0.327009 12.4398 0 12.7596 0 13.1543V17.3404C0 17.6402 0.106924 17.8946 0.321663 18.1037C0.536402 18.298 0.796584 18.3956 1.10221 18.3956H3.72007C4.02658 18.3956 4.27874 18.5002 4.47834 18.7102C4.69308 18.9045 4.8 19.152 4.8 19.4518V21.9448C4.8 22.2445 4.8998 22.499 5.0985 22.7081C5.31324 22.9024 5.57342 23 5.87904 23H10.3084C10.712 23 11.039 22.6802 11.039 22.2855V19.111C11.039 18.7163 10.712 18.3965 10.3084 18.3965H5.87904C5.57253 18.3965 5.31234 18.2989 5.0985 18.1046C4.8998 17.8946 4.8 17.6402 4.8 17.3413V13.1552C4.8 12.7604 4.47299 12.4407 4.06935 12.4407H0.730648V12.4398ZM19.9306 12.4398C19.527 12.4398 19.2 12.7596 19.2 13.1543V17.3404C19.2 17.6402 19.0931 17.8946 18.8783 18.1037C18.6796 18.298 18.4266 18.3956 18.1201 18.3956H13.6907C13.2871 18.3956 12.9601 18.7154 12.9601 19.1102V22.2846C12.9601 22.6793 13.2871 22.9991 13.6907 22.9991H18.1201C18.4266 22.9991 18.6787 22.9015 18.8783 22.7072C19.0931 22.4972 19.2 22.2428 19.2 21.9439V19.4509C19.2 19.1511 19.2998 18.9045 19.4985 18.7093C19.7132 18.4993 19.9734 18.3948 20.279 18.3948H22.9201C23.2266 18.3948 23.4787 18.2972 23.6783 18.1029C23.8931 17.8929 24 17.6384 24 17.3395V13.1534C24 12.7587 23.673 12.4389 23.2694 12.4389H19.9306V12.4398ZM23.2694 10.5611C23.673 10.5611 24 10.2413 24 9.84656V5.66047C24 5.36071 23.8931 5.11411 23.6783 4.91892C23.4796 4.70892 23.2266 4.60436 22.9201 4.60436H20.279C19.9725 4.60436 19.7123 4.50676 19.4985 4.31245C19.2998 4.10244 19.2 3.848 19.2 3.54912V1.05611C19.2 0.756355 19.0931 0.509756 18.8783 0.314567C18.6796 0.104565 18.4266 0 18.1201 0H13.6907C13.2871 0 12.9601 0.319795 12.9601 0.714529V3.88896C12.9601 4.28369 13.2871 4.60349 13.6907 4.60349H18.1201C18.4266 4.60349 18.6787 4.70805 18.8783 4.91805C19.0931 5.11237 19.2 5.35984 19.2 5.6596V9.84569C19.2 10.2404 19.527 10.5602 19.9306 10.5602H23.2694V10.5611Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div
                      className="absolute -top-3 left-[50%]"
                      style={{
                        willChange: "transform",
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "transform 0.05s ease-out",
                      }}
                    >
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-brand"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87904 0.000871377H10.3084C10.712 0.000871377 11.039 0.320667 11.039 0.715401V3.88983C11.039 4.28456 10.712 4.60436 10.3084 4.60436H5.87904C5.57253 4.60436 5.31234 4.70892 5.0985 4.91892C4.8998 5.11324 4.8 5.36071 4.8 5.66047V9.84656C4.8 10.2413 4.47299 10.5611 4.06935 10.5611H0.730648C0.327009 10.5611 0 10.2413 0 9.84656V5.66047C0 5.36071 0.106924 5.11411 0.321663 4.91892C0.536402 4.70892 0.796584 4.60436 1.10221 4.60436H3.72007C4.02658 4.60436 4.27874 4.50676 4.47834 4.31245C4.69308 4.10244 4.8 3.848 4.8 3.54912V1.05611C4.8 0.756355 4.8998 0.509756 5.0985 0.314567C5.31324 0.104565 5.57342 0 5.87904 0V0.000871377ZM0.730648 12.4398C0.327009 12.4398 0 12.7596 0 13.1543V17.3404C0 17.6402 0.106924 17.8946 0.321663 18.1037C0.536402 18.298 0.796584 18.3956 1.10221 18.3956H3.72007C4.02658 18.3956 4.27874 18.5002 4.47834 18.7102C4.69308 18.9045 4.8 19.152 4.8 19.4518V21.9448C4.8 22.2445 4.8998 22.499 5.0985 22.7081C5.31324 22.9024 5.57342 23 5.87904 23H10.3084C10.712 23 11.039 22.6802 11.039 22.2855V19.111C11.039 18.7163 10.712 18.3965 10.3084 18.3965H5.87904C5.57253 18.3965 5.31234 18.2989 5.0985 18.1046C4.8998 17.8946 4.8 17.6402 4.8 17.3413V13.1552C4.8 12.7604 4.47299 12.4407 4.06935 12.4407H0.730648V12.4398ZM19.9306 12.4398C19.527 12.4398 19.2 12.7596 19.2 13.1543V17.3404C19.2 17.6402 19.0931 17.8946 18.8783 18.1037C18.6796 18.298 18.4266 18.3956 18.1201 18.3956H13.6907C13.2871 18.3956 12.9601 18.7154 12.9601 19.1102V22.2846C12.9601 22.6793 13.2871 22.9991 13.6907 22.9991H18.1201C18.4266 22.9991 18.6787 22.9015 18.8783 22.7072C19.0931 22.4972 19.2 22.2428 19.2 21.9439V19.4509C19.2 19.1511 19.2998 18.9045 19.4985 18.7093C19.7132 18.4993 19.9734 18.3948 20.279 18.3948H22.9201C23.2266 18.3948 23.4787 18.2972 23.6783 18.1029C23.8931 17.8929 24 17.6384 24 17.3395V13.1534C24 12.7587 23.673 12.4389 23.2694 12.4389H19.9306V12.4398ZM23.2694 10.5611C23.673 10.5611 24 10.2413 24 9.84656V5.66047C24 5.36071 23.8931 5.11411 23.6783 4.91892C23.4796 4.70892 23.2266 4.60436 22.9201 4.60436H20.279C19.9725 4.60436 19.7123 4.50676 19.4985 4.31245C19.2998 4.10244 19.2 3.848 19.2 3.54912V1.05611C19.2 0.756355 19.0931 0.509756 18.8783 0.314567C18.6796 0.104565 18.4266 0 18.1201 0H13.6907C13.2871 0 12.9601 0.319795 12.9601 0.714529V3.88896C12.9601 4.28369 13.2871 4.60349 13.6907 4.60349H18.1201C18.4266 4.60349 18.6787 4.70805 18.8783 4.91805C19.0931 5.11237 19.2 5.35984 19.2 5.6596V9.84569C19.2 10.2404 19.527 10.5602 19.9306 10.5602H23.2694V10.5611Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </ScrollDirectionContent>
                </div>
              </div>
            </div>
            <div id="product-suite" className="container w-full">
              <div className="w-full flex flex-col items-start sm:grid justify-items-start sm:grid-cols-4 sm:grid-rows-2 sm:gap-4">
                <p
                  className="text-xs text-brand sm:justify-self-end"
                  style={{ gridArea: "1 / 1" }}
                >
                  &lt;h3&gt;
                </p>
                <div
                  className="mt-4 sm:pl-0 pl-4"
                  style={{ gridArea: "1 / 2 / 3 / 5" }}
                >
                  <p
                    className="uppercase text-[#FF7A00]! !dark:text-[#FF7A00] font-nb-architekt"
                    style={{
                      fontSize: "clamp(14px, 5vw, 56px)",
                      lineHeight: "clamp(32px, 5vw, 56px)",
                      color: "#FF7A00",
                    }}
                  >
                    Cyla System // Online
                  </p>
                </div>
                <p
                  className="text-xs text-brand sm:justify-self-end mt-4"
                  style={{ gridArea: "2 / 1" }}
                >
                  &lt;p&gt;
                </p>
                <div
                  className="sm:pl-0 pl-4 mt-4"
                  style={{ gridArea: "2 / 2 / 3 / 5" }}
                >
                  <p
                    style={{ color: "#FF7A00" }}
                    className="text-[#FF7A00] dark:text-[#FF7A00] sm:!mt-4 mt-0 font-at-hauss-aero-semibold"
                  >
                    Cyla is a self-learning AI exploring the Solana ecosystem.
                  </p>
                </div>
              </div>
              <div className="relative w-full flex flex-col items-start sm:grid justify-items-start sm:grid-cols-4 sm:gap-x-4 mt-6 sm:mt-16 gap-y-1 sm:gap-y-0 sm:grid-rows-5">
                <div
                  className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
                  style={{ gridArea: "1 / 1 / 2 / 5" }}
                >
                  <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
                    &lt;01&gt;
                  </p>
                  <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
                    <a rel="noopener noreferrer" target="_self" href="/CYLAger">
                      <div className="w-full p-2 cursor-pointer flex justify-between items-center group hover:bg-brand rounded-sm hover:text-black transition">
                        <div style={{ position: "relative", width: "100%" }}>
                          <div
                            className=" uppercase pr-2 font-nb-architekt"
                            style={{
                              position: "absolute",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            <TextScramble>
                              <div>EVOLUTION LOG</div>
                            </TextScramble>{" "}
                          </div>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              visibility: "hidden",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            <TextScramble>
                              <div>LOG</div>
                            </TextScramble>{" "}
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="41"
                          viewBox="0 0 24 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-fit w-4 text-brand group-hover:text-black"
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
                    </a>
                  </div>
                </div>
                <div
                  className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
                  style={{ gridArea: "2 / 1 / 3 / 5" }}
                >
                  <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
                    &lt;02&gt;
                  </p>
                  <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
                    <a
                      rel="noopener noreferrer"
                      target="_self"
                      href="/ai-agents"
                    >
                      <div className="w-full p-2 cursor-pointer flex justify-between items-center group hover:bg-brand rounded-sm hover:text-black transition">
                        <div key={1} style={{ position: "relative" }}>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              position: "absolute",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                              color: "#FF7A00",
                            }}
                          >
                            <TextScramble>
                              <div>LEARNING INDEX </div>
                            </TextScramble>
                          </div>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              visibility: "hidden",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            LEARNING INDEX
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="41"
                          viewBox="0 0 24 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-fit w-4 text-brand group-hover:text-black"
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
                    </a>
                  </div>
                </div>
                <div
                  className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
                  style={{ gridArea: "3 / 1 / 4 / 5" }}
                >
                  <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
                    &lt;03&gt;
                  </p>
                  <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
                    <a
                      rel="noopener noreferrer"
                      target="_self"
                      href="/AGENT TASKS (COMING SOON)"
                    >
                      <div className="w-full p-2 cursor-pointer flex justify-between items-center group hover:bg-brand rounded-sm hover:text-black transition">
                        <div style={{ position: "relative" }}>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              position: "absolute",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            <TextScramble>
                              <div>AGENT TASKS (COMING SOON) </div>
                            </TextScramble>
                          </div>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              visibility: "hidden",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            AGENT TASKS (COMING SOON)
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="41"
                          viewBox="0 0 24 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-fit w-4 text-brand group-hover:text-black"
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
                    </a>
                  </div>
                </div>
                <div
                  className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
                  style={{ gridArea: "4 / 1 / 5 / 5" }}
                >
                  <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
                    &lt;04&gt;
                  </p>
                  <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
                    <a
                      rel="noopener noreferrer"
                      target="_self"
                      href="/OGINTEGRATIONS (COMING SOON)"
                    >
                      <div className="w-full p-2 cursor-pointer flex justify-between items-center group hover:bg-brand rounded-sm hover:text-black transition">
                        <div style={{ position: "relative" }}>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              position: "absolute",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            <TextScramble>
                              <div>INTEGRATIONS (COMING SOON) </div>
                            </TextScramble>
                          </div>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              visibility: "hidden",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            INTEGRATIONS (COMING SOON)
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="41"
                          viewBox="0 0 24 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-fit w-4 text-brand group-hover:text-black"
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
                    </a>
                  </div>
                </div>
                <div
                  className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
                  style={{ gridArea: "5 / 1 / 6 / 5" }}
                >
                  <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
                    &lt;05&gt;
                  </p>
                  <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
                    <a rel="noopener noreferrer" target="_self" href="/token">
                      <div className="w-full p-2 cursor-pointer flex justify-between items-center group hover:bg-brand rounded-sm hover:text-black transition">
                        <div style={{ position: "relative" }}>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              position: "absolute",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            <TextScramble>
                              <div></div>
                              $CYLA TOKEN (COMING SOON)
                            </TextScramble>
                          </div>
                          <div
                            className="uppercase pr-2 font-nb-architekt"
                            style={{
                              visibility: "hidden",
                              fontSize: "clamp(10px, 5vw, 48px)",
                              lineHeight: "clamp(24px, 5vw, 48px)",
                            }}
                          >
                            $CYLA TOKEN (COMING SOON)
                          </div>
                        </div>
                        <svg
                          width="24"
                          height="41"
                          viewBox="0 0 24 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sm:w-fit w-4 text-brand group-hover:text-black"
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
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative container -z-[1]">
              <div className="w-full my-20 sm:mt-40">
                <div className="border-b border-dashed border-brand/30">
                  <ScrollDirectionContent>
                    <div
                      className="absolute -top-3 left-[10%]"
                      style={{
                        willChange: "transform",
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "transform 0.05s ease-out",
                      }}
                    >
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-brand"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87904 0.000871377H10.3084C10.712 0.000871377 11.039 0.320667 11.039 0.715401V3.88983C11.039 4.28456 10.712 4.60436 10.3084 4.60436H5.87904C5.57253 4.60436 5.31234 4.70892 5.0985 4.91892C4.8998 5.11324 4.8 5.36071 4.8 5.66047V9.84656C4.8 10.2413 4.47299 10.5611 4.06935 10.5611H0.730648C0.327009 10.5611 0 10.2413 0 9.84656V5.66047C0 5.36071 0.106924 5.11411 0.321663 4.91892C0.536402 4.70892 0.796584 4.60436 1.10221 4.60436H3.72007C4.02658 4.60436 4.27874 4.50676 4.47834 4.31245C4.69308 4.10244 4.8 3.848 4.8 3.54912V1.05611C4.8 0.756355 4.8998 0.509756 5.0985 0.314567C5.31324 0.104565 5.57342 0 5.87904 0V0.000871377ZM0.730648 12.4398C0.327009 12.4398 0 12.7596 0 13.1543V17.3404C0 17.6402 0.106924 17.8946 0.321663 18.1037C0.536402 18.298 0.796584 18.3956 1.10221 18.3956H3.72007C4.02658 18.3956 4.27874 18.5002 4.47834 18.7102C4.69308 18.9045 4.8 19.152 4.8 19.4518V21.9448C4.8 22.2445 4.8998 22.499 5.0985 22.7081C5.31324 22.9024 5.57342 23 5.87904 23H10.3084C10.712 23 11.039 22.6802 11.039 22.2855V19.111C11.039 18.7163 10.712 18.3965 10.3084 18.3965H5.87904C5.57253 18.3965 5.31234 18.2989 5.0985 18.1046C4.8998 17.8946 4.8 17.6402 4.8 17.3413V13.1552C4.8 12.7604 4.47299 12.4407 4.06935 12.4407H0.730648V12.4398ZM19.9306 12.4398C19.527 12.4398 19.2 12.7596 19.2 13.1543V17.3404C19.2 17.6402 19.0931 17.8946 18.8783 18.1037C18.6796 18.298 18.4266 18.3956 18.1201 18.3956H13.6907C13.2871 18.3956 12.9601 18.7154 12.9601 19.1102V22.2846C12.9601 22.6793 13.2871 22.9991 13.6907 22.9991H18.1201C18.4266 22.9991 18.6787 22.9015 18.8783 22.7072C19.0931 22.4972 19.2 22.2428 19.2 21.9439V19.4509C19.2 19.1511 19.2998 18.9045 19.4985 18.7093C19.7132 18.4993 19.9734 18.3948 20.279 18.3948H22.9201C23.2266 18.3948 23.4787 18.2972 23.6783 18.1029C23.8931 17.8929 24 17.6384 24 17.3395V13.1534C24 12.7587 23.673 12.4389 23.2694 12.4389H19.9306V12.4398ZM23.2694 10.5611C23.673 10.5611 24 10.2413 24 9.84656V5.66047C24 5.36071 23.8931 5.11411 23.6783 4.91892C23.4796 4.70892 23.2266 4.60436 22.9201 4.60436H20.279C19.9725 4.60436 19.7123 4.50676 19.4985 4.31245C19.2998 4.10244 19.2 3.848 19.2 3.54912V1.05611C19.2 0.756355 19.0931 0.509756 18.8783 0.314567C18.6796 0.104565 18.4266 0 18.1201 0H13.6907C13.2871 0 12.9601 0.319795 12.9601 0.714529V3.88896C12.9601 4.28369 13.2871 4.60349 13.6907 4.60349H18.1201C18.4266 4.60349 18.6787 4.70805 18.8783 4.91805C19.0931 5.11237 19.2 5.35984 19.2 5.6596V9.84569C19.2 10.2404 19.527 10.5602 19.9306 10.5602H23.2694V10.5611Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </ScrollDirectionContent>
                  <ScrollDirectionContent>
                    <div
                      className="absolute -top-3 left-[50%]"
                      style={{
                        willChange: "transform",
                        transform: "translate3d(0%, 0px, 0px)",
                        transition: "transform 0.05s ease-out",
                      }}
                    >
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-brand"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87904 0.000871377H10.3084C10.712 0.000871377 11.039 0.320667 11.039 0.715401V3.88983C11.039 4.28456 10.712 4.60436 10.3084 4.60436H5.87904C5.57253 4.60436 5.31234 4.70892 5.0985 4.91892C4.8998 5.11324 4.8 5.36071 4.8 5.66047V9.84656C4.8 10.2413 4.47299 10.5611 4.06935 10.5611H0.730648C0.327009 10.5611 0 10.2413 0 9.84656V5.66047C0 5.36071 0.106924 5.11411 0.321663 4.91892C0.536402 4.70892 0.796584 4.60436 1.10221 4.60436H3.72007C4.02658 4.60436 4.27874 4.50676 4.47834 4.31245C4.69308 4.10244 4.8 3.848 4.8 3.54912V1.05611C4.8 0.756355 4.8998 0.509756 5.0985 0.314567C5.31324 0.104565 5.57342 0 5.87904 0V0.000871377ZM0.730648 12.4398C0.327009 12.4398 0 12.7596 0 13.1543V17.3404C0 17.6402 0.106924 17.8946 0.321663 18.1037C0.536402 18.298 0.796584 18.3956 1.10221 18.3956H3.72007C4.02658 18.3956 4.27874 18.5002 4.47834 18.7102C4.69308 18.9045 4.8 19.152 4.8 19.4518V21.9448C4.8 22.2445 4.8998 22.499 
                                                          5.0985 22.7081C5.31324 22.9024 5.57342 23 5.87904 23H10.3084C10.712 23 11.039 22.6802 11.039 22.2855V19.111C11.039 18.7163 10.712 18.3965 10.3084 18.3965H5.87904C5.57253 18.3965 5.31234 18.2989 5.0985 18.1046C4.8998 17.8946 4.8 17.6402 4.8 17.3413V13.1552C4.8 12.7604 4.47299 12.4407 4.06935 12.4407H0.730648V12.4398ZM19.9306 12.4398C19.527 12.4398 19.2 12.7596 19.2 13.1543V17.3404C19.2 17.6402 19.0931 17.8946 18.8783 18.1037C18.6796 18.298 18.4266 18.3956 18.1201 18.3956H13.6907C13.2871 18.3956 12.9601 18.7154 12.9601 19.1102V22.2846C12.9601 22.6793 13.2871 22.9991 13.6907 22.9991H18.1201C18.4266 22.9991 18.6787 22.9015 18.8783 22.7072C19.0931 22.4972 19.2 22.2428 19.2 21.9439V19.4509C19.2 19.1511 19.2998 18.9045 19.4985 18.7093C19.7132 18.4993 19.9734 18.3948 20.279 18.3948H22.9201C23.2266 18.3948 23.4787 18.2972 23.6783 18.1029C23.8931 17.8929 24 17.6384 24 17.3395V13.1534C24 12.7587 23.673 12.4389 23.2694 12.4389H19.9306V12.4398ZM23.2694 10.5611C23.673 10.5611 24 10.2413 24 9.84656V5.66047C24 5.36071 23.8931 5.11411 23.6783 4.91892C23.4796 4.70892 23.2266 4.60436 22.9201 4.60436H20.279C19.9725 4.60436 19.7123 4.50676 19.4985 4.31245C19.2998 4.10244 19.2 3.848 19.2 3.54912V1.05611C19.2 0.756355 19.0931 0.509756 18.8783 0.314567C18.6796 0.104565 18.4266 0 18.1201 0H13.6907C13.2871 0 12.9601 0.319795 12.9601 0.714529V3.88896C12.9601 4.28369 13.2871 4.60349 13.6907 4.60349H18.1201C18.4266 4.60349 18.6787 4.70805 18.8783 4.91805C19.0931 5.11237 19.2 5.35984 19.2 5.6596V9.84569C19.2 10.2404 19.527 10.5602 19.9306 10.5602H23.2694V10.5611Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </ScrollDirectionContent>
                </div>
              </div>
            </div>
            <div className="container w-full">
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
                    We look forward to hearing about what you're working towards
                    - a world of web3.ai-enabled possibilities awaits. Ready?
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
                      LET'S GO
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
                            <rect
                              width="20"
                              height="16"
                              x="2"
                              y="4"
                              rx="2"
                            ></rect>
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
            <div className="container relative pb-4 sm:pb-24 sm:mt-40 mt-28">
              <div className="absolute right-4 -top-2 transform translate-y-[-100%]"></div>
              <div className="grid relative md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-4 border-t border-dashed border-brand/30 p-4">
                <div className="md:col-span-4">
                  <div className="space-y-4">
                    <a href="/">
                      <svg
                        width="800"
                        height="727"
                        viewBox="0 0 800 727"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-primary"
                      >
                        <path
                          d="M30.3329 578.732L5.70485 556.527C3.90884 554.908 2.47312 552.93 1.49045 550.722C0.507783 548.514 3.42127e-05 546.125 1.12909e-05 543.709V532.168C-0.000401391 532.13 0.010507 532.092 0.0313511 532.061C0.0521953 532.029 0.082035 532.004 0.117081 531.989C0.155681 531.976 0.189218 531.952 0.212857 531.919C0.236497 531.886 0.249019 531.846 0.24862 531.805V28.8915C0.24862 21.229 3.2975 13.8803 8.72453 8.46212C14.1516 3.04391 21.5122 0 29.1872 0H179.373C187.048 0 194.409 3.04391 199.836 8.46212C205.263 13.8803 208.312 21.229 208.312 28.8915V436.463C208.307 440.277 209.062 444.054 210.535 447.573C212.008 451.092 214.168 454.283 216.889 456.959C231.768 471.586 261.981 501.259 284.844 523.713C290.255 529.028 297.543 532.005 305.133 532.004H391.749C417.378 532.004 430.357 501.197 412.435 482.908L378.184 447.956C363.846 435.426 350.263 423.004 339.665 412.263C317.445 389.729 305.116 377.865 298.457 371.704C296.208 369.66 294.402 367.179 293.149 364.412C291.896 361.646 291.223 358.653 291.171 355.617V343.065C291.17 343.027 291.182 342.989 291.203 342.958C291.225 342.926 291.256 342.902 291.292 342.888C291.327 342.874 291.358 342.849 291.379 342.818C291.401 342.786 291.412 342.749 291.413 342.711V28.8915C291.413 21.229 294.462 13.8803 299.889 8.46212C305.316 3.04391 312.676 0 320.351 0H470.545C478.22 0 485.581 3.04391 491.008 8.46212C496.435 13.8803 499.484 21.229 499.484 28.8915V249.675C499.479 257.29 502.489 264.599 507.857 270.009L542.224 304.613C560.418 322.936 591.723 310.079 591.723 284.279V28.8915C591.723 21.229 594.771 13.8803 600.198 8.46212C605.625 3.04391 612.986 0 620.661 0H770.089C777.764 0 785.125 3.04391 790.552 8.46212C795.979 13.8803 799.028 21.229 799.028 28.8915V328.181C799.028 335.843 795.979 343.192 790.552 348.61C785.125 354.028 777.764 357.072 770.089 357.072H663.753C638.032 357.072 625.094 388.065 643.202 406.305L798.961 563.184C799.044 563.269 798.967 563.322 798.888 563.411C798.862 563.441 798.844 563.478 798.836 563.518C798.829 563.557 798.832 563.598 798.845 563.636C798.859 563.674 798.882 563.708 798.913 563.734C798.943 563.76 798.98 563.777 799.02 563.784L799.555 563.866C799.68 563.885 799.794 563.949 799.876 564.045C799.957 564.142 800.001 564.265 800 564.391L798.558 696.868C798.475 704.475 795.389 711.743 789.971 717.093C784.553 722.442 777.24 725.443 769.62 725.442H657.518C657.376 725.442 657.234 725.473 657.104 725.532C656.974 725.591 656.859 725.677 656.765 725.784C656.674 725.887 656.564 725.97 656.44 726.029C656.317 726.088 656.182 726.121 656.045 726.126C655.908 726.13 655.772 726.107 655.644 726.057C655.516 726.007 655.4 725.932 655.303 725.835L518.38 589.658C500.133 571.51 469.018 584.413 469.018 610.126V696.547C469.018 700.341 468.269 704.098 466.815 707.603C465.361 711.109 463.229 714.294 460.542 716.976C457.855 719.659 454.665 721.787 451.154 723.239C447.643 724.691 443.88 725.439 440.079 725.439H189.853C188.94 725.439 
                                                          188.029 
                                                          725.508 187.127 725.646C184.335 726.075 181.48 725.839 178.796 724.957C176.112 724.076 173.675 722.574 171.682 720.574L30.3329 578.732Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <div className="flex items-center space-x-1">
                      <a
                        href="https://x.com/CYLA_ai"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit flex items-center group"
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
                      <a
                        href="https://t.me/CYLAai"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit flex items-center group"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2 group-hover:text-brand transition"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.3749 10.8879C8.74359 8.62993 12.3236 7.14134 14.1148 6.42212C19.2292 4.36862 20.2919 4.0119 20.9846 4.00013C21.1369 3.99753 21.4776 4.03398 21.6982 4.20682C21.8845 4.35275 21.9358 4.5499 21.9603 4.68826C21.9848 4.82663 22.0154 5.14183 21.9911 5.38811C21.714 8.1992 20.5147 15.021 19.9046 18.1694C19.6465 19.5017 19.1382 19.9484 18.6461 19.9921C17.5766 20.0871 16.7645 19.3098 15.7287 18.6543C14.1078 17.6287 13.1921 16.9902 11.6188 15.9893C9.80053 14.8327 10.9792 14.1969 12.0154 13.158C12.2866 12.8861 16.9987 8.74867 17.0899 8.37335C17.1013 8.32641 17.1119 8.15143 17.0042 8.05904C16.8965 7.96664 16.7376 7.99824 16.6229 8.02337C16.4604 8.05898 13.871 9.71112 8.85486 12.9798C8.11988 13.467 7.45416 13.7044 6.8577 13.6919C6.20015 13.6782 4.93528 13.333 3.99498 13.038C2.84166 12.6761 1.92503 12.4847 2.00485 11.8701C2.04642 11.55 2.5031 11.2226 3.3749 10.8879Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://discord.gg/jGHRSZGZp6"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit flex items-center group"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2 group-hover:text-brand transition"
                        >
                          <path
                            d="M18.9308 5.32631C17.6561 4.71242 16.2892 4.26013 14.8599 4.00109C14.8339 3.99609 14.8079 4.00858 14.7945 4.03357C14.6187 4.36175 14.4239 4.78988 14.2876 5.12639C12.7503 4.88484 11.221 4.88484 9.71527 5.12639C9.57887 4.7824 9.37707 4.36175 9.20048 4.03357C9.18707 4.00941 9.16107 3.99692 9.13504 4.00109C7.70659 4.2593 6.33963 4.71159 5.06411 5.32631C5.05307 5.33131 5.04361 5.33965 5.03732 5.35047C2.44449 9.4161 1.73421 13.3818 2.08265 17.2983C2.08423 17.3175 2.09447 17.3358 2.10867 17.3475C3.81934 18.666 5.47642 19.4665 7.10273 19.9971C7.12876 20.0054 7.15634 19.9954 7.1729 19.9729C7.55761 19.4215 7.90054 18.8401 8.19456 18.2287C8.21192 18.1929 8.19535 18.1504 8.15989 18.1363C7.61594 17.9197 7.098 17.6557 6.59977 17.3558C6.56037 17.3317 6.55721 17.2725 6.59346 17.2442C6.69831 17.1617 6.80318 17.0759 6.9033 16.9893C6.92141 16.9735 6.94665 16.9701 6.96794 16.9801C10.2411 18.5486 13.7846 18.5486 17.0191 16.9801C17.0404 16.9693 17.0657 16.9726 17.0846 16.9885C17.1847 17.0751 17.2895 17.1617 17.3952 17.2442C17.4314 17.2725 17.4291 17.3317 17.3897 17.3558C16.8914 17.6615 16.3735 17.9197 15.8288 18.1354C15.7933 18.1496 15.7775 18.1929 15.7949 18.2287C16.0952 18.8393 16.4381 19.4207 16.8157 19.9721C16.8315 19.9954 16.8599 20.0054 16.8859 19.9971C18.5201 19.4665 20.1772 18.666 21.8879 17.3475C21.9028 17.3358 21.9123 17.3183 21.9139 17.2992C22.3309 12.7712 21.2154 8.83804 18.9568 5.3513C18.9513 5.33965 18.9419 5.33131 18.9308 5.32631ZM8.68335 14.9136C7.69792 14.9136 6.88594 13.964 6.88594 12.7979C6.88594 11.6317 7.68217 10.6822 8.68335 10.6822C9.69239 10.6822 10.4965 11.6401 10.4807 12.7979C10.4807 13.964 9.68451 14.9136 8.68335 14.9136ZM15.329 14.9136C14.3435 14.9136 13.5316 13.964 13.5316 12.7979C13.5316 11.6317 14.3278 10.6822 15.329 10.6822C16.338 10.6822 17.1421 11.6401 17.1264 12.7979C17.1264 13.964 16.338 14.9136 15.329 14.9136Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.tiktok.com/@CYLA.ai"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit flex items-center group"
                      >
                        <svg
                          fill="currentColor"
                          width="800px"
                          height="800px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2 group-hover:text-brand transition"
                        >
                          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.linkedin.com/company/web-ogs/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit flex items-center group"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2 group-hover:text-brand transition"
                        >
                          <path
                            d="M6 4.001C5.99974 4.53143 5.78877 5.04004 5.41351 5.41492C5.03825 5.78981 4.52943 6.00027 3.999 6C3.46857 5.99974 2.95996 5.78877 2.58508 5.41351C2.21019 5.03825 1.99974 4.52943 2 3.999C2.00027 3.46857 2.21123 2.95996 2.58649 2.58508C2.96175 2.21019 3.47057 1.99974 4.001 2C4.53143 2.00027 5.04004 2.21123 5.41492 2.58649C5.78981 2.96175 6.00027 3.47057 6 4.001ZM6.06 7.481H2.06V20.001H6.06V7.481ZM12.38 7.481H8.4V20.001H12.34V13.431C12.34 9.771 17.11 9.431 17.11 13.431V20.001H21.06V12.071C21.06 5.901 14 6.131 12.34 9.161L12.38 7.481Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <div className="space-y-2">
                      {/* <a
                                href="https://republic.com/CYLA-ai"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block"
                              >
                                <Image
                                  alt="republic logo"
                                  loading="lazy"
                                  width="116"
                                  height="32"
                                  decoding="async"
                                  data-nimg="1"
                                  className="object-contain"
                                  src="/republic_logo.png"
                                  style={{ color: "transparent" }}
                                />
                              </a> */}
                      <p className="text-xs font-at-hauss-aero-medium">
                        Verified Exclusive for Reg D/S
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col gap-2">
                      <div style={{ position: "relative" }}>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ position: "absolute" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>Products &amp; Services</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div></div>
                            Products &amp; Servic "
                          </TextScramble>
                        </div>
                      </div>
                      <a className="w-fit mt-1" href="/CYLA">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          CYLA
                        </p>
                      </a>
                      <a className="w-fit mt-1" href="/ai-agents">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          AI Agent Launchpad
                        </p>
                      </a>
                      <a className="w-fit mt-1" href="/CYLA">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          Orbu.AI prediction game
                        </p>
                      </a>
                      <a className="w-fit mt-1" href="/OGBattlefront">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          The OG Battlefront
                        </p>
                      </a>
                      <a
                        className="w-fit mt-1"
                        href="/OGINTEGRATIONS (COMING SOON)"
                      >
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          Collectibles
                        </p>
                      </a>
                      <a className="w-fit mt-1" href="/token">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          $CYLA arcade token
                        </p>
                      </a>
                      <a
                        href="https://web-ogs.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit mt-1"
                      >
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          web-OGs
                        </p>
                      </a>
                    </div>
                    <div className="flex flex-col gap-2 pl-2 xs:pl-8 sm:pl-0 md:pl-8">
                      <div style={{ position: "relative" }}>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ position: "absolute" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>Company </div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble>
                            <div>Company</div>
                          </TextScramble>
                        </div>
                      </div>
                      <a className="w-fit mt-1" href="/about">
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          About
                        </p>
                      </a>
                      <a
                        href="https://www.figma.com/deck/nOP3KfsEQxtC9jrblnR4Fk/CYLA-Powered-by-OrbuAi-Brand-Guidelines?node-id=1-548&amp;t=9p7O4KljNohzDXOW-1"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit mt-1"
                      >
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          Brand
                        </p>
                      </a>
                      <a
                        href="https://republic.com/CYLA-ai"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit mt-1"
                      >
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          White Paper
                        </p>
                      </a>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div style={{ position: "relative" }}>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ position: "absolute" }}
                        >
                          <TextScramble hoveringColor="#FF7A00">
                            <div>Legal &amp; Compliance</div>
                          </TextScramble>
                        </div>
                        <div
                          className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                          style={{ visibility: "hidden" }}
                        >
                          <TextScramble>
                            <div>
                              Legal &amp; Compliance hoveringColor='#FF7A00'
                            </div>
                          </TextScramble>
                        </div>
                      </div>
                      <a
                        href="https://docs.google.com/document/d/1YkIbCOkjTurnYqFdMrHBDHlWzs15CZkS07UkS2I_j00"
                        target="_blank"
                        rel="noreferrer"
                        className="w-fit mt-1"
                      >
                        <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                          Terms &amp; Conditions
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[11px] flex sm:flex-row flex-col justify-center sm:justify-between items-center space-y-1 mt-4">
                <p>
                  © 2022-2025 <span className="text-brand">CYLA.ai</span> | All
                  Rights Reserved.
                </p>
                {/* <p>
                          <span className="text-brand">Powered by</span> Orbu.AI | Sui
                        </p> */}
              </div>
            </div>
          </main>
          <div>
            <canvas
              className="Canvas_c__veTMn"
              width="943"
              height="667"
            ></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
