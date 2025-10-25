import React from "react";
import { TextScramble } from "./TextScramble";
import Link from "next/link";

const ArrowRightIcon = (
  props: {
    className?: string;
    width?: string;
    height?: string;
    fill?: string;
  }
) => {
  return (
    <svg
      width={props.width || "24"}
      height={props.height || "41"}
      viewBox="0 0 24 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`sm:w-fit w-4 text-brand group-hover:text-black ${props.className}`}
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
  )
}

const ProductSuite = () => {
  const productSuiteItems = [
    {
      title: "EVOLUTION LOG",
      description: "LOG",
      link: "/EvolutionLog",
    },

    {
      title: "LEARNING INDEX",
      description: "INDEX",
      link: "/LearningIndex",
    },


    {
      title: "AGENT TASKS (COMING SOON)",
      description: "(COMING SOON)",
      link: "/AGENT TASKS (COMING SOON)",
    },
    {
      title: "INTEGRATIONS (COMING SOON)",
      description: "(COMING SOON)",
      link: "/OGINTEGRATIONS (COMING SOON)",
    },
    {
      title: "$CYLA TOKEN (COMING SOON)",
      description: "(COMING SOON)",
      link: "/token",
    },
  ]

  return (
    <div className=" w-full py-0! md:py-0!">
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
      <div className="relative w-full flex flex-col items-start mt-6 sm:mt-16 gap-y-1">
        {productSuiteItems.map((item, index) => (
          <div
            key={index}
            className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
          >
            <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
              &lt;0{index + 1}&gt;
            </p>
            <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
              <a className="w-full active:bg-brand active:text-black" href={item.link} target="_self" rel="noopener noreferrer">
                <div className="border-8 w-full p-2 cursor-pointer flex items-center group hover:bg-brand rounded-sm hover:text-black transition relative">
  {/* Title only wrapped in TextScramble */}
  <div
    className="uppercase pr-2 font-nb-architekt flex-1"
    style={{
      fontSize: "clamp(10px, 5vw, 48px)",
      lineHeight: "clamp(24px, 5vw, 48px)",
    }}
  >
    <TextScramble>
      <div>{item.title}</div>
    </TextScramble>
  </div>

  <ArrowRightIcon
    width="24"
    height="41"
    fill="currentColor"
    className="ml-auto"
  />
</div>

              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSuite;
