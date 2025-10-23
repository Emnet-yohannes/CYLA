import React from "react";
import Link from "next/link";

interface TokenLinkItemProps {
  index: string;
  label: string;
  href: string;
}

const TokenLinkItem: React.FC<TokenLinkItemProps> = ({ index, label, href }) => {
  return (
    <div
      className="w-full sm:grid sm:grid-cols-4 justify-items-start sm:gap-x-4"
      style={{ gridArea: "5 / 1 / 6 / 5" }}
    >
      {/* Index */}
      <p className="text-xs text-brand col-span-1 sm:justify-self-end sm:mt-0 mt-4 sm:mb-0 mb-2">
        &lt;{index}&gt;
      </p>

      {/* Content */}
      <div className="col-span-3 w-full border-b border-brand/30 p-2 pr-0">
        <Link href={href} target="_self" rel="noopener noreferrer">
          <div className="w-full p-2 flex justify-between items-center rounded-sm cursor-pointer group transition hover:bg-brand hover:text-black">
            {/* Animated Text */}
            <div className="relative">
              <div
                className="uppercase pr-2 font-nb-architekt absolute"
                style={{
                  fontSize: "clamp(24px, 5vw, 48px)",
                  lineHeight: "clamp(24px, 5vw, 48px)",
                }}
              >
                {label}
              </div>
              <div
                className="uppercase pr-2 font-nb-architekt invisible"
                style={{
                  fontSize: "clamp(24px, 5vw, 48px)",
                  lineHeight: "clamp(24px, 5vw, 48px)",
                }}
              >
                {label}
              </div>
            </div>

            {/* Icon */}
            <svg
              width="24"
              height="41"
              viewBox="0 0 24 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-fit w-4 text-brand group-hover:text-black transition-colors"
            >
              <g clipPath="url(#clip0_202_3947)">
                <path d="M12.2593 11.9844H17.9001V17.6252H12.2593V11.9844Z" fill="currentColor" />
                <path d="M6.61768 6.34375H12.2585V11.9845H6.61768V6.34375Z" fill="currentColor" />
                <path d="M0.977051 0.703125H6.61786V6.34393H0.977051V0.703125Z" fill="currentColor" />
                <path d="M0.977051 34.5469H6.61786V40.1877H0.977051V34.5469Z" fill="currentColor" />
                <path d="M6.61768 28.9062H12.2585V34.5471H6.61768V28.9062Z" fill="currentColor" />
                <path d="M12.2593 23.2656H17.9001V28.9064H12.2593V23.2656Z" fill="currentColor" />
                <path d="M17.8999 17.625H23.5407V23.2658H17.8999V17.625Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_202_3947">
                  <rect width="23.125" height="40" fill="currentColor" transform="translate(0.875 0.5)" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TokenLinkItem;
