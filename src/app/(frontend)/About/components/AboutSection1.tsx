import TypewriterEffect from "../../../../components/TypewriterEffect";
import { FaFileAlt, FaLaptopCode } from "react-icons/fa";

function AboutSection1() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-violet-300/30 blur-xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-violet-400/20 blur-lg hidden lg:block" />

      <div
        className="bg-gradient-to-b from-violet-400/70 via-violet-200/90 backdrop-blur-md
        flex flex-col lg:flex-row min-h-[500px] lg:h-[650px] w-full relative pb-16 lg:pb-8"
      >
        {/* Left Section - Title */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <h1 className="flex flex-col text-center text-7xl sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl mb-4 md:mb-6 lg:mb-12 ml-2 sm:ml-6 lg:ml-12 font-light tracking-tighter text-black">
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
            <span className="pl-16 sm:pl-16 md:pl-12 lg:pl-24">My self</span>
          </h1>
        </div>

        {/* Right Section - Bio */}
        <div className="flex-1 mt-4 lg:mt-0">
          <div className="flex flex-col h-full w-full justify-center">
            <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-16 text-justify pr-2 sm:pr-4 md:pr-6 lg:pr-8">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 md:mb-6 font-semibold">
                Hey there, I'm Namra Vamja!
              </p>
              <div className="text-black/70 text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                <p className="leading-relaxed">
                  <span className="text-black font-medium">
                    Full Stack Developer
                  </span>{" "}
                  passionate about crafting clean, intuitive web experiences.
                </p>

                <p className="leading-relaxed">
                  My tech stack includes{" "}
                  <span className="text-black">React, Next.js</span> on the
                  frontend with{" "}
                  <span className="text-black">Node.js, Express</span> powering
                  the backend.
                </p>

                <p className="leading-relaxed">
                  I transform complex problems into elegant solutions through
                  code, constantly exploring new technologies to stay ahead.
                </p>

                <div className="hidden xs:block sm:block pt-1 sm:pt-2">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <FaLaptopCode className="text-violet-700" />
                    <span className="text-black/80 text-sm sm:text-base">
                      "Great software combines artistry with innovation"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume button */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 right-4 sm:right-6 md:right-8 lg:right-16">
          <a
            href="/photoo.png"
            download="NamraResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button
              className="bg-[#b5f2d6] transition-all duration-300 ease-in-out px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 
                font-semibold text-xs sm:text-sm border-2 border-black flex items-center gap-1 sm:gap-2 
                hover:bg-violet-200 hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-y-[-2px] hover:cursor-pointer"
            >
              <FaFileAlt className="text-sm sm:text-base md:text-lg" /> My
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutSection1;
