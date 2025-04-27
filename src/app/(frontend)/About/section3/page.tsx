import { Icon } from "@iconify/react";

const AboutSection3 = () => {
  // Array of tech with their icons
  const technologies = [
    { name: "Java", icon: "logos:java" },
    { name: "Kotlin", icon: "logos:kotlin" },
    { name: "C++", icon: "logos:c-plusplus" },
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "C#", icon: "logos:c-sharp" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "SQL", icon: "logos:mysql" },
    { name: "MongoDB", icon: "logos:mongodb-icon" },
    { name: "Mongoose", icon: "devicon:mongoose" },
    { name: "Express.js", icon: "logos:express" },
    { name: "Node.js", icon: "logos:nodejs-icon" },
    { name: "postgresql", icon: "devicon:postgresql" },
    { name: "SQLite", icon: "logos:sqlite" },
    { name: "Figma", icon: "logos:figma" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Framer Motion", icon: "logos:framer" },
    { name: "ASP.NET", icon: "logos:dotnet" },
    { name: "PHP", icon: "logos:php" },
    { name: "VS code", icon: "vscode-icons:file-type-vscode" },
    { name: "Visual Studio", icon: "logos:visual-studio" },
    { name: "Android Studio", icon: "devicon:androidstudio" },
    { name: "Vite", icon: "logos:vitejs" },
    { name: "GitHub", icon: "logos:github-icon" }, // Added to make it 28 icons total
    { name: "Git", icon: "logos:git-icon" },
    { name: "RTK", icon: "devicon:redux" },
  ];

  return (
    <div className="flex mt-5 gap-10 h-[36rem] w-full">
      <div className="flex w-96">
        <div className="flex flex-col ml-10">
          <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-black/10 leading-none">
            Skill
          </p>
          <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-violet-900/70 leading-none">
            Stack
          </p>
        </div>
      </div>
      <div className="flex-1 w-full mt-5 mr-10 p-6">
        <div className="grid grid-cols-7 grid-rows-4 gap-4 h-full w-full">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-md shadow-sm hover:shadow-lg hover:border-violet-300 transition-all duration-300 bg-white p-2 cursor-pointer group"
            >
              <div className="flex items-center justify-center h-10">
                <Icon icon={tech.icon} width="40" height="40" />
              </div>
              <div className="mt-2 text-xs font-medium text-gray-500 group-hover:text-violet-700 transition-colors duration-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
