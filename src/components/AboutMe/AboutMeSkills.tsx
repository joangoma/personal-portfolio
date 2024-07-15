import React, { useState } from "react";
import Modal from "./Modal";

export const AboutMeSkills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="skills">
      <div className="flex justify-center space-x-7">
        <div className="w-80 h-80 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl">
          <i className="bx bx-code-alt bx-md bx-tada-hover"></i>
          <h3 className="mb-2 font-semibold text-gray-900">Coding</h3>
          <button
            onClick={openModal}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
            View More
          </button>
          {isModalOpen && <Modal closeModal={closeModal} />}
        </div>
        <div className="w-80 h-80 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl ">
          <i className="bx bx-award bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Sport</h3>
          <span className="font text-gray-600">Bla bla bla</span>
        </div>
        <div className="w-80 h-80 bg-gray-100 border-2 border-gray-300 text-center content-center rounded-xl ">
          <i className="bx bx-briefcase-alt bx-md bx-tada-hover "></i>
          <h3 className="font-semibold text-gray-900">Sport</h3>
        </div>
      </div>
    </div>
  );
};
