"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Building, Code } from "lucide-react";

import ExperienceSection1 from "./ExperienceSection1";
import ExperienceMobileNavigation from "./ExperienceMobileNavigation";
import ExperienceDesktopNavigation from "./ExperienceDesktopNavigation";
import ExperienceFeatured from "./ExperienceFeatured";
import ExperienceGrid from "./ExperienceGrid";
import ExperienceMobileNext from "./ExperienceMobileNext";

// Unified Experience type
interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
  highlight: string;
}

const experiences: Experience[] = [
  {
    id: "1",
    title: "Frontend Developer Intern",
    company: "Semicolon Solutions",
    period: "JUNE 2024",
    description: "Led the development...",
    skills: ["HTML", "CSS", "JS", "React", " Tailwind CSS"],
    icon: <Code />,
    color: "bg-pink-100 text-pink-600",
    highlight: "Learn React with API integration",
  },
  {
    id: "2",
    title: "SSIP - Technical Team Member",
    company: "In my college",
    period: "2023 - 2024",
    description: "Build and Deploy SSIP website & projects",
    skills: ["Work with team", "Project Management"],
    icon: <Building />,
    color: "bg-purple-100 text-purple-600",
    highlight: "Connect with new people",
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState<string>("1");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  const handlePrevious = () => {
    setActiveExperience((prev) =>
      prev === "1" ? String(experiences.length) : String(Number(prev) - 1)
    );
  };

  const handleNext = () => {
    setActiveExperience((prev) =>
      prev === String(experiences.length) ? "1" : String(Number(prev) + 1)
    );
  };

  const renderIcon = (Icon: React.ReactNode) => <>{Icon}</>;

  return (
    <div className="relative overflow-hidden min-h-screen" ref={containerRef}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-pink-200/30 to-purple-300/20 blur-3xl" />
      </div>

      <ExperienceSection1 />
      <ExperienceMobileNavigation
        activeExperience={activeExperience}
        setActiveExperience={setActiveExperience}
        experiences={experiences}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <ExperienceDesktopNavigation
        experiences={experiences}
        activeExperience={activeExperience}
        setActiveExperience={setActiveExperience}
        renderIcon={renderIcon}
      />
      <ExperienceFeatured
        experiences={experiences}
        activeExperience={activeExperience}
        opacity={opacity}
        y={y}
        renderIcon={renderIcon}
      />
      <ExperienceGrid experiences={experiences} renderIcon={renderIcon} />
      <ExperienceMobileNext handleNext={handleNext} />
    </div>
  );
};

export default Experience;
