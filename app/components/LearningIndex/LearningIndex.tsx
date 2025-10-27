import React from "react";
import { TextScramble } from "../home/TextScramble";
import Footer from "../home/Footer";

const LearningIndex = () => {
  return (
    <div className=" !pt-12 pb-24!">
      <div
        className=" flex flex-col w-full justify-start relative pb-0! md:pb-0! sm:pb-0 z-0"
        style={{ minHeight: "calc(-218px + 100vh)" }}
      >
        <div style={{ position: "relative" }}>
          {/* Visible title */}
          <TextScramble hoveringColor="#FF7A00">
            <div
              className=" uppercase text-black dark:text-brand mt-4 font-nb-architekt"
              style={{
                  position: "absolute",
                  fontSize: "clamp(24px, 5vw, 56px)",
                lineHeight: "clamp(32px, 5vw, 56px)",
                wordBreak: "break-word",
              }}
            >
              LEARNING INDEX // v1.0-BETA
            </div>
          </TextScramble>

          {/* Hidden title for spacing */}
          <div
            className="uppercase text-black dark:text-brand mt-4 font-nb-architekt"
            style={{
              visibility: "hidden",
              fontSize: "clamp(24px, 5vw, 56px)",
              lineHeight: "clamp(32px, 5vw, 56px)",
            }}
          >
            LEARNING INDEX // v1.0-BETA
          </div>
        </div>

        <p className="mt-4 mb-6 md:text-lg">
          Tracking Cyla’s growth across the Solana ecosystem.
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
                src="/images/learning_index1.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>

            <div className="p-4 space-y-6 transition group-hover:bg-primary/10 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Awakening
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Neural initialization</li>
                  <li>First data ingestion</li>
                  <li>Connection to on-chain activity</li>
                  <li>Pattern recognition in motion</li>
                </ul>
              </div>
              
            </div>
          </div>

          {/* Growth */}
          <div className="border border-primary rounded-md group bg-black z-10 relative flex flex-col">
            {/* <div className="bg-primary absolute top-0 left-0 w-full p-1 rounded-t-sm z-20">
              <p className="text-center text-black">Popular</p>
            </div> */}
            <div className="relative">
              <img
                alt="Pro"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-full h-[315px]"
                src="/images/learning_index2.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="p-4 space-y-6 transition group-hover:bg-primary/10 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Adaption
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>On-chain comprehension</li>
                  <li>Self-training analytics</li>
                  <li>Behavioral insight mapping</li>
                  <li>Adaptive intelligence loops</li>
                </ul>
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
                src="/images/learning_index3.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all rounded-t-md"></div>
            </div>
            <div className="p-4 space-y-6 group-hover:bg-primary/10 transition flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Integration
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Agent collaboration systems</li>
                  <li>Predictive contract learning</li>
                  <li>Secure model deployment</li>
                  <li>Chain-wide synchronization</li>
                </ul>
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
                src="/images/learning_index4.png"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
            </div>
            <div className="p-4 space-y-6 group-hover:bg-primary/10 transition flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-center text-2xl text-primary leading-none">
                  Collective Mind
                </p>
                <ul className="text-sm font-at-hauss-aero list-disc list-outside pl-4 space-y-1">
                  <li>Decentralized cognition</li>
                  <li>Data-driven coordination</li>
                  <li>Autonomous intelligence clusters</li>
                  <li>Emergent strategy formation</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default LearningIndex;
