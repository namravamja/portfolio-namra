"use client";

import { motion } from "framer-motion";

const ExperienceFeatured = ({
  experiences,
  activeExperience,
  opacity,
  y,
  renderIcon,
}: any) => (
  <motion.div
    style={{ opacity, y }}
    className="container mx-auto px-4 md:px-8 py-8"
  >
    {experiences.map((experience: any) => (
      <motion.div
        key={experience.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: activeExperience === experience.id ? 1 : 0,
          y: activeExperience === experience.id ? 0 : 20,
          position:
            activeExperience === experience.id ? "relative" : "absolute",
          zIndex: activeExperience === experience.id ? 10 : -10,
          display: activeExperience === experience.id ? "block" : "none",
        }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white rounded-xl shadow-lg p-6 md:p-8 border border-slate-200"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div
            className={`flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-lg ${experience.color}`}
          >
            {renderIcon(experience.icon)}
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold">{experience.title}</h3>
            <p className="text-purple-600">{experience.company}</p>
            <p className="text-sm text-gray-500">{experience.period}</p>
            <div className="mt-4 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border-l-4 border-pink-300 italic">
              "{experience.highlight}"
            </div>
            <p className="mt-4 text-gray-700">{experience.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-pink-50 text-sm rounded-full border border-pink-100"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

export default ExperienceFeatured;
