import React, { useState } from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-48 h-48 object-cover rounded-lg border border-gray-300 transform transition-transform duration-300 hover:w-96 hover:h-96"
        />
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

/*
Button option

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageToggle = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className={`object-cover rounded-lg border border-gray-300 transition-transform duration-300 ${isEnlarged ? 'w-96 h-96' : 'w-48 h-48'}`}
        />
        <button
          onClick={handleImageToggle}
          className="absolute bottom-2 right-2 bg-white border border-gray-300 rounded-lg w-8 h-8 shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
        >
          {isEnlarged ? '-' : '+'}
        </button>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

*/


export default ProjectCard;
