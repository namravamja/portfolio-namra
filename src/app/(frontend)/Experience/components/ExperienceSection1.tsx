"use client";

import TypewriterEffect from "@/components/TypewriterEffect";

const ExperienceSection1 = () => {
  return (
    <div className="relative py-20 md:py-32 bg-gradient-to-b from-[#d1a1c8]/80 via-[#f7c7ec]/40 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tight text-center">
            <TypewriterEffect
              words={["Experiences"]}
              className="flex"
              initialDelay={1000}
              typingSpeed={150}
              deletingSpeed={80}
              pauseTime={1000}
              cycleOnce
              cursorClassName="mt-1 sm:mt-2 lg:mt-3"
            />
          </h1>
          <p className="text-xl text-black&#47;70 md:text-2xl text-center max-w-2xl mb-6">
            Discover my professional journey, highlighting the skills, roles,
            and impactful contributions I&apos;ve made along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection1;
