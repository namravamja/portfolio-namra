"use client";

import { useState } from "react";
import TypewriterEffect from "@/components/TypewriterEffect";
import { motion } from "framer-motion";
import BackgroundCircles from "../../../../components/Circles/BackgroundCircles";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const [isHovering, setIsHovering] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-screen py-20 md:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b w-full from-[#d3f9d8]/90 via-[#b5f2b2]/40 to-white backdrop-blur-md z-0" />

      {/* Floating circles */}
      <BackgroundCircles />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight text-center">
              <TypewriterEffect
                words={["Let's Connect"]}
                className="flex"
                cursorClassName="mt-1 sm:mt-2 lg:mt-3"
                initialDelay={350}
                typingSpeed={200}
                cycleOnce={true}
              />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 text-center max-w-2xl mb-16">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Let's Collaborate Section */}
              <ContactInfo
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />

              {/* Message Form Section */}
              <ContactForm
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
