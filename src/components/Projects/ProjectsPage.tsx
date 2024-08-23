import ProjectCard from "./ProjectCard";
import { Projects } from "../types";

interface ProjectsPageProps {
  projects: Projects;
}

const ProjectsPage = ({projects}: ProjectsPageProps) => {
  return (
    <div className="bg-grey-200 bg-gray-200 py-20 p-8 space-y-4" id="projects">
      <h2 className="text-3xl md:text-4xl lg:text-5xl  text-center mb-12 font-bold tracking-tight text-gray-900">
        My Projects
      </h2>
      <div className="w-full mx-auto space-y-4 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
      {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
