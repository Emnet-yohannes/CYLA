import Link from "next/link";
import React from "react";
import { TextScramble } from "./TextScramble";

const Footer = () => {
  return (
    <footer className="w-full relative pb-4 sm:pb-24 sm:mt-16! mt-14! overflow-x-hidden">
      <div className="relative">
        <div className="grid relative md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-4 border-t border-dashed border-brand/30 p-4">
          <div className="md:col-span-4">
            <div className="space-y-4">
              <Link href="/">
                {/* <svg
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
                </svg> */}
                <img
                alt="Pro"
                loading="lazy"
                decoding="async"
                className="object-cover rounded-t-md w-10 h-10"
                src="/images/learning_index2.png"
                style={{ color: "transparent" }}
              />
              </Link>
              <div className="flex items-center space-x-1">
                <a
                  href="https://x.com/ProjectCyla"
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
                      <div>SYSTEM INDEX</div>
                    </TextScramble>
                  </div>
                  <div
                    className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble hoveringColor="#FF7A00">
                      <div></div>
                      SYSTEM INDEX
                    </TextScramble>
                  </div>
                </div>
                <a className="w-fit mt-1" href="/EvolutionLog">
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    Evolution Log
                  </p>
                </a>
                
                <a className="w-fit mt-1" href="/LearningIndex">
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    Learning Index
                  </p>
                </a>
                <a className="w-fit mt-1" href="/CYLAToken">
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    $CYLA Token (Soon)
                  </p>
                </a>
                <a className="w-fit mt-1" href="/Integrations">
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    Integrations (Soon)
                  </p>
                </a>
                <a className="w-fit mt-1" href="/AgentTasks">
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    Agent Tasks (Soon)
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
                      <div>ABOUT </div>
                    </TextScramble>
                  </div>
                  <div
                    className="text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble>
                      <div>ABOUT</div>
                    </TextScramble>
                  </div>
                </div>
                
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
                    className="relative sm:hidden text-xs sm:text-sm text-brand font-at-hauss-aero-semibold"
                    style={{ visibility: "hidden" }}
                  >
                    <TextScramble>
                      <div>Legal &amp; Compliance</div>
                    </TextScramble>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/document/d/1YkIbCOkjTurnYqFdMrHBDHlWzs15CZkS07UkS2I_j00"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit mt-5"
                >
                  <p className="text-[11px] sm:text-xs hover:text-white font-at-hauss-aero hover:font-at-hauss-aero-semibold">
                    Terms &amp; Conditions
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 text-[11px] flex sm:flex-row flex-col justify-center sm:justify-between items-center space-y-1 mt-4">
          <p>
            © 2025 <span className="text-brand">CYLA</span> | All Rights
            Reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
