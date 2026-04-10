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

const rightRearWheelX = 540;
const frontWheelX = 602;
const truckTravelPercent = 60;
const wheelRadius = 20;
const wheelSpinMultiplier = 3;
const wheelRotationDegrees =
  ((760 * (truckTravelPercent / 100)) / (2 * Math.PI * wheelRadius)) *
  360 *
  wheelSpinMultiplier;

const wheelCenters = [
  { x: 182, y: 232 },
  { x: 236, y: 232 },
  { x: 290, y: 232 },
  { x: rightRearWheelX, y: 232 },
  { x: frontWheelX, y: 232 },
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

  const truckX = useTransform(smoothProgress, [0, 1], [
    "0%",
    `${truckTravelPercent}%`,
  ]);
  const wheelRotation = useTransform(
    smoothProgress,
    [0, 1],
    [0, wheelRotationDegrees],
  );

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
        <div className="absolute bottom-[-0.875rem] left-[32%] w-[22rem] max-w-none -translate-x-1/2 sm:bottom-[-2.25rem] sm:left-[56%] sm:w-[32rem] lg:bottom-[-2.75rem] lg:w-[38rem] xl:bottom-[-3rem] xl:w-[42rem]">
          <motion.svg
            className="h-auto w-full text-[#dbe3ec] drop-shadow-[0_0_18px_rgba(219,227,236,0.18)] sm:text-[#c0c6cf] sm:drop-shadow-none"
            fill="none"
            style={prefersReducedMotion ? undefined : { x: truckX }}
            viewBox="0 0 760 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(0 -8)">
              <g
                className="opacity-[0.16] sm:opacity-[0.15] lg:opacity-[0.18]"
                fill="currentColor"
              >
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
                  x={frontWheelX - 13}
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
                  x={rightRearWheelX - 23}
                  y="203"
                />
                <rect
                  fillOpacity="0.9"
                  height="10"
                  rx="5"
                  width="38"
                  x={frontWheelX - 19}
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
                <g
                  className="opacity-[0.24] sm:opacity-[0.3] lg:opacity-[0.38]"
                  key={`${x}-${y}`}
                  transform={`translate(${x} ${y})`}
                >
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
                    <circle cx="0" cy="0" fill="#3a3f46" r="20" />
                    <circle
                      cx="0"
                      cy="0"
                      fill="#050505"
                      fillOpacity="0.82"
                      r="12"
                    />
                    <circle
                      cx="0"
                      cy="0"
                      fill="none"
                      r="10.4"
                      stroke="white"
                      strokeOpacity="0.86"
                      strokeWidth="1.6"
                    />
                    <g
                      stroke="white"
                      strokeLinecap="round"
                      strokeOpacity="0.94"
                      strokeWidth="2.3"
                    >
                      <line x1="0" x2="0" y1="0" y2="-8.8" />
                      <line x1="0" x2="7.6" y1="0" y2="-4.4" />
                      <line x1="0" x2="7.2" y1="0" y2="5.2" />
                      <line x1="0" x2="-1.4" y1="0" y2="8.6" />
                      <line x1="0" x2="-8.4" y1="0" y2="3.6" />
                      <line x1="0" x2="-7.4" y1="0" y2="-4.8" />
                    </g>
                    <circle cx="0" cy="0" fill="white" r="3.1" />
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
