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
    <motion.div ref={sectionRef} className="flex mt-5 gap-10 h-[36rem] w-full">
      <div className="flex w-96">
        <motion.div
          className="flex flex-col ml-10"
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
      <div className="flex-1 w-full mt-5 mr-10 p-6">
        <div className="grid grid-cols-7 grid-rows-4 gap-4 h-full w-full">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 bg-white p-2 cursor-pointer group"
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
                className="flex items-center justify-center h-10"
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Icon icon={tech.icon} width="40" height="40" />
              </motion.div>
              <motion.div className="mt-2 text-xs font-medium text-gray-500 group-hover:text-violet-700 transition-colors duration-300">
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
