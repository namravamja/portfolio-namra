"use client";

import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[300px] overflow-hidden mt-20 relative">
        <div className="flex justify-center flex-col h-full">
          {/* Wave SVG - preserved */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full absolute top-0"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white drop-shadow-lg"
            ></path>
          </svg>

          {/* Left section - adjusted for responsiveness */}
          <div className="absolute flex flex-col pl-4 pb-8 font-bold text-sm sm:text-base z-10 md:pl-8 lg:pl-12">
            <span className="">NAMRA VAMJA</span>
            <p className="text-[10px] sm:text-xs font-light tracking-wider">
              © 2025 Namra. Designed with 💜 for modern web.
            </p>
            <div className="flex space-x-3 sm:space-x-4 mt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Icon
                  icon="skill-icons:instagram"
                  className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition duration-300"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icon
                  icon="logos:twitter"
                  className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition duration-300"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon
                  icon="logos:github-icon"
                  className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition duration-300"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon
                  icon="skill-icons:linkedin"
                  className="w-4 h-4 sm:w-5 sm:h-5 hover:scale-110 transition duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right section - adjusted for responsiveness */}
          <div className="flex flex-col absolute items-end pr-4 sm:pr-10 pt-8 sm:pt-12 w-full md:pr-16 lg:pr-24">
            <p className="text-xs sm:text-sm">namravamja00@gmail.com</p>
            <span className="text-[10px] sm:text-xs font-light">
              +91 7984783982
            </span>
          </div>

          {/* Bottom gradient text - adjusted for responsiveness */}
          <div className="w-full flex justify-center overflow-hidden absolute bottom-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#a18cd1] via-[#f8b1e4] to-[#a18cd1] font-semibold opacity-40 whitespace-nowrap transform translate-y-1/4">
              The END is Beginning
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
