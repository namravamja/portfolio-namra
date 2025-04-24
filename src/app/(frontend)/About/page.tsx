"use client";

import React, { useState } from "react";
import TypewriterEffect from "../../../components/TypewriterEffect/page";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";

function About() {
  const [isResumeButtonHovered, setIsResumeButtonHovered] = useState(false);

  return (
    <>
      <div
        className="bg-gradient-to-br from-violet-300/90 via-violet-200/60 to-violet-300/90 backdrop-blur-md
        flex flex-col lg:flex-row h-[650px] w-full relative"
      >
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="flex flex-col text-6xl lg:text-9xl mb-16 ml-16 font-light tracking-tighter text-black">
            <div className="flex">
              <TypewriterEffect
                words={["About"]}
                className="flex"
                cursorClassName="mt-3"
                initialDelay={350}
                typingSpeed={200}
                cycleOnce={true}
              />
            </div>
            <span className="pl-30">My self</span>
          </h1>
        </div>

        <div className="flex-1">
          <div className="flex flex-col h-full w-full">
            <div className="m-20 h-full text-justify pr-5 ">
              <p className="text-3xl mb-6 font-semibold ">
                Hey there, I'm Namra Vamja !
              </p>
              <div className="text-black/70 text-lg">
                <p className=" leading-relaxed  mb-4">
                  Full Stack Developer focused on building clean and modern web
                  apps.
                </p>

                <p className=" leading-relaxed mb-4">
                  I work with <span className="text-black">React, Next JS</span>{" "}
                  with other libraries on the frontend and{" "}
                  <span className="text-black">Node.js, Express, MongoDB</span>{" "}
                  on the backend.
                </p>

                <p className=" leading-relaxed  mb-4">
                  I enjoy solving real-world problems{" "}
                  <span className="text-black">through my code</span> and
                  constantly learning to push my skills further.
                </p>

                <p className=" leading-relaxed  mb-4">
                  Passionate about <span className="font-semibold">AI</span> and
                  improving user experience through smart tech.
                </p>

                <p className=" leading-relaxed ">
                  When I'm not working on a projects, you'll find me{" "}
                  <span className="font-semibold">
                    exploring new tech trends
                  </span>
                  <span className="font-semibold"></span>, or sketching out
                  ideas for my next build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume button */}
        <div className="absolute bottom-8 right-25">
          <a
            href="/photoo.png"
            download="NamraResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onMouseEnter={() => setIsResumeButtonHovered(true)}
              onMouseLeave={() => setIsResumeButtonHovered(false)}
              className={`transition-all duration-300 ease-in-out px-4 py-3 font-semibold text-sm border-2 border-black flex items-center gap-2
                  ${
                    isResumeButtonHovered
                      ? "backdrop-blur-md shadow-[4px_4px_0px_0px_#b5f2d6] cursor-pointer"
                      : " bg-[#b5f2d6]"
                  }`}
            >
              <FaFileAlt className="text-lg" /> My Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
