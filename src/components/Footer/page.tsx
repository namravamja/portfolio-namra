import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto overflow-hidden mt-20 relative">
        <div className="flex justify-center flex-col">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white drop-shadow-sm"
            ></path>
          </svg>

          <div className="absolute flex flex-col pl-4 pb-14 font-bold text-base z-10">
            <span className="">NAMRA VAMJA</span>
            <p className="text-xs font-light tracking-wider">
              © 2025 Namra. Designed with 💜 for modern web.
            </p>
            <div className="flex space-x-4 mt-1 text-lg text-gray-600">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-purple-600 transition duration-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-purple-600 transition duration-300" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-purple-600 transition duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:text-purple-600 transition duration-300" />
              </a>
            </div>
          </div>

          <div className="flex flex-col absolute items-end pr-10 pt-12 w-full">
            <p className="text-sm">namravamja00@gmail.com</p>
            <span className="text-xs font-light">+91 7984783982</span>
          </div>

          <div className="w-full flex justify-center">
            <h1 className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#a18cd1] via-[#f8b1e4] to-[#a18cd1] font-semibold opacity-40 whitespace-nowrap relative -bottom-10">
              The END is Beginning
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
