import React from "react";
import { TextScramble } from "../home/TextScramble";
import Footer from "../home/Footer";

const LearningIndex = () => {
  return (
    <div className=" !pt-12">
      <div
        className=" flex flex-col w-full justify-start relative pb-24 sm:pb-0 z-0"
        style={{ minHeight: "calc(-218px + 100vh)" }}
      >
        <div style={{ position: "relative" }}>
          {/* Visible title */}
          <TextScramble hoveringColor="#FF7A00">
            <div
              className="uppercase text-black dark:text-brand mt-4 font-nb-architekt"
              style={{
                position: "absolute",
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: "clamp(32px, 5vw, 56px)",
              }}
            >
              Agentic AI Tiers &amp; Utility
            </div>
          </TextScramble>

          {/* Hidden title for spacing */}
          <div
            className="uppercase text-black dark:text-brand mt-4 font-nb-architekt"
            style={{
              visibility: "hidden",
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: "clamp(32px, 5vw, 56px)",
            }}
          >
            Agentic AI Tiers &amp; Utility
          </div>
        </div>

        <p className="mt-4 mb-6 md:text-lg">
          Deploy AI agent teams to automate operations, engage customers, and
          scale revenue.
          <br />
          Enterprise-grade AI workforce solutions for serious business growth.
        </p>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {/* Starter */}
          <div className="border border-primary rounded-md bg-black z-10 group flex flex-col">
            <div className="relative">
              <img
                alt="Basic"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-full h-[315px]"
                src="/images/basic_agent.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>

            <div className="p-4 space-y-6 transition group-hover:bg-primary/10 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Starter
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Enterprise Social Media Management</li>
                  <li>Automated Customer Engagement</li>
                  <li>Professional Brand Representation</li>
                  <li>24/7 Business Communications</li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href="https://waye.ai/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand !text-black hover:bg-brand/80 h-10 px-4 py-2 !h-8">
                    Contact us
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Growth */}
          <div className="border border-primary rounded-md group bg-black z-10 relative flex flex-col">
            <div className="bg-primary absolute top-0 left-0 w-full p-1 rounded-t-sm z-20">
              <p className="text-center text-black">Popular</p>
            </div>
            <div className="relative">
              <img
                alt="Pro"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-full h-[315px]"
                src="/images/pro_agent.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="p-4 space-y-6 transition group-hover:bg-primary/10 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Growth
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Multi-Channel Customer Experience</li>
                  <li>Advanced Analytics &amp; Reporting</li>
                  <li>Custom Brand Integration</li>
                  <li>Scalable Team Collaboration</li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href="https://waye.ai/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand !text-black hover:bg-brand/80 h-10 px-4 py-2 !h-8">
                    Contact us
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="border border-primary rounded-md group bg-black z-10 relative flex flex-col justify-between">
            <div className="relative overflow-hidden">
              <img
                alt="Squad"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-full h-[315px]"
                src="/images/team_agent.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all rounded-t-md"></div>
            </div>
            <div className="p-4 space-y-6 group-hover:bg-primary/10 transition flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Enterprise
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>AI Workforce Deployment</li>
                  <li>Advanced Process Automation</li>
                  <li>Cross-Functional Integration</li>
                  <li>Enterprise Security &amp; Compliance</li>
                </ul>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href="https://waye.ai/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand !text-black hover:bg-brand/80 h-10 px-4 py-2 !h-8">
                    Contact us
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Swarm */}
          <div className="border border-primary rounded-md group bg-black z-10 relative flex flex-col">
            <div className="relative">
              <img
                alt="Swarm"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-full h-[315px]"
                src="/images/swarm_agent.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="p-4 space-y-6 group-hover:bg-primary/10 transition flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Swarm Intelligence
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Autonomous Business Networks</li>
                  <li>Market Intelligence &amp; Trading</li>
                  <li>Revenue Optimisation Systems</li>
                  <li>Strategic Partnership Integration</li>
                </ul>
              </div>
              <div className="w-full flex justify-center mt-auto">
                <a
                  href="https://waye.ai/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="font-nb-architekt inline-flex items-center justify-center rounded-md text-sm font-normal ring-offset-background transition-colors focus-visible:outline-none outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-brand !text-black hover:bg-brand/80 h-10 px-4 py-2 !h-8">
                    Contact us
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
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default LearningIndex;
