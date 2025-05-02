import { generatePageMetadata } from "@/utils/metadata";
import ProjectSection1 from "./components/ProjectSection1";
import ProjectSection2 from "./components/ProjectSection2";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProjectSection1 />
      <ProjectSection2 />
    </div>
  );
};

export const metadata = generatePageMetadata("Projects");
export default Projects;
