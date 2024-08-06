import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-48 h-48   object-cover rounded-lg border border-gray-300"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
