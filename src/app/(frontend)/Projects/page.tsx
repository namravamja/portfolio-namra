"use client";
import type React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Layers } from "lucide-react";
import TypewriterEffect from "../../../components/TypewriterEffect/page";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const Projects: React.FC = () => {
  // Projects array - you can add more projects here in the future
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online shopping platform with cart functionality and payment integration.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing skills and projects with modern design.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      imageUrl: "/placeholder.svg?height=400&width=600",
      projectUrl: "https://example.com/project3",
    },
  ];

  // State for hover effects
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const techBadgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b lg:flex-row w-full from-blue-400/60 via-blue-200/60 backdrop-blur-md z-0"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tight text-center">
              <TypewriterEffect
                words={["Projects"]}
                className="flex"
                initialDelay={1000}
                typingSpeed={150}
                deletingSpeed={80}
                pauseTime={1000}
                cycleOnce={true}
                cursorClassName="mt-1 sm:mt-2 lg:mt-3"
              />
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 text-center max-w-2xl">
              Explore my work showcasing a blend of creativity, functionality,
              and modern technology
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        className="container mx-auto px-4 md:px-8 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group"
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 hover:border-slate-300 hover:translate-y-[-4px]">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* View project button that appears on hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Link
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.div
                        className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-slate-900" />
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Project icon */}
                  <div className="mb-4 p-3 bg-slate-100 rounded-xl w-fit">
                    {project.id === 1 ? (
                      <Layers className="w-5 h-5 text-slate-700" />
                    ) : project.id === 2 ? (
                      <Code2 className="w-5 h-5 text-slate-700" />
                    ) : (
                      <ExternalLink className="w-5 h-5 text-slate-700" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        variants={techBadgeVariants}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
