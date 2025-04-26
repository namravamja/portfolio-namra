"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutSection2 = () => {
  const { scrollY } = useScroll();

  const textY = useTransform(scrollY, [0, 400], ["100%", "0%"]);

  const textOpacity = useTransform(scrollY, [0, 150, 300], [0, 1, 0.6]);

  const specialCharsZIndex = useTransform(
    scrollY,
    [0, 100, 200, 300, 350, 400],
    [0, 1, 3, 8, 15, 20]
  );

  const specialCharsScale = useTransform(
    scrollY,
    [0, 200, 350, 400],
    [1, 1, 1.1, 1.15]
  );

  const specialCharsRotate = useTransform(scrollY, [200, 400], [0, 5]);

  return (
    <div className="w-full h-96 relative ">
      <div className="text-9xl text-center mt-3 absolute w-full flex justify-center">
        <motion.span
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          S
        </motion.span>

        <motion.span
          style={{
            y: textY,
            zIndex: specialCharsZIndex,
            opacity: textOpacity,
            position: "relative",
            scale: specialCharsScale,
            rotate: specialCharsRotate,
            transformOrigin: "center",
          }}
        >
          k
        </motion.span>

        <motion.span
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          ill
        </motion.span>

        <motion.span
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          &nbsp;
        </motion.span>

        <motion.span
          style={{
            y: textY,
            opacity: textOpacity,
            zIndex: specialCharsZIndex,
            position: "relative",
            scale: specialCharsScale,
            rotate: specialCharsRotate,
            transformOrigin: "center",
          }}
        >
          S
        </motion.span>

        <motion.span
          style={{
            y: textY,
            opacity: textOpacity,
          }}
        >
          tack
        </motion.span>
      </div>

      <div className="backdrop-blur-md w-full absolute top-26 z-10">
        <div className="grid grid-rows-3 grid-cols-12 gap-4 px-10">
          <div className="col-span-3 h-24 bg-gray-300"></div>
          <div className="col-start-4 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-5 h-24 bg-gray-300"></div>
          <div className="col-span-3 col-start-7 h-24 bg-gray-300"></div>
          <div className="col-start-10 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-11 h-24 bg-gray-300"></div>
          <div className="col-span-2 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-span-3 col-start-3 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-6 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-8 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-start-12 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-10 row-start-2 h-24 bg-gray-300"></div>
          <div className="col-span-3 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-start-4 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-start-5 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-start-6 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-span-2 col-start-7 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-span-3 col-start-9 row-start-3 h-24 bg-gray-300"></div>
          <div className="col-start-12 row-start-3 h-24 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
