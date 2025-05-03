"use client";

import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Technology {
  name: string;
  icon: string;
}

const AboutSection3 = () => {
  const technologies: Technology[] = [
    { name: "C++", icon: "logos:c-plusplus" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "SQL", icon: "logos:mysql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Mongoose", icon: "devicon:mongoose" },
    { name: "Express.js", icon: "logos:express" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "postgresql", icon: "devicon:postgresql" },
    { name: "SQLite", icon: "logos:sqlite" },
    { name: "ASP.NET", icon: "logos:dotnet" },
    { name: "C#", icon: "logos:c-sharp" },
    { name: "Java", icon: "logos:java" },
    { name: "Kotlin", icon: "logos:kotlin" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Framer Motion", icon: "logos:framer" },
    { name: "PHP", icon: "logos:php" },
    { name: "VS code", icon: "vscode-icons:file-type-vscode" },
    { name: "Visual Studio", icon: "logos:visual-studio" },
    { name: "Android Studio", icon: "devicon:androidstudio" },
    { name: "Vite", icon: "logos:vitejs" },
    { name: "GitHub", icon: "logos:github-icon" },
    { name: "Git", icon: "logos:git-icon" },
    { name: "RTK", icon: "devicon:redux" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollability);
      checkScrollability();
      window.addEventListener("resize", checkScrollability);
      return () => {
        scrollContainer.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -600 : 600;
    scrollContainerRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col lg:items-center lg:justify-center md:items-center md:justify-center md:flex-row gap-5 md:gap-10 min-h-[36rem] w-full relative"
    >
      <div className="flex w-full md:w-auto md:min-w-[200px] lg:min-w-[250px] xl:w-96 mb-4 mr-10 md:mb-0">
        <motion.div
          className="flex flex-col ml-7 lg:mt-0 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-black/10 leading-none">
            Skill
          </p>
          <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-violet-900/70 leading-none">
            Stack
          </p>
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 md:left-1/3 lg:left-1/4 right-0 flex justify-between px-2 md:px-4 z-10 pointer-events-none">
        <motion.button
          onClick={() => scroll("left")}
          className={`p-2 rounded-full bg-violet-900/30 backdrop-blur-sm shadow-md hover:bg-violet-900/20 transition-all duration-300 pointer-events-auto ${
            !canScrollLeft ? "opacity-0" : "opacity-100"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6 text-violet-900" />
        </motion.button>

        <motion.button
          onClick={() => scroll("right")}
          className={`p-2 rounded-full bg-violet-900/30 backdrop-blur-sm shadow-md hover:bg-violet-900/20 transition-all duration-300 pointer-events-auto ${
            !canScrollRight ? "opacity-0" : "opacity-100"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6 text-violet-900" />
        </motion.button>
      </div>

      {/* Scrollable Skills Grid */}
      <div className="flex-1 w-full mt-10 px-4 md:pr-10 md:pl-0 overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto pb-6 scrollbar-none"
        >
          <div className="grid grid-flow-col grid-rows-3 auto-cols-max gap-4 min-w-max">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 bg-white p-2 cursor-pointer group w-[80px] sm:w-[90px] md:w-[100px] h-[80px] sm:h-[90px] md:h-[100px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.05 * (index % 10),
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  className="flex items-center justify-center h-10"
                  initial={{ rotateY: 0 }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon icon={tech.icon} width="40" height="40" />
                </motion.div>
                <motion.div className="mt-2 text-xs font-medium text-gray-500 group-hover:text-violet-700 transition-colors duration-300 text-center">
                  {tech.name}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection3;
