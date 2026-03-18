"use client";
import { motion, type Transition, type Easing } from "framer-motion";

/* ---------------- Types ---------------- */

interface LoaderTextProps {
  text?: string;
}

interface LoaderFiveProps {
  text: string;
}

/* ---------------- Loader One ---------------- */

export const LoaderOne = () => {
  const transition = (x: number): Transition => ({
    duration: 1,
    repeat: Infinity,
    repeatType: "loop",
    delay: x * 0.2,
    ease: "easeInOut" as Easing,
  });

  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={transition(i)}
          className="h-4 w-4 rounded-full border border-neutral-300 bg-linear-to-b from-neutral-400 to-neutral-300"
        />
      ))}
    </div>
  );
};

/* ---------------- Loader Two ---------------- */

export const LoaderTwo = () => {
  const transition = (x: number) => ({
    duration: 2,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay: x * 0.2,
    ease: "easeInOut" as Easing,
  });

  return (
    <div className="flex items-center">
      {[0, 0.4, 0.8].map((i, idx) => (
        <motion.div
          key={idx}
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={transition(i)}
          className="h-4 w-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500"
        />
      ))}
    </div>
  );
};

/* ---------------- Loader Three ---------------- */

export const LoaderThree = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-20 w-20 stroke-neutral-500 dark:stroke-neutral-100"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
      />
    </motion.svg>
  );
};

/* ---------------- Loader Four ---------------- */

export const LoaderFour = ({ text = "Loading..." }: LoaderTextProps) => {
  return (
    <div className="relative font-bold text-black dark:text-white">
      <motion.span
        animate={{ skewX: [0, -40, 0], scaleX: [1, 2, 1] }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          ease: "linear",
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

/* ---------------- Loader Five ---------------- */

export const LoaderFive = ({ text }: LoaderFiveProps) => {
  return (
    <div className="font-sans font-bold">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.05,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};
