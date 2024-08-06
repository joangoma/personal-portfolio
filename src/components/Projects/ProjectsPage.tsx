import ProjectCard from "./ProjectCard";
import castellimg from '../../assets/castell.png'
import { Projects } from "../types";

interface ProjectsPageProps {
  projects: Projects;
}

const ProjectsPage = ({projects}: ProjectsPageProps) => {
  return (
    <div className="bg-grey-200 bg-gray-200 py-20 p-8 space-y-4">
      <h2 className="text-center mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Projects
      </h2>
      <div className="max-w-5xl mx-auto space-y-4">
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
