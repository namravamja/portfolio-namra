"use client";

const ExperienceDesktopNavigation = ({
  experiences,
  activeExperience,
  setActiveExperience,
  renderIcon,
}: any) => (
  <div className="hidden md:block container mx-auto px-4 md:px-8 py-12 ">
    <div className="flex overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex space-x-1 md:space-x-2 mx-auto">
        {experiences.map((exp: any) => (
          <button
            key={exp.id}
            onClick={() => setActiveExperience(exp.id)}
            className={`flex flex-col items-center px-4 py-2 rounded-lg ${
              activeExperience === exp.id
                ? "bg-gradient-to-r from-pink-100 to-purple-100 shadow-md scale-105"
                : "hover:bg-gray-100"
            }`}
          >
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 ${exp.color}`}
            >
              {renderIcon(exp.icon)}
            </span>
            <span className="text-sm font-medium whitespace-nowrap">
              {exp.period}
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceDesktopNavigation;
