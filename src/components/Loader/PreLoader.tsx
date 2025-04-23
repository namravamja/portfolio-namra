"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = ["Hello from Namra!!!", "नमस्ते", "Bonjour", "Hola", "નમસ્તે"];

const gradients = [
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-blue-500",
  "from-green-400 to-cyan-400",
  "from-orange-400 to-red-500",
  "from-fuchsia-500 to-lime-500",
];

// First message displays for 600ms
// Remaining messages get 200ms each
const getDisplayTime = (index: number) => {
  return index === 0 ? 600 : 200;
};

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader = ({ onFinish }: PreloaderProps) => {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (index < messages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, getDisplayTime(index));
      return () => clearTimeout(timer);
    } else {
      // When we've shown the last message, mark as complete and prepare for exit animation
      const doneTimer = setTimeout(() => {
        setIsComplete(true);
        // Give the exit animation time to complete before calling onFinish
        setTimeout(onFinish, 800);
      }, getDisplayTime(index));
      return () => clearTimeout(doneTimer);
    }
  }, [index, onFinish]);

  return (
    <AnimatePresence>
      {!isComplete ? (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }} // Custom easing for smoother motion
          className="bg-[#212121] fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50"
        >
          <div className="text-center px-6 py-8">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${gradients[index]} leading-relaxed`}
            >
              {messages[index]}
            </motion.h1>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Preloader;