"use client";
import type React from "react";
import InfiniteScroll from "./section1/InfiniteScroll";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Homepage: React.FC = () => {
  const text =
    " In my Work, I strive to blend innovation with functionality,delivering high-quality digital experiences that leave an impact";
  const [isProjectButtonHovered, setIsProjectButtonHovered] = useState(false);

  // Typewriter animation states
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<
    "initial" | "typing1" | "deleting" | "typing2" | "complete"
  >("initial");
  const [cursorVisible, setCursorVisible] = useState(true);

  // Words to display
  const firstWord = "Fullstack";
  const secondWord = "Software";

  // Handle typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const speeds = {
      typing: 150,
      deleting: 80,
      pause: 1000,
      initialDelay: 2000, // 2-second delay before starting animation
    };

    switch (phase) {
      case "initial":
        // Initial delay before starting animation
        timeout = setTimeout(() => {
          setPhase("typing1");
        }, speeds.initialDelay);
        break;

      case "typing1":
        if (displayText.length < firstWord.length) {
          timeout = setTimeout(() => {
            setDisplayText(firstWord.substring(0, displayText.length + 1));
          }, speeds.typing);
        } else {
          // Pause before starting to delete
          timeout = setTimeout(() => {
            setPhase("deleting");
          }, speeds.pause);
        }
        break;

      case "deleting":
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }, speeds.deleting);
        } else {
          // Short pause before starting to type the second word
          timeout = setTimeout(() => {
            setPhase("typing2");
          }, speeds.typing);
        }
        break;

      case "typing2":
        if (displayText.length < secondWord.length) {
          timeout = setTimeout(() => {
            setDisplayText(secondWord.substring(0, displayText.length + 1));
          }, speeds.typing);
        } else {
          setPhase("complete");
        }
        break;

      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayText, phase]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-[#a18cd1]/70 via-[#fbc2eb]/60 to-[#a18cd1]/70 backdrop-blur-md shadow-xl flex flex-col lg:flex-row h-[650px] w-full">
        {/* Left Section - Large Title */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="flex flex-col text-6xl lg:text-9xl mb-16 ml-16 font-light tracking-tighter text-black">
            <div className="flex">
              <motion.span>{displayText}</motion.span>
              <span
                className={`${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity`}
              >
                <div className="mt-3">/</div>
              </span>
            </div>
            <span className="pl-20">Developer</span>
          </h1>
        </div>
        {/* Right Section - Image overlay on vertical text */}
        <div className="flex-1 relative">
          {/* Image section overlaying the text with slight transparency */}
          <div className="flex flex-col h-full w-full relative z-10">
            <div className="absolute bg-none bottom-0 w-[28rem] h-[32rem] mt-16 ml-7">
              <img
                src="/photoo.png"
                alt="Portrait of Namra"
                className="object-cover opacity-90"
              />
            </div>
            {/* Text overlay on bottom right */}
            <div className="absolute bottom-5 right-8 text-right z-20">
              <p className="flex flex-col text-base font-extralight">
                <span className="font-bold">Namaste, I'm Namra, </span>
                <span>A Full Stack Web Developer</span>
                <span>Crafting Seamless & Scalable</span>
                <span>Web Experiences with Modern Tech.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 with Infinite Scrolling using Framer Motion */}
      <div className="w-full h-52 sm:h-64 md:h-72 lg:h-96 flex">
        <div className="w-full m-2 sm:m-3 md:m-4 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#d1fae5]/60 via-[#a7f3d0]/50 to-[#d1fae5]/60 backdrop-blur-md overflow-hidden">
          <div className="flex items-center h-full">
            <InfiniteScroll text={text} />
          </div>
          <div className="absolute bottom-3 right-3">
            <Link href="/Projects">
              <button
                onMouseEnter={() => setIsProjectButtonHovered(true)}
                onMouseLeave={() => setIsProjectButtonHovered(false)}
                className={`transition-all duration-300 ease-in-out px-4 py-3 font-semibold text-sm border-2 border-black 
                    ${
                      isProjectButtonHovered
                        ? "bg-[#a78bfa]/10 backdrop-blur-md shadow-[4px_4px_0px_0px_rgba(147,51,234,0.7)]"
                        : "bg-[#c4b5fd]/80 backdrop-blur-sm"
                    }`}
              >
                My Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
