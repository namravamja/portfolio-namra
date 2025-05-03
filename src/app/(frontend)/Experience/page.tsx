"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { Clock, Building, Award, Code } from "lucide-react";

import ExperienceSection1 from "./components/ExperienceSection1";
import ExperienceMobileNavigation from "./components/ExperienceMobileNavigation";
import ExperienceDesktopNavigation from "./components/ExperienceDesktopNavigation";
import ExperienceFeatured from "./components/ExperienceFeatured";
import ExperienceGrid from "./components/ExperienceGrid";
import ExperienceMobileNext from "./components/ExperienceMobileNext";

const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led the development...",
    skills: ["React", "Next.js"],
    icon: Code,
    color: "bg-pink-100 text-pink-600",
    highlight: "Reduced load times by 40%",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed full-stack...",
    skills: ["Node.js", "React"],
    icon: Building,
    color: "bg-purple-100 text-purple-600",
    highlight: "API serving 1M+ requests",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Creative Web Agency",
    period: "2016 - 2018",
    description: "Created responsive UIs...",
    skills: ["HTML", "CSS"],
    icon: Award,
    color: "bg-indigo-100 text-indigo-600",
    highlight: "30+ websites delivered",
  },
  {
    id: 4,
    title: "Web Development Intern",
    company: "StartUp Ventures",
    period: "2015 - 2016",
    description: "Assisted with bugs...",
    skills: ["JavaScript", "WordPress"],
    icon: Clock,
    color: "bg-blue-100 text-blue-600",
    highlight: "Reduced error rates by 35%",
  },
];

const Page = () => {
  const [activeExperience, setActiveExperience] = useState(1);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60]);

  const handlePrevious = () => {
    setActiveExperience((prev) => (prev === 1 ? experiences.length : prev - 1));
  };

  const handleNext = () => {
    setActiveExperience((prev) => (prev === experiences.length ? 1 : prev + 1));
  };

  const renderIcon = (Icon: any) => <Icon size={24} />;

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

export default Page;
