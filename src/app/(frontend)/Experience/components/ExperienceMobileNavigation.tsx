"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Experience {
  id: string;
  period: string;
}

interface ExperienceMobileNavigationProps {
  activeExperience: string;
  setActiveExperience: (id: string) => void;
  experiences: Experience[];
  handleNext: () => void;
  handlePrevious: () => void;
}

const ExperienceMobileNavigation = ({
  activeExperience,
  setActiveExperience,
  experiences,
  handleNext,
  handlePrevious,
}: ExperienceMobileNavigationProps) => {
  const activeExp = experiences.find(
    (exp) => exp.id === activeExperience
  );

  return (
    <div className="md:hidden container mx-auto px-4 py-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200"
          >
            <ChevronLeft size={24} className="text-pink-600" />
          </button>

          <div className="text-center px-4">
            <span className="font-medium text-lg text-purple-700">
              {activeExp?.period}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200"
          >
            <ChevronRight size={24} className="text-pink-600" />
          </button>
        </div>

        <div className="flex space-x-2 mb-6">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperience(exp.id)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeExperience === exp.id
                  ? "bg-pink-500 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceMobileNavigation;
