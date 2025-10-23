"use client";
import { motion } from "framer-motion";
import { TextScramble } from "./TextScramble"; // keep your component

export default function HeroSection() {
  const texts = ["ADAPTIVE WEB3 INTELLIGENCE  ", "LEARNING THROUGH SOLANA"];

  return (
    <div className="w-full flex flex-col justify-between min-h-screen py-12">
      {/* Titles */}
      <div className="font-nb-architekt space-y-2">
        {texts.map((text, i) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.4 }}
            className={`${
              i === 0
                ? "text-left dark:text-white text-black"
                : i === 1
                ? "text-center dark:text-white text-black"
                : "text-right text-brand"
            }`}
            style={{
              fontSize: "clamp(36px, 8vw, 100px)",
              lineHeight: "clamp(36px, 8vw, 100px)",
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div
        className="flex justify-end"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col font-light pt-8 w-[480px] items-end space-y-4 group">
          <a href="https://app.CYLA.ai" target="_blank" rel="noreferrer noopener">
            <button className="font-nb-architekt inline-flex items-center justify-center rounded-md border border-brand/80 bg-background text-black dark:text-brand hover:!bg-brand hover:!text-black transition-all px-4 py-2 h-[46px] text-base space-x-2">
              <div className="relative">
                <div className="absolute inset-0">
                  <TextScramble text="LAUNCH CYLA" />
                </div>
                <div className="invisible">
                  <TextScramble text="LAUNCH CYLA" />
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
          </a>
        </div>
      </motion.div>
    </div>
  );
}
