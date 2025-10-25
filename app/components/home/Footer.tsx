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
              </Link>
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
                      Products &amp; Services
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
                <a className="w-fit mt-1" href="/OGINTEGRATIONS (COMING SOON)">
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
        <div className="text-[11px] flex sm:flex-row flex-col justify-center sm:justify-between items-center space-y-1 mt-4">
          <p>
            © 2022-2025 <span className="text-brand">CYLA.ai</span> | All Rights
            Reserved.
          </p>
          <p>
            <span className="text-brand">Powered by</span> Orbu.AI | Sui
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
