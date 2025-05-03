"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function EducationTimeline() {
  const educationItems = [
    {
      year: "2019-2020",
      degree: "10th SSC",
      institution: "Oxford School Of Science, Amreli, Gujarat",
      score: "96.65 PR",
    },
    {
      year: "2021-2022",
      degree: "12th HSC",
      institution: "Oxford School Of Science, Amreli, Gujarat",
      score: "90 PR",
    },
    {
      year: "2022-2026",
      degree: "B.TECH With Information Technology",
      institution:
        "Birla Vishvakarma Mahavidyalaya Engineering College, Vallabh Vidyanagar, Gujarat",
      score: "7.7 CGPA",
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const progressControls = useAnimation();
  const itemsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Animate progress bar
      progressControls.start({
        height: "calc(100% - 48px)",
        transition: { duration: 1.2, ease: "easeOut" },
      });

      // Animate items
      itemsControls.start((i) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.3 + i * 0.2,
          ease: "easeOut",
        },
      }));
    } else {
      progressControls.start({
        height: 0,
        transition: { duration: 0.3 },
      });

      itemsControls.start({
        opacity: 0,
        x: -20,
        transition: { duration: 0.3 },
      });
    }
  }, [isInView, progressControls, itemsControls]);

  return (
    <>
      <div
        ref={sectionRef}
        className="flex mt-15 gap-10 h-full w-full flex-col md:flex-row"
      >
        <div className="flex w-full md:w-96">
          <motion.div
            className="flex flex-col ml-4 md:ml-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-5xl md:text-7xl lg:text-8xl font-bold text-black/10 leading-none">
              What i
            </p>
            <p className="text-6xl md:text-8xl lg:text-9xl font-bold text-violet-900/70 leading-none">
              Study??
            </p>
          </motion.div>
        </div>
        <div className="flex-1 w-full mt-10">
          <div className="relative h-full">
            <div className="space-y-8 md:w-full lg:w-3/4 relative py-4 ml-5 md:ml-20 lg:ml-5">
              <motion.div
                className="absolute left-0 top-6 w-0.5 bg-violet-800 rounded-full origin-top"
                initial={{ height: 0 }}
                animate={progressControls}
              />

              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative pl-12"
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={itemsControls}
                >
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="w-6 h-6 bg-violet-900/70 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg border border-violet-300 transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 pr-2">
                        <span className="text-sm text-violet-500 font-medium">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-violet-800">
                          {item.degree}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.institution}
                        </p>
                      </div>
                      <motion.div
                        className="bg-violet-100 rounded-full px-3 py-1 min-w-16 text-center shrink-0"
                        initial={{ scale: 0.8 }}
                        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
                        transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
                      >
                        <span className="text-violet-700 font-medium text-xs">
                          {item.score}
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationTimeline;
