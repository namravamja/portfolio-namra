"use client";
import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

const ProjectSection1: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b lg:flex-row w-full from-blue-400/60 via-blue-200/60 backdrop-blur-md z-0"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight text-center">
            <TypewriterEffect
              words={["Projects"]}
              className="flex"
              initialDelay={1000}
              typingSpeed={150}
              deletingSpeed={80}
              pauseTime={1000}
              cycleOnce={true}
              cursorClassName="mt-1 sm:mt-2 lg:mt-3"
            />
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 text-center max-w-2xl">
            Explore my work showcasing a blend of creativity, functionality, and
            modern technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection1;
