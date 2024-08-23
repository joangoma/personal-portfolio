import React, { useState } from 'react';
import DescriptionComponent from './DescriptionComponent';

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
        <div className="flex flex-col md:flex-row lg:flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="flex-shrink-0 w-48 h-48 sm:mb-4 md:mb-0">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover rounded-lg border border-gray-300 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500"
              onClick={openModal}
            />
          </div>
          <DescriptionComponent title={title} description={description}></DescriptionComponent>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg p-4 w-[80vmin] h-[80vmin] max-w-3xl max-h-3xl">
              <button
                onClick={closeModal}
                className="absolute -top-3 -right-3 bg-white text-gray-800 hover:text-gray-600 text-2xl w-8 h-8 rounded-full flex items-center justify-center shadow-md z-10"
              >
                &times;
              </button>
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };


export default ProjectCard;
