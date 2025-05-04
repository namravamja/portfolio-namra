import TypewriterEffect from "@/components/TypewriterEffect";
import { generatePageMetadata } from "@/utils/metadata";
import React from "react";

const Blog = () => {
  return (
    <div className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b lg:flex-row w-full from-red-400/60 via-red-200/60 backdrop-blur-md z-0"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight text-center">
            <TypewriterEffect
              words={["Blog"]}
              className="flex"
              initialDelay={1000}
              typingSpeed={150}
              deletingSpeed={80}
              pauseTime={1000}
              cycleOnce={true}
              cursorClassName="mt-1 sm:mt-2 lg:mt-3"
            />
          </h1>

          <div className="mt-12 mb-24 text-center">
            <div className="inline-block border-2 border-slate-800 rounded-lg px-6 py-4 bg-white/50 backdrop-blur-sm shadow-lg">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
                Work in Progress...
              </h2>
              <p className="text-xl md:text-2xl text-slate-700">
                Cooking up some exciting content for you! Stay tuned for
                updates.
              </p>
              <p className="text-lg text-slate-600 mt-4">
                Check back soon for exciting new content!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const metadata = generatePageMetadata("Blog");
export default Blog;
