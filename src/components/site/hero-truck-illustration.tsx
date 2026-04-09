"use client";

import { useRef } from "react";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { cx } from "@/lib/cx";

const wheelCenters = [
  { x: 182, y: 232 },
  { x: 236, y: 232 },
  { x: 290, y: 232 },
  { x: 548, y: 232 },
  { x: 642, y: 232 },
] as const;

type HeroTruckIllustrationProps = {
  className?: string;
};

export function HeroTruckIllustration({
  className,
}: HeroTruckIllustrationProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 24,
    mass: 0.28,
  });

  const truckX = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const wheelRotation = useTransform(smoothProgress, [0, 1], [0, 780]);

  return (
    <div
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      ref={wrapperRef}
    >
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0%, black 20%, black 88%, transparent 100%), linear-gradient(180deg, black 0%, black 82%, transparent 100%)",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 20%, black 88%, transparent 100%), linear-gradient(180deg, black 0%, black 82%, transparent 100%)",
        }}
      >
        <div className="absolute bottom-[-2.75rem] left-[52%] w-[42rem] max-w-none -translate-x-1/2 sm:bottom-[-3.5rem] sm:w-[52rem] lg:bottom-[-4.25rem] lg:w-[62rem] xl:bottom-[-4.75rem] xl:w-[68rem]">
          <motion.svg
            className="h-auto w-full text-[#c0c6cf] opacity-[0.12] sm:opacity-[0.15] lg:opacity-[0.18]"
            fill="none"
            style={prefersReducedMotion ? undefined : { x: truckX }}
            viewBox="0 0 760 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0 -8)">
              <g fill="currentColor">
                <rect height="104" rx="8" width="468" x="82" y="92" />
                <rect
                  fillOpacity="0.72"
                  height="80"
                  rx="5"
                  width="436"
                  x="98"
                  y="104"
                />
                <rect height="12" rx="6" width="493" x="74" y="200" />
                <rect
                  fillOpacity="0.94"
                  height="16"
                  rx="8"
                  width="150"
                  x="336"
                  y="216"
                />
                <rect
                  fillOpacity="0.9"
                  height="11"
                  rx="5.5"
                  width="156"
                  x="442"
                  y="203"
                />
                <rect
                  fillOpacity="0.84"
                  height="10"
                  rx="5"
                  width="44"
                  x="274"
                  y="205"
                />
                <rect
                  fillOpacity="0.88"
                  height="15"
                  rx="7.5"
                  width="26"
                  x="594"
                  y="214"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="44"
                  x="160"
                  y="203"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="44"
                  x="214"
                  y="203"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="44"
                  x="268"
                  y="203"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="46"
                  x="525"
                  y="203"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="38"
                  x="606"
                  y="203"
                />
                <path d="M568 92H603C616 92 626 97 633 106L643 121C651 133 655 146 655 159V212C655 223 647 232 636 232H568V92Z" />
                <path d="M550 92H568C579 92 588 101 588 112V122H550V92Z" />
                <rect
                  fillOpacity="0.92"
                  height="119"
                  rx="6"
                  width="13"
                  x="572"
                  y="98"
                />
                <rect height="9" rx="4.5" width="18" x="582" y="154" />
                <path
                  d="M582 110H606C617 110 625 114 630 121L637 131C642 138 639 145 632 145H582V110Z"
                  fill="#050505"
                  fillOpacity="0.46"
                />
                <path
                  d="M550 206H572C580 206 587 211 591 219L594 226H550V206Z"
                  fillOpacity="0.88"
                />
              </g>

              {wheelCenters.map(({ x, y }) => (
                <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                  <motion.g
                    style={
                      prefersReducedMotion
                        ? undefined
                        : {
                            rotate: wheelRotation,
                            transformBox: "fill-box",
                            transformOrigin: "center",
                          }
                    }
                  >
                    <circle cx="0" cy="0" fill="currentColor" r="20" />
                    <circle cx="0" cy="0" fill="#050505" fillOpacity="0.48" r="9" />
                    <circle cx="0" cy="0" fill="currentColor" fillOpacity="0.88" r="3.2" />
                    <rect
                      fill="#050505"
                      fillOpacity="0.44"
                      height="4"
                      rx="2"
                      width="18"
                      x="-9"
                      y="-2"
                    />
                    <rect
                      fill="#050505"
                      fillOpacity="0.44"
                      height="18"
                      rx="2"
                      width="4"
                      x="-2"
                      y="-9"
                    />
                  </motion.g>
                </g>
              ))}
            </g>
          </motion.svg>
        </div>
      </div>
    </div>
  );
}
