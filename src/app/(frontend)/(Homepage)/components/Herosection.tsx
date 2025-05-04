import Image from "next/image";
import TypewriterEffect from "../../../../components/TypewriterEffect";

const Herosection: React.FC = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#a18cd1]/80 via-[#fbc2eb]/40 backdrop-blur-md flex flex-col lg:flex-row min-h-[450px] h-auto lg:h-[650px] w-full">
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
            <span className="text-6xl sm:text-7xl md:text-9xl lg:text-9xl xl:text-9xl pl-14 sm:pl-10 md:pl-16 lg:pl-20">
              Developer
            </span>
          </h1>
        </div>
        <div className="flex-1 relative">
          <div className="flex flex-col h-full w-full relative z-10">
            <Image
              src="/photoo.png"
              alt="Portrait of Namra"
              width={600}
              height={600}
              className="object-cover opacity-90"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
