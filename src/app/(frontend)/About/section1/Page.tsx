import TypewriterEffect from "../../../../components/TypewriterEffect/page";
import { FaFileAlt } from "react-icons/fa";

function AboutSection1() {
  return (
    <>
      <div
        className="bg-gradient-to-b from-violet-400/70 via-violet-200/100 backdrop-blur-md
        flex flex-col lg:flex-row h-auto min-h-[500px] lg:h-[650px] w-full relative pb-20 lg:pb-8"
      >
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-16 flex flex-col justify-center">
          <h1 className="flex flex-col text-7xl sm:text-7xl md:text-7xl lg:text-9xl mb-8 md:mb-12 lg:mb-16 ml-4 sm:ml-8 md:ml-12 lg:ml-16 font-light tracking-tighter text-black">
            <div className="flex">
              <TypewriterEffect
                words={["About"]}
                className="flex"
                cursorClassName="mt-1 sm:mt-2 lg:mt-3"
                initialDelay={350}
                typingSpeed={200}
                cycleOnce={true}
              />
            </div>
            <span className="pl-8 sm:pl-16 md:pl-24 lg:pl-30">My self</span>
          </h1>
        </div>

        <div className="flex-1">
          <div className="flex flex-col h-full w-full">
            <div className="m-6 sm:m-10 md:m-16 lg:m-20 h-full text-justify pr-2 sm:pr-3 md:pr-4 lg:pr-5">
              <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 font-semibold">
                Hey there, I'm Namra Vamja !
              </p>
              <div className="text-black/70 text-base sm:text-lg">
                <p className="leading-relaxed mb-3 sm:mb-4">
                  Full Stack Developer focused on building clean and modern web
                  apps.
                </p>

                <p className="leading-relaxed mb-3 sm:mb-4">
                  I work with <span className="text-black">React, Next JS</span>{" "}
                  with other libraries on the frontend and{" "}
                  <span className="text-black">Node.js, Express, MongoDB</span>{" "}
                  on the backend.
                </p>

                <p className="leading-relaxed mb-3 sm:mb-4">
                  I enjoy solving real-world problems{" "}
                  <span className="text-black">through my code</span> and
                  constantly learning to push my skills further.
                </p>

                <p className="leading-relaxed mb-3 sm:mb-4">
                  Passionate about AI and improving user experience through
                  smart tech.
                </p>

                <p className="leading-relaxed">
                  When I'm not working on a projects, you'll find me exploring
                  new tech trends, or sketching out ideas for my next build.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume button */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-8 md:right-16 lg:right-25">
          <a
            href="/photoo.png"
            download="NamraResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={`bg-[#b5f2d6] transition-all duration-300 ease-in-out px-3 py-2 sm:px-4 sm:py-3 font-semibold text-xs sm:text-sm border-2 border-black flex items-center gap-1 sm:gap-2 hover:bg-violet-200 hover:shadow-[4px_4px_0px_0px_#000000] hover:cursor-pointer`}
            >
              <FaFileAlt className="text-base sm:text-lg" /> My Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutSection1;
