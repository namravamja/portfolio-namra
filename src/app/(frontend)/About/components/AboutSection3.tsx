"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { motion, useInView } from "framer-motion";

const AboutSection3 = () => {
  const technologies = [
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

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <motion.div
      ref={sectionRef}
      className="flex flex-col lg:flex-row mt-5 gap-5 lg:gap-10 h-auto lg:h-[36rem] w-full px-4 md:px-8 lg:px-12"
    >
      {/* Title section */}
      <div className="flex w-full lg:w-96 justify-center lg:justify-start mb-6 lg:mb-0">
        <motion.div
          className="flex flex-col items-center lg:items-start lg:ml-10"
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

      {/* Skills grid */}
      <div className="flex-1 w-full p-2 md:p-4 lg:p-6 lg:mt-5 lg:mr-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-3 lg:gap-4 h-full w-full">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 bg-white p-1 md:p-2 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{
                duration: 0.4,
                delay: 0.05 * index,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.2)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="flex items-center justify-center h-8 md:h-10"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Icon
                  icon={tech.icon}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                />
              </motion.div>
              <motion.div className="mt-1 md:mt-2 text-[0.6rem] sm:text-xs font-medium text-gray-500 group-hover:text-violet-700 transition-colors duration-300 text-center truncate w-full px-1">
                {tech.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection3;
