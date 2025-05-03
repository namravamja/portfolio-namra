"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

// Define types for the experience data and component props
interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  color: string;
  icon: ReactNode;
  description: string;
  highlight: string;
  skills: string[];
}

interface ExperienceGridProps {
  experiences: Experience[];
  renderIcon: (icon: ReactNode) => ReactNode;
}

const ExperienceGrid = ({ experiences, renderIcon }: ExperienceGridProps) => (
  <div className="hidden md:block container mx-auto px-4 md:px-8 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="group bg-white border border-slate-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-all"
        >
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`w-12 h-12 rounded-lg ${experience.color} flex items-center justify-center`}
            >
              {renderIcon(experience.icon)}
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-purple-600">{experience.company}</p>
              <p className="text-sm text-gray-500">{experience.period}</p>
            </div>
          </div>
          <p className="text-gray-700">{experience.description}</p>
          <div className="mt-4 bg-pink-50 p-3 rounded-md text-sm border-l-2 border-pink-300">
            {experience.highlight}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {experience.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ExperienceGrid;
