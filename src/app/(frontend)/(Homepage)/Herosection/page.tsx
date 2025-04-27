"use client";
import type React from "react";
import InfiniteScroll from "../HomepageSection1/InfiniteScroll";
import Link from "next/link";
import { useState } from "react";
import TypewriterEffect from "../../../../components/TypewriterEffect/page";

const Herosection: React.FC = () => {
  const text =
    " In my Work, I strive to blend innovation with functionality,delivering high-quality digital experiences that leave an impact";
  const [isProjectButtonHovered, setIsProjectButtonHovered] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-b from-[#a18cd1]/80 via-[#fbc2eb]/40 backdrop-blur-md flex flex-col lg:flex-row min-h-[450px] h-auto lg:h-[650px] w-full">
        {/* Left Section - Large Title */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="flex flex-col text-7xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl mb-6 sm:mb-8 md:mb-12 lg:mb-16 lg:ml-16 font-light tracking-tighter text-black">
            <div className="flex">
              <TypewriterEffect
                words={["Fullstack", "Software"]}
                className="flex"
                initialDelay={2000}
                typingSpeed={150}
                deletingSpeed={80}
                pauseTime={1000}
                cycleOnce={true}
                cursorClassName="mt-1 sm:mt-2 lg:mt-3"
              />
            </div>
            <span className="pl-6 sm:pl-10 md:pl-16 lg:pl-20">Developer</span>
          </h1>
        </div>
        {/* Right Section - Image overlay on vertical text */}
        <div className="flex-1 relative">
          {/* Image section overlaying the text with slight transparency */}
          <div className="flex flex-col h-full w-full relative z-10">
            <div className=" bg-none bottom-0 w-[28rem] h-[32rem] mt-8">
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
        <div className="w-full m-2 sm:m-3 md:m-4 p-3 sm:p-4 md:p-6 bg-gradient-to-br from-[#d1fae5]/60 via-[#a7f3d0]/50 to-[#d1fae5]/60 backdrop-blur-md overflow-hidden relative">
          <div className="flex items-center h-full">
            <InfiniteScroll text={text} />
          </div>
          <div className="absolute bottom-3 right-3">
            <Link href="/Projects">
              <button
                onMouseEnter={() => setIsProjectButtonHovered(true)}
                onMouseLeave={() => setIsProjectButtonHovered(false)}
                className={`transition-all duration-300 ease-in-out px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 font-semibold text-xs sm:text-sm border-2 border-black 
                    ${
                      isProjectButtonHovered
                        ? "bg-[#a78bfa]/10 backdrop-blur-md shadow-[2px_2px_0px_0px_rgba(147,51,234,0.7)] sm:shadow-[3px_3px_0px_0px_rgba(147,51,234,0.7)] md:shadow-[4px_4px_0px_0px_rgba(147,51,234,0.7)]"
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

export default Herosection;
