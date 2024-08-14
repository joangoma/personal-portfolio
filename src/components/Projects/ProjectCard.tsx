import React, { useState } from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="mb-4 relative">
          <img
            src={imageSrc}
            alt={title}
            className="w-48 h-48 object-cover rounded-lg border border-gray-300 cursor-pointer transform transition-transform duration-300"
            onClick={openModal}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-center md:text-left lg:text-left text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg p-4 max-w-3xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto max-h-screen object-contain"
            />
          </div>
        </div>
      )}
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
