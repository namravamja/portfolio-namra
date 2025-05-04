"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, Layers } from "lucide-react";

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

const ProjectSection2: React.FC = () => {
  // Projects array
  const projects: Project[] = [
    {
      id: 1,
      title: "Red+ : Your Blood, On Demand",
      description:
        "A blood management system which connects donors, seekers, event organizers, and blood banks with new features.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "RTK Query",
        "MongoDB",
        "Express",
        "Node.js",
        "Couldinary",
      ],
      imageUrl: "/project1.png",
      projectUrl: "https://example.com/project1",
    },
    {
      id: 2,
      title: "My Portfolio Website",
      description:
        "A personal portfolio website showcasing skills and projects with modern design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/project2.png",
      projectUrl: "namravamja.info",
    },
    {
      id: 3,
      title: "Multi Shop E-commerce Platform",
      description:
        " A multi-vendor e-commerce platform with user-friendly interface",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      imageUrl: "/project3.png",
      projectUrl: "https://example.com/project3",
    },
  ];

  // State for hover effects
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Animation variants for Framer Motion
  const projectVariants: Variants = {
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

  const techBadgeVariants: Variants = {
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
    <div className="container mx-auto px-4 md:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            hoveredProject={hoveredProject}
            setHoveredProject={setHoveredProject}
            projectVariants={projectVariants}
            techBadgeVariants={techBadgeVariants}
          />
        ))}
      </div>
    </div>
  );
};

// Project Card component with individual scroll animations
interface ProjectCardProps {
  project: Project;
  hoveredProject: number | null;
  setHoveredProject: React.Dispatch<React.SetStateAction<number | null>>;
  projectVariants: Variants;
  techBadgeVariants: Variants;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  hoveredProject,
  setHoveredProject,
  projectVariants,
  techBadgeVariants,
}) => {
  // Reference to the component for InView detection
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    once: true,
    amount: 0.3, // Triggers when 30% of the element is in view
    margin: "0px 0px -100px 0px", // Negative bottom margin to trigger earlier
  });

  return (
    <motion.div
      ref={cardRef}
      className="group"
      variants={projectVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div
        className={`h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 hover:border-slate-300 hover:translate-y-[-4px] ${
          hoveredProject === project.id ? "border-slate-500" : ""
        }`}
      >
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
          <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mt-auto"
            variants={techBadgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={techBadgeVariants}
                className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-full"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection2;
