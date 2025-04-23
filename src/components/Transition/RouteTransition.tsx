"use client";

import { motion } from "framer-motion";

export default function RouteTransition() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#212121] z-[9999]"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.4, // Adjusted duration
        ease: [0.25, 0.46, 0.45, 0.94], // Ease for a smoother animation
      }}
    />
  );
}
