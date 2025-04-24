"use client";

import { motion } from "framer-motion";

export default function RouteTransition({
  direction,
}: {
  direction: "up" | "down";
}) {
  const variants = {
    up: {
      initial: { y: "100%" },
      animate: { y: "0%" },
      exit: { y: "-100%" },
    },
    down: {
      initial: { y: "-100%" },
      animate: { y: "0%" },
      exit: { y: "100%" },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#212121] z-[9999]"
      initial={variants[direction].initial}
      animate={variants[direction].animate}
      exit={variants[direction].exit}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    />
  );
}
