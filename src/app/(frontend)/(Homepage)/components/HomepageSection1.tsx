"use client";

import React from "react";
import { useState } from "react";
import InfiniteScroll from "../HomepageSection1/InfiniteScroll";
import Link from "next/link";

const HomepageSection1 = () => {
  const text =
    " In my Work, I strive to blend innovation with functionality,delivering high-quality digital experiences that leave an impact";
  const [isProjectButtonHovered, setIsProjectButtonHovered] = useState(false);
  return (
    <>
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

export default HomepageSection1;
